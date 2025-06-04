import React, { useEffect } from 'react';
import useDishes from '../../hooks/useDishes';
import ProductCard from '../productCard/ProductCard';
import './menuCategory.css';

export default function MenuCategory({ categoryIndex, onProductUpdate }) {
    const dishes = useDishes();

    const items = dishes.filter(d =>
        Number(d.category) === Number(categoryIndex)
    );

    useEffect(() => {
        console.log('MenuCategory - Dishes updated:', dishes);
        console.log('MenuCategory - Filtered items:', items);
    }, [dishes, items]);

    return (
        <div className="menu-category">
            {items.map(item => (
                <ProductCard
                    key={item.id}
                    product={item}
                    onProductUpdate={onProductUpdate}
                />
            ))}
        </div>
    );
}
