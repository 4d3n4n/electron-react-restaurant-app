import React, { useContext, useState, useEffect } from 'react';
import { LangContext } from '../../context/LangContext';
import { useAuth } from '../../context/AuthContext';
import pageTexts from '../../data/siteTexts/pages';
import useCategories from '../../hooks/useCategories';
import MenuCategory from '../../components/menuCategory/MenuCategory';
import AddProductModal from '../../components/AddProductModal/AddProductModal';
import EditCategoryModal from '../../components/EditCategoryModal/EditCategoryModal';
import { db } from '../../firebase';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';
import bg from '../../assets/bg.mp4';
import './menu.css';

// Regex pour gérer les commas
const splitRegex = /[,\u3001]\s*/;

export default function Menu() {
    const { lang } = useContext(LangContext);
    const { user } = useAuth();
    const t = lang.toLowerCase();
    const { title, content } = pageTexts.pages.menu;

    const categories = useCategories();
    const [active, setActive] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [editingProduct, setEditingProduct] = useState(null);
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    useEffect(() => {
        if (categories.length && active === null) {
            setActive(categories[0].index);
        }
    }, [categories, active]);

    const handleProductUpdate = (product) => {
        setEditingProduct(product);
        setIsModalOpen(true);
    };

    const handleAddProduct = async (productData) => {
        try {
            setIsLoading(true);
            setError(null);

            // S'assurer que la catégorie est un nombre
            let finalCategoryId = Number(productData.category);

            if (productData.isNewCategory) {
                // Récupérer le dernier index de catégorie
                const categoriesRef = collection(db, 'categories');
                const categoriesSnapshot = await getDocs(categoriesRef);
                const lastIndex = categoriesSnapshot.docs.reduce((max, doc) => {
                    const index = doc.data().index || 0;
                    return index > max ? index : max;
                }, 0);

                // Validation des traductions de la nouvelle catégorie
                if (!productData.newCategory.fr || !productData.newCategory.en || !productData.newCategory.ja) {
                    throw new Error('Veuillez remplir le nom de la catégorie dans toutes les langues');
                }

                // Créer la nouvelle catégorie
                const newCategoryRef = await addDoc(collection(db, 'categories'), {
                    index: lastIndex + 1,
                    translations: {
                        fr: { name: productData.newCategory.fr },
                        en: { name: productData.newCategory.en },
                        ja: { name: productData.newCategory.ja }
                    }
                });

                // Utiliser le nouvel index comme catégorie
                finalCategoryId = lastIndex + 1;
                console.log('New category created with ID:', finalCategoryId);
            }

            if (editingProduct) {
                // Mise à jour du produit existant
                const productRef = doc(db, 'dishes', editingProduct.id);
                await updateDoc(productRef, {
                    photoURL: productData.imageUrl,
                    price: Number(productData.price),
                    category: finalCategoryId,
                    translations: {
                        fr: {
                            name: productData.title.fr,
                            description: productData.description.fr,
                            ingredients: productData.ingredients.fr,
                            allergenes: productData.allergens.fr
                        },
                        en: {
                            name: productData.title.en,
                            description: productData.description.en,
                            ingredients: productData.ingredients.en,
                            allergenes: productData.allergens.en
                        },
                        ja: {
                            name: productData.title.ja,
                            description: productData.description.ja,
                            ingredients: productData.ingredients.ja,
                            allergenes: productData.allergens.ja
                        }
                    }
                });
            } else {
                // Récupérer la dernière position des produits
                const dishesRef = collection(db, 'dishes');
                const dishesSnapshot = await getDocs(dishesRef);
                const lastPosition = dishesSnapshot.docs.reduce((max, doc) => {
                    const position = doc.data().position || 0;
                    return position > max ? position : max;
                }, 0);

                // Création du produit avec la structure corrigée
                const productRef = await addDoc(collection(db, 'dishes'), {
                    photoURL: productData.imageUrl,
                    price: Number(productData.price),
                    category: finalCategoryId,
                    position: lastPosition + 1,
                    translations: {
                        fr: {
                            name: productData.title.fr,
                            description: productData.description.fr,
                            ingredients: productData.ingredients.fr,
                            allergenes: productData.allergens.fr
                        },
                        en: {
                            name: productData.title.en,
                            description: productData.description.en,
                            ingredients: productData.ingredients.en,
                            allergenes: productData.allergens.en
                        },
                        ja: {
                            name: productData.title.ja,
                            description: productData.description.ja,
                            ingredients: productData.ingredients.ja,
                            allergenes: productData.allergens.ja
                        }
                    }
                });
            }

            setIsLoading(false);
            setIsModalOpen(false);
            setEditingProduct(null);

            // Mettre à jour la catégorie active si une nouvelle catégorie a été créée
            if (productData.isNewCategory) {
                setActive(finalCategoryId);
            }

            // Déclencher le rafraîchissement des produits
            setRefreshTrigger(prev => prev + 1);
        } catch (err) {
            console.error('Erreur lors de la mise à jour du produit:', err);
            setError(err.message || 'Une erreur est survenue lors de la mise à jour du produit');
            setIsLoading(false);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingProduct(null);
    };

    const handleDeleteCategory = async (categoryId) => {
        if (window.confirm(pageTexts.pages.menu.editCategoryModal.deleteConfirm[t])) {
            try {
                setIsLoading(true);
                setError(null);

                // Récupérer d'abord la catégorie pour obtenir son index
                const categoryRef = doc(db, 'categories', categoryId);
                const categoryDoc = await getDoc(categoryRef);

                if (!categoryDoc.exists()) {
                    throw new Error('Catégorie non trouvée');
                }

                const categoryIndex = categoryDoc.data().index;

                // Supprimer tous les produits de cette catégorie
                const dishesRef = collection(db, 'dishes');
                const dishesSnapshot = await getDocs(dishesRef);
                const deletePromises = dishesSnapshot.docs
                    .filter(doc => doc.data().category === categoryIndex)
                    .map(doc => deleteDoc(doc.ref));

                await Promise.all(deletePromises);

                // Supprimer la catégorie
                await deleteDoc(categoryRef);

                // Mettre à jour la catégorie active
                if (active === categoryIndex) {
                    // Si la catégorie supprimée était active, on sélectionne la première catégorie disponible
                    const categoriesRef = collection(db, 'categories');
                    const categoriesSnapshot = await getDocs(categoriesRef);
                    if (!categoriesSnapshot.empty) {
                        const firstCategory = categoriesSnapshot.docs[0].data();
                        setActive(firstCategory.index);
                    } else {
                        setActive(null);
                    }
                }

                setIsLoading(false);
            } catch (err) {
                console.error('Erreur lors de la suppression de la catégorie:', err);
                setError(err.message || 'Une erreur est survenue lors de la suppression de la catégorie');
                setIsLoading(false);
            }
        }
    };

    const handleEditCategory = async (categoryId) => {
        try {
            const categoryRef = doc(db, 'categories', categoryId);
            const categoryDoc = await getDoc(categoryRef);
            if (categoryDoc.exists()) {
                setEditingCategory({ id: categoryId, ...categoryDoc.data() });
                setIsCategoryModalOpen(true);
            }
        } catch (err) {
            console.error('Erreur lors de la récupération de la catégorie:', err);
            setError(err.message || 'Une erreur est survenue lors de la récupération de la catégorie');
        }
    };

    const handleSaveCategory = async (categoryData) => {
        try {
            setIsLoading(true);
            setError(null);

            const categoryRef = doc(db, 'categories', editingCategory.id);
            await updateDoc(categoryRef, categoryData);

            setIsLoading(false);
            setIsCategoryModalOpen(false);
            setEditingCategory(null);
        } catch (err) {
            console.error('Erreur lors de la mise à jour de la catégorie:', err);
            setError(err.message || 'Une erreur est survenue lors de la mise à jour de la catégorie');
            setIsLoading(false);
        }
    };

    const handleCloseCategoryModal = () => {
        setIsCategoryModalOpen(false);
        setEditingCategory(null);
    };

    return (
        <section className="menu-section">
            <video
                className="bg-video"
                src={bg}
                autoPlay
                loop
                muted
                playsInline
            />

            <h1 className="menu-title">{title[t]}</h1>
            <p className="menu-content">{content[t]}</p>

            <div className="menu-nav">
                {user && (
                    <button
                        className="add-product-btn"
                        onClick={() => setIsModalOpen(true)}
                        disabled={isLoading}
                    >
                        {isLoading ? '...' : '+'}
                    </button>
                )}
                <div className="menu-buttons">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        className={cat.index === active ? 'active' : ''}
                        onClick={() => setActive(cat.index)}
                    >
                            {user && (
                                <div className='admin-edit-icons'>
                                    <i
                                        className="fa fa-trash"
                                        aria-hidden="true"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDeleteCategory(cat.id);
                                        }}
                                    />
                                    <i
                                        className="fa fa-pencil"
                                        aria-hidden="true"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleEditCategory(cat.id);
                                        }}
                                    />
                                </div>
                            )}
                        {cat.translations[t].name}
                    </button>
                ))}
                </div>
            </div>

            {active !== null && (
                <MenuCategory
                    categoryIndex={active}
                    onProductUpdate={handleProductUpdate}
                    refreshTrigger={refreshTrigger}
                />
            )}

            <AddProductModal
                isOpen={isModalOpen && !isLoading}
                onClose={handleCloseModal}
                categories={categories}
                onAddProduct={handleAddProduct}
                editingProduct={editingProduct}
            />

            <EditCategoryModal
                isOpen={isCategoryModalOpen && !isLoading}
                onClose={handleCloseCategoryModal}
                onSave={handleSaveCategory}
                category={editingCategory}
            />

            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}
        </section>
    );
}
