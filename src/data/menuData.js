import { v4 as uuidv4 } from 'uuid';
import img from '../assets/b4.jpg';

const menuData = [
    // Entrées
    {
        id: uuidv4(),
        image: img,
        prix: '¥5,90',
        translations: {
            fr: {
                categorie: 'entrées',
                nom: "Salade d'algues",
                description: "Salade fraîche à base d’algues wakame, assaisonnée de vinaigre de riz et de graines de sésame.",
                ingredients: ['algues wakame', 'vinaigre de riz', 'sésame', 'huile de sésame', 'sucre', 'sel'],
                allergenes: ['sésame']
            },
            en: {
                categorie: 'starters',
                nom: 'Seaweed Salad',
                description: 'Fresh wakame seaweed salad dressed with rice vinegar and sesame seeds.',
                ingredients: ['wakame seaweed', 'rice vinegar', 'sesame', 'sesame oil', 'sugar', 'salt'],
                allergenes: ['sesame']
            },
            ja: {
                categorie: '前菜',
                nom: '海藻サラダ',
                description: 'わかめを使用したさっぱりとしたサラダ。ごま風味の酢で和えています。',
                ingredients: ['わかめ', '米酢', 'ごま', 'ごま油', '砂糖', '塩'],
                allergenes: ['ごま']
            }
        }
    },
    {
        id: uuidv4(),
        image: img,
        prix: '¥6,50',
        translations: {
            fr: {
                categorie: 'entrées',
                nom: 'Gyoza végétarien',
                description: 'Raviolis japonais végétariens garnis de légumes et servis avec une sauce soja légèrement pimentée.',
                ingredients: ['chou', 'carotte', 'céleri', 'soja', 'farine', 'épices'],
                allergenes: ['soja', 'gluten']
            },
            en: {
                categorie: 'starters',
                nom: 'Vegetarian Gyoza',
                description: 'Japanese vegetarian dumplings filled with vegetables and served with a lightly spiced soy dip.',
                ingredients: ['cabbage', 'carrot', 'celery', 'soy', 'flour', 'spices'],
                allergenes: ['soy', 'gluten']
            },
            ja: {
                categorie: '前菜',
                nom: '野菜餃子',
                description: '野菜を詰めたベジタリアンギョーザ。ピリ辛の醤油ダレでどうぞ。',
                ingredients: ['キャベツ', '人参', 'セロリ', '醤油', '小麦粉', 'スパイス'],
                allergenes: ['醤油', '小麦']
            }
        }
    },
    {
        id: uuidv4(),
        image: img,
        prix: '¥4,50',
        translations: {
            fr: {
                categorie: 'entrées',
                nom: 'Soupe Miso',
                description: 'Soupe traditionnelle à base de pâte miso, tofu soyeux et algues wakame.',
                ingredients: ['pâte miso', 'tofu', 'algues wakame', 'dashi'],
                allergenes: ['soja']
            },
            en: {
                categorie: 'starters',
                nom: 'Miso Soup',
                description: 'Traditional soup made from miso paste, silken tofu and wakame seaweed.',
                ingredients: ['miso paste', 'tofu', 'wakame', 'dashi'],
                allergenes: ['soy']
            },
            ja: {
                categorie: '前菜',
                nom: '味噌汁',
                description: '味噌、豆腐、わかめを使用した伝統的な日本のスープ。',
                ingredients: ['味噌', '豆腐', 'わかめ', 'だし'],
                allergenes: ['大豆']
            }
        }
    },
    {
        id: uuidv4(),
        image: img,
        prix: '¥4,00',
        translations: {
            fr: {
                categorie: 'entrées',
                nom: 'Edamame',
                description: 'Fèves de soja légèrement salées, parfaites pour accompagner vos boissons.',
                ingredients: ['fèves de soja', 'sel'],
                allergenes: ['soja']
            },
            en: {
                categorie: 'starters',
                nom: 'Edamame',
                description: 'Lightly salted soybeans, perfect for pairing with your drinks.',
                ingredients: ['soybeans', 'salt'],
                allergenes: ['soy']
            },
            ja: {
                categorie: '前菜',
                nom: '枝豆',
                description: '塩茹でした枝豆。ドリンクとの相性抜群。',
                ingredients: ['枝豆', '塩'],
                allergenes: []
            }
        }
    },
    {
        id: uuidv4(),
        image: img,
        prix: '¥7,20',
        translations: {
            fr: {
                categorie: 'entrées',
                nom: 'Tempura de crevettes',
                description: 'Crevettes enrobées d’une pâte légère et croustillante, servies avec une sauce tempura.',
                ingredients: ['crevettes', 'farine', 'œuf', 'huile'],
                allergenes: ['crustacés', 'gluten', 'œuf']
            },
            en: {
                categorie: 'starters',
                nom: 'Shrimp Tempura',
                description: 'Shrimps coated in a light, crispy batter, served with tempura sauce.',
                ingredients: ['shrimp', 'flour', 'egg', 'oil'],
                allergenes: ['shellfish', 'gluten', 'egg']
            },
            ja: {
                categorie: '前菜',
                nom: 'エビ天ぷら',
                description: 'サクサクの衣をまとったエビ天ぷら。特製タレでどうぞ。',
                ingredients: ['海老', '小麦粉', '卵', '油'],
                allergenes: ['エビ', '小麦', '卵']
            }
        }
    },

    // Plats
    {
        id: uuidv4(),
        image: img,
        prix: '¥12,00',
        translations: {
            fr: {
                categorie: 'plats',
                nom: 'Sushi Assortis',
                description: 'Assortiment de sushi variés préparés avec du riz vinaigré et du poisson frais.',
                ingredients: ['riz', 'poisson frais', 'algues'],
                allergenes: ['poisson']
            },
            en: {
                categorie: 'main courses',
                nom: 'Assorted Sushi',
                description: 'Variety of sushi made with vinegared rice and fresh fish.',
                ingredients: ['rice', 'fresh fish', 'seaweed'],
                allergenes: ['fish']
            },
            ja: {
                categorie: '主菜',
                nom: '盛り合わせ寿司',
                description: '酢飯と新鮮な魚を使った寿司の盛り合わせ。',
                ingredients: ['酢飯', '新鮮な魚', '海苔'],
                allergenes: ['魚']
            }
        }
    },
    {
        id: uuidv4(),
        image: img,
        prix: '¥15,50',
        translations: {
            fr: {
                categorie: 'plats',
                nom: 'Sashimi de saumon',
                description: 'Tranches fines de saumon cru servies avec du wasabi et de la sauce soja.',
                ingredients: ['saumon', 'wasabi', 'sauce soja'],
                allergenes: ['poisson', 'soja']
            },
            en: {
                categorie: 'main courses',
                nom: 'Salmon Sashimi',
                description: 'Thinly sliced raw salmon served with wasabi and soy sauce.',
                ingredients: ['salmon', 'wasabi', 'soy sauce'],
                allergenes: ['fish', 'soy']
            },
            ja: {
                categorie: '主菜',
                nom: 'サーモン刺身',
                description: '薄切りのサーモン刺身。わさびと醤油でどうぞ。',
                ingredients: ['サーモン', 'わさび', '醤油'],
                allergenes: ['魚', '大豆']
            }
        }
    },
    {
        id: uuidv4(),
        image: img,
        prix: '¥11,00',
        translations: {
            fr: {
                categorie: 'plats',
                nom: 'Ramen au porc',
                description: 'Bol de ramen dans un bouillon riche au porc, servi avec chashu et œuf mariné.',
                ingredients: ['nouilles', 'bouillon au porc', 'chashu', 'œuf'],
                allergenes: ['gluten', 'œuf']
            },
            en: {
                categorie: 'main courses',
                nom: 'Pork Ramen',
                description: 'Bowl of ramen in a rich pork broth, topped with chashu and marinated egg.',
                ingredients: ['noodles', 'pork broth', 'chashu', 'egg'],
                allergenes: ['gluten', 'egg']
            },
            ja: {
                categorie: '主菜',
                nom: '豚骨ラーメン',
                description: '豚骨スープのラーメン。チャーシューと味付け卵がトッピング。',
                ingredients: ['麺', '豚骨スープ', 'チャーシュー', '卵'],
                allergenes: ['小麦', '卵']
            }
        }
    },
    {
        id: uuidv4(),
        image: img,
        prix: '¥14,00',
        translations: {
            fr: {
                categorie: 'plats',
                nom: 'Bento Japonais',
                description: 'Boîte bento composée de riz, sashimi, légumes marinés et tempura.',
                ingredients: ['riz', 'sashimi', 'légumes marinés', 'tempura'],
                allergenes: ['poisson', 'gluten', 'œuf']
            },
            en: {
                categorie: 'main courses',
                nom: 'Japanese Bento',
                description: 'Bento box featuring rice, sashimi, pickled vegetables, and tempura.',
                ingredients: ['rice', 'sashimi', 'pickled vegetables', 'tempura'],
                allergenes: ['fish', 'gluten', 'egg']
            },
            ja: {
                categorie: '主菜',
                nom: '日本弁当',
                description: 'ご飯、刺身、漬物、天ぷらが入った日本の弁当。',
                ingredients: ['ご飯', '刺身', '漬物', '天ぷら'],
                allergenes: ['魚', '小麦', '卵']
            }
        }
    },
    {
        id: uuidv4(),
        image: img,
        prix: '¥16,50',
        translations: {
            fr: {
                categorie: 'plats',
                nom: 'Unagi Don (Anguille grillée)',
                description: 'Bol de riz garni d’anguille grillée nappée d’une sauce sucrée.',
                ingredients: ['riz', 'anguille', 'sauce sucrée'],
                allergenes: ['poisson', 'soja']
            },
            en: {
                categorie: 'main courses',
                nom: 'Unagi Don (Grilled Eel)',
                description: 'Rice bowl topped with grilled eel glazed in sweet sauce.',
                ingredients: ['rice', 'eel', 'sweet sauce'],
                allergenes: ['fish', 'soy']
            },
            ja: {
                categorie: '主菜',
                nom: 'うなぎ丼',
                description: '甘いタレで照り焼きにしたうなぎをご飯にのせた丼。',
                ingredients: ['ご飯', 'うなぎ', 'タレ'],
                allergenes: ['魚', '大豆']
            }
        }
    },

    // Desserts
    {
        id: uuidv4(),
        image: img,
        prix: '¥4,50',
        translations: {
            fr: {
                categorie: 'desserts',
                nom: 'Mochi glacé',
                description: 'Boulettes de mochi fourrées à la glace, disponibles en plusieurs parfums.',
                ingredients: ['mochi', 'glace'],
                allergenes: ['lait']
            },
            en: {
                categorie: 'desserts',
                nom: 'Mochi Ice Cream',
                description: 'Mochi balls filled with ice cream, available in various flavors.',
                ingredients: ['mochi', 'ice cream'],
                allergenes: ['milk']
            },
            ja: {
                categorie: 'デザート',
                nom: 'モチアイス',
                description: 'アイスを詰めた餅。多彩なフレーバーをご用意。',
                ingredients: ['餅', 'アイス'],
                allergenes: ['乳']
            }
        }
    },
    {
        id: uuidv4(),
        image: img,
        prix: '¥5,00',
        translations: {
            fr: {
                categorie: 'desserts',
                nom: 'Dorayaki (pancake japonais)',
                description: 'Pancake japonais fourré de pâte de haricots rouges sucrée.',
                ingredients: ['farine', 'œuf', 'sucre', 'pâte de haricots rouges'],
                allergenes: ['gluten', 'œuf']
            },
            en: {
                categorie: 'desserts',
                nom: 'Dorayaki (Japanese Pancake)',
                description: 'Japanese pancake filled with sweet red bean paste.',
                ingredients: ['flour', 'egg', 'sugar', 'red bean paste'],
                allergenes: ['gluten', 'egg']
            },
            ja: {
                categorie: 'デザート',
                nom: 'どら焼き',
                description: 'あんこをはさんだ日本のパンケーキ。',
                ingredients: ['小麦粉', '卵', '砂糖', 'あんこ'],
                allergenes: ['小麦', '卵']
            }
        }
    },
    {
        id: uuidv4(),
        image: img,
        prix: '¥4,00',
        translations: {
            fr: {
                categorie: 'desserts',
                nom: 'Glace au thé vert',
                description: 'Glace artisanale au matcha, onctueuse et parfumée.',
                ingredients: ['lait', 'sucre', 'matcha'],
                allergenes: ['lait']
            },
            en: {
                categorie: 'desserts',
                nom: 'Green Tea Ice Cream',
                description: 'Creamy matcha-flavored ice cream.',
                ingredients: ['milk', 'sugar', 'matcha'],
                allergenes: ['milk']
            },
            ja: {
                categorie: 'デザート',
                nom: '抹茶アイスクリーム',
                description: '濃厚な抹茶味のアイスクリーム。',
                ingredients: ['牛乳', '砂糖', '抹茶'],
                allergenes: ['乳']
            }
        }
    },
    {
        id: uuidv4(),
        image: img,
        prix: '¥4,80',
        translations: {
            fr: {
                categorie: 'desserts',
                nom: 'Gâteau de riz',
                description: 'Gâteau moelleux à base de farine de riz.',
                ingredients: ['farine de riz', 'sucre', 'eau'],
                allergenes: []
            },
            en: {
                categorie: 'desserts',
                nom: 'Rice Cake',
                description: 'Soft cake made with rice flour.',
                ingredients: ['rice flour', 'sugar', 'water'],
                allergenes: []
            },
            ja: {
                categorie: 'デザート',
                nom: '餅ケーキ',
                description: '米粉を使ったふんわりケーキ。',
                ingredients: ['米粉', '砂糖', '水'],
                allergenes: []
            }
        }
    },
    {
        id: uuidv4(),
        image: img,
        prix: '¥5,50',
        translations: {
            fr: {
                categorie: 'desserts',
                nom: 'Panna cotta au yuzu',
                description: 'Dessert crémeux à la panna cotta aromatisée au yuzu.',
                ingredients: ['crème', 'lait', 'sucre', 'yuzu'],
                allergenes: ['lait']
            },
            en: {
                categorie: 'desserts',
                nom: 'Yuzu Panna Cotta',
                description: 'Creamy panna cotta flavored with yuzu.',
                ingredients: ['cream', 'milk', 'sugar', 'yuzu'],
                allergenes: ['milk']
            },
            ja: {
                categorie: 'デザート',
                nom: '柚子のパンナコッタ',
                description: '柚子風味のなめらかなパンナコッタ。',
                ingredients: ['クリーム', '牛乳', '砂糖', '柚子'],
                allergenes: ['乳']
            }
        }
    },

    // Boissons
    {
        id: uuidv4(),
        image: img,
        prix: '¥3,00',
        translations: {
            fr: {
                categorie: 'boissons',
                nom: 'Thé vert',
                description: 'Thé vert japonais fraîchement infusé.',
                ingredients: ['thé vert'],
                allergenes: []
            },
            en: {
                categorie: 'drinks',
                nom: 'Green Tea',
                description: 'Freshly brewed Japanese green tea.',
                ingredients: ['green tea leaves'],
                allergenes: []
            },
            ja: {
                categorie: '飲み物',
                nom: '緑茶',
                description: '新鮮に淹れた日本の緑茶。',
                ingredients: ['緑茶葉'],
                allergenes: []
            }
        }
    },
    {
        id: uuidv4(),
        image: img,
        prix: '¥6,00',
        translations: {
            fr: {
                categorie: 'boissons',
                nom: 'Saké chaud',
                description: 'Saké servi chaud selon la tradition japonaise.',
                ingredients: ['saké'],
                allergenes: []
            },
            en: {
                categorie: 'drinks',
                nom: 'Warm Sake',
                description: 'Traditional Japanese sake served warm.',
                ingredients: ['sake'],
                allergenes: []
            },
            ja: {
                categorie: '飲み物',
                nom: '熱燗',
                description: '伝統的な日本酒を温かく提供。',
                ingredients: ['日本酒'],
                allergenes: []
            }
        }
    },
    {
        id: uuidv4(),
        image: img,
        prix: '¥6,50',
        translations: {
            fr: {
                categorie: 'boissons',
                nom: 'Saké froid',
                description: 'Saké servi à température fraîche pour sublimer les arômes.',
                ingredients: ['saké'],
                allergenes: []
            },
            en: {
                categorie: 'drinks',
                nom: 'Cold Sake',
                description: 'Sake served chilled to enhance its aroma.',
                ingredients: ['sake'],
                allergenes: []
            },
            ja: {
                categorie: '飲み物',
                nom: '冷酒',
                description: '香りを引き立てる冷たい日本酒。',
                ingredients: ['日本酒'],
                allergenes: []
            }
        }
    },
    {
        id: uuidv4(),
        image: img,
        prix: '¥5,00',
        translations: {
            fr: {
                categorie: 'boissons',
                nom: 'Bière japonaise',
                description: 'Bière blonde légère brassée au Japon.',
                ingredients: ['eau', 'orge', 'houblon'],
                allergenes: ['gluten']
            },
            en: {
                categorie: 'drinks',
                nom: 'Japanese Beer',
                description: 'Light lager brewed in Japan.',
                ingredients: ['water', 'barley', 'hops'],
                allergenes: ['gluten']
            },
            ja: {
                categorie: '飲み物',
                nom: '日本のビール',
                description: '日本で醸造された軽いラガービール。',
                ingredients: ['水', '麦芽', 'ホップ'],
                allergenes: ['グルテン']
            }
        }
    },
    {
        id: uuidv4(),
        image: img,
        prix: '¥4,50',
        translations: {
            fr: {
                categorie: 'boissons',
                nom: 'Limonade au yuzu',
                description: 'Boisson pétillante aromatisée au yuzu.',
                ingredients: ['eau', 'sucre', 'yuzu'],
                allergenes: []
            },
            en: {
                categorie: 'drinks',
                nom: 'Yuzu Lemonade',
                description: 'Sparkling drink flavored with yuzu citrus.',
                ingredients: ['water', 'sugar', 'yuzu'],
                allergenes: []
            },
            ja: {
                categorie: '飲み物',
                nom: '柚子レモネード',
                description: '柚子風味の炭酸飲料。',
                ingredients: ['水', '砂糖', '柚子'],
                allergenes: []
            }
        }
    }
];

export default menuData;
