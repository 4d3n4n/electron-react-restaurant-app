import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

export default function useDishes() {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'dishes'), orderBy('position', 'asc'));
        const unsub = onSnapshot(q, snapshot => {
            const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            console.log('Firestore dishes updated:', items);
            setDishes(items);
        }, err => {
            console.error('Erreur Firestore:', err);
        });

        // Nettoyage de la souscription
        return () => {
            unsub();
        };
    }, []);

    return dishes;
}
