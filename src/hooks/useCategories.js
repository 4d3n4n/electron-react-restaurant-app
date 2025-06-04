import { useState, useEffect } from 'react';
import { db } from '../firebase';
import {
    collection,
    query,
    orderBy,
    onSnapshot
} from 'firebase/firestore';

export default function useCategories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const q = query(
            collection(db, 'categories'),
            orderBy('index', 'asc')
        );
        const unsub = onSnapshot(q, (snap) => {
            setCategories(snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));
        });
        return unsub;
    }, []);

    return categories;
}
