import React, { useState, useEffect } from 'react';
import { LangContext } from '../../context/LangContext';
import pageTexts from '../../data/siteTexts/pages';
import './EditCategoryModal.css';

export default function EditCategoryModal({ isOpen, onClose, onSave, category }) {
    const { lang } = React.useContext(LangContext);
    const t = lang.toLowerCase();
    const texts = pageTexts.pages.menu.editCategoryModal;

    const [categoryData, setCategoryData] = useState({
        fr: '',
        en: '',
        ja: ''
    });

    useEffect(() => {
        if (category) {
            setCategoryData({
                fr: category.translations.fr.name || '',
                en: category.translations.en.name || '',
                ja: category.translations.ja.name || ''
            });
        }
    }, [category]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            translations: {
                fr: { name: categoryData.fr },
                en: { name: categoryData.en },
                ja: { name: categoryData.ja }
            }
        });
    };

    if (!isOpen) return null;

    return (
        <div className="category-modal-overlay">
            <div className="category-modal-content">
                <h2>{category ? texts.title[t] : texts.newTitle[t]}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>{texts.name[t]}</label>
                        <input
                            type="text"
                            value={categoryData.fr}
                            onChange={(e) => setCategoryData(prev => ({ ...prev, fr: e.target.value }))}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>{texts.nameEn[t]}</label>
                        <input
                            type="text"
                            value={categoryData.en}
                            onChange={(e) => setCategoryData(prev => ({ ...prev, en: e.target.value }))}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>{texts.nameJa[t]}</label>
                        <input
                            type="text"
                            value={categoryData.ja}
                            onChange={(e) => setCategoryData(prev => ({ ...prev, ja: e.target.value }))}
                            required
                        />
                    </div>
                    <div className="modal-buttons">
                        <button type="submit">{texts.buttons.save[t]}</button>
                        <button type="button" onClick={onClose}>{texts.buttons.cancel[t]}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
