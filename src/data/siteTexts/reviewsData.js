import rev1 from '../../assets/rev1.jpg';
import rev2 from '../../assets/rev2.jpg';
import rev3 from '../../assets/rev3.jpg';
import rev4 from '../../assets/rev4.jpg';

export default [
    {
        id: 1,
        image: rev1,
        author: { fr: 'Jean Dupont', en: 'John Doe', ja: '山田太郎' },
        rating: 5,
        comment: {
            fr: "Un service exceptionnel et des plats délicieux. Je recommande vivement !",
            en: "Exceptional service and delicious dishes. Highly recommended!",
            ja: "素晴らしいサービスと美味しい料理。強くお勧めします！"
        }
    },
    {
        id: 2,
        image: rev2,
        author: { fr: 'Marie Curie', en: 'Mary Smith', ja: '佐藤花子' },
        rating: 5,
        comment: {
            fr: "Ambiance cosy et saveurs authentiques. Une expérience inoubliable.",
            en: "Cozy atmosphere and authentic flavors. An unforgettable experience.",
            ja: "居心地の良い雰囲気と本格的な味わい。忘れられない体験でした。"
        }
    },
    {
        id: 3,
        image: rev3,
        author: { fr: 'Paul Martin', en: 'Paul Martin', ja: '高橋一郎' },
        rating: 4,
        comment: {
            fr: "Très bon restaurant, juste un peu bruyant parfois.",
            en: "Great restaurant, just a bit noisy at times.",
            ja: "素晴らしいレストランですが、時々少し騒がしいです。"
        }
    },
    {
        id: 4,
        image: rev4,
        author: { fr: 'Lucie Bernard', en: 'Lucy Brown', ja: '鈴木花子' },
        rating: 5,
        comment: {
            fr: "Le meilleur sushi que j'ai jamais goûté !",
            en: "The best sushi I've ever tasted!",
            ja: "今まで食べた中で最高の寿司です！"
        }
    }
];
