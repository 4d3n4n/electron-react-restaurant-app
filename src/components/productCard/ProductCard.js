import React, { useContext, useEffect } from 'react';
import { LangContext } from '../../context/LangContext';
import pageTexts from '../../data/siteTexts/pages';
import { useAuth } from '../../context/AuthContext';
import { db } from '../../firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import './productCard.css';

export default function ProductCard({ product, onProductUpdate }) {
    const { user } = useAuth();
    const { lang } = useContext(LangContext);
    const t = lang.toLowerCase();
    const { allergens, ingredients } = pageTexts.pages.menu;

    const data = product.translations[t];
    const price = typeof product.price === 'number'
        ? product.price.toFixed(2).replace('.', ',') + ' ¥'
        : product.price;

    useEffect(() => {
        if (user && window.electron) {
            window.electron.onContextMenuAction(({ action, productId }) => {
                if (productId === product.id) {
                    switch (action) {
                        case 'copy':
                            handleCopy();
                            break;
                        case 'delete':
                            handleDelete();
                            break;
                        case 'edit':
                            handleEdit();
                            break;
                    }
                }
            });
        }
    }, [user, product.id]);

    const handleDelete = async () => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
            try {
                await deleteDoc(doc(db, 'dishes', product.id));
                if (onProductUpdate) {
                    onProductUpdate();
                }
            } catch (error) {
                console.error('Erreur lors de la suppression:', error);
                alert('Une erreur est survenue lors de la suppression du produit');
            }
        }
    };

    const handleEdit = () => {
        console.log('Produit à éditer:', product);
        if (onProductUpdate) {
            onProductUpdate(product);
        }
    };

    const handleCopy = () => {
        const textToCopy = `
            ${data.name}
            ${data.description}

            ${ingredients[t]}:
            ${data.ingredients.join(', ')}

            ${data.allergenes?.length > 0 ? `${allergens[t]}:\n${data.allergenes.join(', ')}` : ''}

            ${price}
        `.trim();

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('Informations copiées dans le presse-papier');
            })
            .catch(err => {
                console.error('Erreur lors de la copie:', err);
                alert('Erreur lors de la copie des informations');
            });
    };

    const handleContextMenu = (e) => {
        e.preventDefault();
        if (user && window.electron) {
            window.electron.showContextMenu(e.clientX, e.clientY, product.id);
        }
    };

    return (
        <div
            className="product-card"
            onContextMenu={handleContextMenu}
        >
            {user && (
                <div className='admin-edit-icons'>
                    <i className="fa fa-files-o" aria-hidden="true" onClick={handleCopy}></i>
                    <i className="fa fa-trash" aria-hidden="true" onClick={handleDelete}></i>
                    <i className="fa fa-pencil" aria-hidden="true" onClick={handleEdit}></i>
                </div>
            )}

            <img src={product.photoURL} alt={data.name} className="product-image" />

            <div className="product-info">
                <h3 className="product-name">{data.name}</h3>
                <p className="product-description">{data.description}</p>

                <div className="product-details">
                    <div className="ingredients">
                        <strong>{ingredients[t]}</strong>
                        <ul>
                            {data.ingredients.map((ing, i) => (
                                <li key={i}>{ing}</li>
                            ))}
                        </ul>
                    </div>

                    {data.allergenes?.length > 0 && (
                        <div className="allergenes">
                            <strong>{allergens[t]}</strong>
                            <ul>
                                {data.allergenes.map((a, i) => (
                                    <li key={i}>{a}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <p className="product-price">{price}</p>
            </div>
        </div>
    );
}
