import React, { useState, useContext, useEffect } from 'react';
import { LangContext } from '../../context/LangContext';
import pageTexts from '../../data/siteTexts/pages';
import './AddProductModal.css';

export default function AddProductModal({ isOpen, onClose, categories, onAddProduct, editingProduct }) {
    const { lang } = useContext(LangContext);
    const t = lang.toLowerCase();
    const texts = pageTexts.pages.menu.addProductModal;

    const initialProductData = {
        imageUrl: '',
        title: { fr: '', en: '', ja: '' },
        description: { fr: '', en: '', ja: '' },
        ingredients: { fr: '', en: '', ja: '' },
        allergens: { fr: '', en: '', ja: '' },
        price: '',
        category: '',
        newCategory: { fr: '', en: '', ja: '' },
        isNewCategory: false
    };

    const [productData, setProductData] = useState(initialProductData);

    useEffect(() => {
        if (editingProduct && isOpen) {
            const newProductData = {
                imageUrl: editingProduct.photoURL || '',
                title: {
                    fr: editingProduct.translations?.fr?.name || '',
                    en: editingProduct.translations?.en?.name || '',
                    ja: editingProduct.translations?.ja?.name || ''
                },
                description: {
                    fr: editingProduct.translations?.fr?.description || '',
                    en: editingProduct.translations?.en?.description || '',
                    ja: editingProduct.translations?.ja?.description || ''
                },
                ingredients: {
                    fr: (editingProduct.translations?.fr?.ingredients || []).join(', '),
                    en: (editingProduct.translations?.en?.ingredients || []).join(', '),
                    ja: (editingProduct.translations?.ja?.ingredients || []).join(', ')
                },
                allergens: {
                    fr: (editingProduct.translations?.fr?.allergenes || []).join(', '),
                    en: (editingProduct.translations?.en?.allergenes || []).join(', '),
                    ja: (editingProduct.translations?.ja?.allergenes || []).join(', ')
                },
                price: editingProduct.price?.toString() || '',
                category: editingProduct.category?.toString() || '',
                newCategory: { fr: '', en: '', ja: '' },
                isNewCategory: false
            };
            setProductData(newProductData);
        } else {
            setProductData(initialProductData);
        }
    }, [editingProduct, isOpen]);

    const handleImageUrlChange = (e) => {
        setProductData({ ...productData, imageUrl: e.target.value });
    };

    const handleInputChange = (lang, field, value) => {
        if (field === 'newCategory') {
            setProductData({
                ...productData,
                newCategory: {
                    ...productData.newCategory,
                    [lang]: value
                }
            });
        } else {
            setProductData({
                ...productData,
                [field]: { ...productData[field], [lang]: value }
            });
        }
    };

    const handlePriceChange = (e) => {
        const value = e.target.value.replace(',', '.');
        if (value === '' || /^\d*\.?\d{0,2}$/.test(value)) {
            setProductData({ ...productData, price: value });
        }
    };

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        setProductData({ ...productData, category: value });
    };

    const validateImageUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateImageUrl(productData.imageUrl)) {
            alert("Veuillez entrer une URL d'image valide");
            return;
        }

        if (productData.isNewCategory) {
            if (
                !productData.newCategory.fr ||
                !productData.newCategory.en ||
                !productData.newCategory.ja
            ) {
                alert("Veuillez remplir le nom de la catégorie dans toutes les langues");
                return;
            }
        }

        // Avant d'envoyer, on transforme les chaînes en tableaux
        // en scindant sur ',' OU la virgule japonaise '、'
        const splitRegex = /[,\u3001]\s*/;
        const parsed = {
            ...productData,
            ingredients: {},
            allergens: {}
        };

        // Pour chaque langue, on splitte et on trim
        ['fr', 'en', 'ja'].forEach((lang) => {
            parsed.ingredients[lang] = productData.ingredients[lang]
                .split(splitRegex)
                .map((s) => s.trim())
                .filter(Boolean);

            parsed.allergens[lang] = productData.allergens[lang]
                .split(splitRegex)
                .map((s) => s.trim())
                .filter(Boolean);
        });

        onAddProduct(parsed);
        onClose();
    };


    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{editingProduct ? texts.editTitle?.[t] || 'Modifier le produit' : texts.title[t]}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>{texts.productImage[t]}</label>
                        <input
                            type="url"
                            className='image-url-input'
                            value={productData.imageUrl}
                            onChange={handleImageUrlChange}
                            placeholder="https://exemple.com/image.jpg"
                            required
                        />
                        {productData.imageUrl && (
                            <div className="image-preview">
                                <img
                                    src={productData.imageUrl}
                                    alt="Prévisualisation"
                                    onError={(e) => e.target.style.display = 'none'}
                                    onLoad={(e) => e.target.style.display = 'block'}
                                />
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label>{texts.price[t]}</label>
                        <input
                            type="text"
                            value={productData.price}
                            onChange={handlePriceChange}
                            placeholder="0.00"
                            required
                        />
                    </div>

                    {['fr', 'en', 'ja'].map(lang => (
                        <div key={lang} className="language-section">
                            <h3>{lang === 'fr' ? 'Français' : lang === 'en' ? 'English' : '日本語'}</h3>

                            <div className="form-group">
                                <label>{texts.title_field[t]}</label>
                                <input
                                    type="text"
                                    value={productData.title[lang]}
                                    onChange={(e) => handleInputChange(lang, 'title', e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>{texts.description_field[t]}</label>
                                <textarea
                                    value={productData.description[lang]}
                                    onChange={(e) => handleInputChange(lang, 'description', e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>{texts.ingredients_field[t]}</label>
                                <textarea
                                    value={productData.ingredients[lang]}
                                    onChange={(e) => handleInputChange(lang, 'ingredients', e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>{texts.allergens_field[t]}</label>
                                <textarea
                                    value={productData.allergens[lang]}
                                    onChange={(e) => handleInputChange(lang, 'allergens', e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    ))}

                    <div className="form-group">
                        <label className='new-category-label'>
                            <input
                                type="checkbox"
                                checked={productData.isNewCategory}
                                onChange={(e) => {
                                    setProductData({
                                        ...productData,
                                        isNewCategory: e.target.checked,
                                        category: e.target.checked ? '' : productData.category
                                    });
                                }}
                            />
                            {texts.newCategory.checkbox[t]}
                        </label>
                    </div>

                    {productData.isNewCategory ? (
                        ['fr', 'en', 'ja'].map(lang => (
                            <div key={lang} className="form-group">
                                <label>{texts.newCategory.name[t]} ({lang})</label>
                                <input
                                    type="text"
                                    value={productData.newCategory[lang]}
                                    onChange={(e) => handleInputChange(lang, 'newCategory', e.target.value)}
                                    placeholder={`Nom de la catégorie en ${lang === 'fr' ? 'français' : lang === 'en' ? 'anglais' : 'japonais'}`}
                                    required
                                />
                            </div>
                        ))
                    ) : (
                        <div className="form-group">
                            <label>{texts.category[t]}</label>
                            <select
                                value={productData.category}
                                onChange={handleCategoryChange}
                                required
                            >
                                <option value="">{texts.selectCategory[t]}</option>
                                {categories.map(cat => (
                                    <option key={cat.id} value={cat.index}>
                                        {cat.translations[t].name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    <div className="modal-actions">
                        <button type="submit" className="btn-submit">
                            {editingProduct ? texts.buttons.update?.[t] || 'Mettre à jour' : texts.buttons.add[t]}
                        </button>
                        <button type="button" className="btn-cancel" onClick={onClose}>
                            {texts.buttons.cancel[t]}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
