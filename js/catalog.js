/* The catalogue of Larisel furniture: the pieces, their materials, finishes,
   forms, pairings and prices — one file every page reads (the configurator,
   the material library, the cart's descriptions). */

/* ══════════════════════════════════════════════════════════════════════════
   CATALOGUE AND PRICES — edit here
   ══════════════════════════════════════════════════════════════════════════
   Three pieces, one way of making them: each is a set of forms (sizes), main
   materials (cloth, or a table's top), frame finishes (frame, legs, base) and
   pairings, rendered in layers under its own folder of renders/. A new piece
   is one more entry here and one more folder — the page around it does not
   change.

   Names are per language and live on the item, not in a parallel list: a
   colour and its three names can never drift apart if they are one object.
   Prices are in US dollars: the same demo goes to Turkish, Russian and
   international clients, and one currency across every piece of work reads
   as one studio. Only the grouping follows the reader's locale.            */

export const FRAMES = [
  /* four woods from light to dark, then four metals: one row each (the sofa's
     legs and the table's base come in the same eight, so the pieces make a set) */
  { id: 'bleached', hex: '#d9c4a0', price: 60,  name: { en: 'Bleached oak',   tr: 'Ağartılmış meşe', ru: 'Беленый дуб' } },
  { id: 'oak',      hex: '#b98b52', price: 0,   name: { en: 'Oak',            tr: 'Meşe',            ru: 'Дуб' } },
  { id: 'smoked',   hex: '#8a7866', price: 140, name: { en: 'Smoked oak',     tr: 'Füme meşe',       ru: 'Дымчатый дуб' } },
  { id: 'walnut',   hex: '#5b3a24', price: 110, name: { en: 'Walnut',         tr: 'Ceviz',           ru: 'Орех' } },
  { id: 'nickel',   hex: '#c4c2bd', price: 220, name: { en: 'Brushed nickel', tr: 'Nikel',           ru: 'Никель' } },
  { id: 'brass',    hex: '#c8a46a', price: 280, name: { en: 'Brass',          tr: 'Pirinç',          ru: 'Латунь' } },
  { id: 'bronze',   hex: '#8f7656', price: 260, name: { en: 'Bronze',         tr: 'Bronz',           ru: 'Бронза' } },
  { id: 'black',    hex: '#2a2c30', price: 160, name: { en: 'Black steel',    tr: 'Siyah metal',     ru: 'Чёрный металл' } },
];

/* the three upholsteries: each a different cloth, not a tint — what the
   close-up says about it, in a sentence */
export const TYPES = {
  boucle: { name: { en: 'Bouclé', tr: 'Bukle', ru: 'Букле' },
            desc: { en: 'Looped yarn with a soft, nubbly hand: it catches the light in its loops and hides the wear of daily use.',
                    tr: 'İlmekli iplikten yumuşak, kabarık bir doku: ışığı ilmeklerinde tutar, günlük kullanımın izini saklar.',
                    ru: 'Петельная пряжа, мягкая и рельефная: ловит свет в петлях и скрывает следы ежедневной носки.' } },
  velvet: { name: { en: 'Velvet', tr: 'Kadife', ru: 'Бархат' },
            desc: { en: 'A short, dense pile that deepens the colour and glows wherever the light grazes it.',
                    tr: 'Kısa ve sık bir hav: rengi derinleştirir, ışığın sıyırdığı her yerde ışıldar.',
                    ru: 'Короткий густой ворс: углубляет цвет и мерцает там, где его касается свет.' } },
  linen:  { name: { en: 'Linen', tr: 'Keten', ru: 'Лён' },
            desc: { en: 'A matte, natural weave with irregular slubs; it softens and creases with use, as linen should.',
                    tr: 'Mat, doğal bir örgü ve düzensiz iplik kalınlıkları; kullandıkça yumuşar ve kendine has kırışır.',
                    ru: 'Матовое натуральное плетение с неровной нитью: со временем мягчеет и красиво мнётся.' } },
  /* the coffee table's tops */
  marble: { name: { en: 'Marble', tr: 'Mermer', ru: 'Мрамор' },
            desc: { en: 'Polished natural stone: every slab has veins of its own, and the light runs across it like water.',
                    tr: 'Cilalı doğal taş: her plakanın damarı kendine özgüdür, ışık üzerinde su gibi akar.',
                    ru: 'Полированный натуральный камень: у каждой плиты свои прожилки, а свет скользит по ней, как по воде.' } },
  travertine: { name: { en: 'Travertine', tr: 'Traverten', ru: 'Травертин' },
            desc: { en: 'A warm, honed stone laid down in layers, with the small open pores it is known for.',
                    tr: 'Katman katman oluşmuş, sıcak tonlu, honlanmış bir taş — kendine has küçük gözenekleriyle.',
                    ru: 'Тёплый камень с матовой шлифовкой, сложившийся слоями, с характерными мелкими порами.' } },
  wood:   { name: { en: 'Solid wood', tr: 'Masif ahşap', ru: 'Массив дерева' },
            desc: { en: 'Oiled solid planks, each with its own grain and tone; the colour deepens over the years.',
                    tr: 'Yağlanmış masif tahtalar, her biri kendi damarı ve tonuyla; rengi yıllar içinde derinleşir.',
                    ru: 'Промасленные доски из массива, у каждой свой рисунок и тон; с годами цвет становится глубже.' } },
};

export const ARMCHAIR_FABRICS = [
  /* in families, so the two rows read as a palette: light neutrals, greens,
     warm earth, then the deep ones. Every one also dresses the cushion. */
  { id: 'cream',      hex: '#e9e2d6', price: 0,  name: { en: 'Cream',      tr: 'Krem',         ru: 'Сливочный' } },
  { id: 'sand',       hex: '#d8c3a5', price: 0,  name: { en: 'Sand',       tr: 'Kum',          ru: 'Песочный' } },
  { id: 'stone',      hex: '#b8b0a3', price: 0,  name: { en: 'Stone',      tr: 'Taş',          ru: 'Камень' } },
  { id: 'sage',       hex: '#9aa38b', price: 70, name: { en: 'Sage',       tr: 'Adaçayı',      ru: 'Шалфей' } },
  { id: 'olive',      hex: '#5f6b4a', price: 70, name: { en: 'Olive',      tr: 'Zeytin',       ru: 'Олива' } },
  { id: 'forest',     hex: '#2e4638', price: 95, name: { en: 'Forest',     tr: 'Orman yeşili', ru: 'Хвоя' } },
  { id: 'ochre',      hex: '#c0913f', price: 95, name: { en: 'Ochre',      tr: 'Hardal',       ru: 'Охра' } },
  { id: 'terracotta', hex: '#a8553c', price: 95, name: { en: 'Terracotta', tr: 'Terakota',     ru: 'Терракота' } },
  { id: 'rose',       hex: '#c4968a', price: 95, name: { en: 'Dusty rose', tr: 'Gül kurusu',   ru: 'Пыльная роза' } },
  { id: 'bordeaux',   hex: '#6a2c34', price: 95, name: { en: 'Bordeaux',   tr: 'Bordo',        ru: 'Бордо' } },
  { id: 'indigo',     hex: '#2f3f5c', price: 95, name: { en: 'Indigo',     tr: 'İndigo',       ru: 'Индиго' } },
  { id: 'graphite',   hex: '#3c4045', price: 70, name: { en: 'Graphite',   tr: 'Grafit',       ru: 'Графит' } },
].map((f) => Object.assign(f, { type: 'boucle' }));

/* the sofa's 24: eight tones in each cloth, one palette across the three
   (light neutrals, earth, greens and blues, deep) — _film/config/sofa_options.py */
const tone = (type, id, hex, price, en, tr, ru) => ({ id: type + '-' + id, type, hex, price, name: { en, tr, ru } });
export const SOFA_FABRICS = [
  tone('boucle', 'ivory',    '#ebe5d9', 0,   'Ivory',      'Fildişi',      'Слоновая кость'),
  tone('boucle', 'oat',      '#d8cbb3', 0,   'Oat',        'Yulaf',        'Овёс'),
  tone('boucle', 'sand',     '#c6ad8c', 0,   'Sand',       'Kum',          'Песок'),
  tone('boucle', 'mushroom', '#a29486', 0,   'Mushroom',   'Mantar',       'Грибной'),
  tone('boucle', 'clay',     '#b88770', 60,  'Clay',       'Kil',          'Глина'),
  tone('boucle', 'sage',     '#a2a991', 60,  'Sage',       'Adaçayı',      'Шалфей'),
  tone('boucle', 'fog',      '#9ea8af', 60,  'Fog blue',   'Sis mavisi',   'Туманный'),
  tone('boucle', 'charcoal', '#4b4946', 60,  'Charcoal',   'Antrasit',     'Уголь'),
  tone('velvet', 'champagne','#cbb391', 240, 'Champagne',  'Şampanya',     'Шампань'),
  tone('velvet', 'rose',     '#b7817a', 240, 'Dusty rose', 'Gül kurusu',   'Пыльная роза'),
  tone('velvet', 'rust',     '#9c4a31', 240, 'Rust',       'Pas',          'Ржавчина'),
  tone('velvet', 'ochre',    '#b5842c', 240, 'Ochre',      'Hardal',       'Охра'),
  tone('velvet', 'moss',     '#5d683c', 240, 'Moss',       'Yosun',        'Мох'),
  tone('velvet', 'emerald',  '#2d5848', 240, 'Emerald',    'Zümrüt',       'Изумруд'),
  tone('velvet', 'midnight', '#25314a', 240, 'Midnight',   'Gece mavisi',  'Полночь'),
  tone('velvet', 'bordeaux', '#682431', 240, 'Bordeaux',   'Bordo',        'Бордо'),
  tone('linen',  'chalk',    '#e7e2d6', 120, 'Chalk',      'Tebeşir',      'Мел'),
  tone('linen',  'flax',     '#cdc0a8', 120, 'Flax',       'Ham keten',    'Натуральный лён'),
  tone('linen',  'stone',    '#a8a39a', 120, 'Stone',      'Taş',          'Камень'),
  tone('linen',  'sage',     '#8d9981', 120, 'Sage',       'Adaçayı',      'Шалфей'),
  tone('linen',  'sea',      '#7b91a1', 120, 'Sea blue',   'Deniz mavisi', 'Морской'),
  tone('linen',  'rust',     '#a46044', 120, 'Brick',      'Kiremit',      'Кирпич'),
  tone('linen',  'olive',    '#6f6b4b', 120, 'Olive',      'Zeytin',       'Олива'),
  tone('linen',  'charcoal', '#535250', 120, 'Charcoal',   'Antrasit',     'Графит'),
];

/* the coffee table's eight tops: five marbles, the travertine, two solid woods —
   _film/config/table_options.py */
const top = (id, type, hex, price, en, tr, ru) => ({ id, type, hex, price, name: { en, tr, ru } });
export const TABLE_TOPS = [
  top('carrara',    'marble',     '#e6e4df', 240, 'Carrara marble',   'Carrara mermer',   'Мрамор каррара'),
  top('calacatta',  'marble',     '#eeeae2', 420, 'Calacatta marble', 'Calacatta mermer', 'Мрамор калакатта'),
  top('rosa',       'marble',     '#dcbcab', 300, 'Rosa marble',      'Pembe mermer',     'Розовый мрамор'),
  top('travertine', 'travertine', '#d9ccb4', 160, 'Travertine',       'Traverten',        'Травертин'),
  top('verde',      'marble',     '#1d3a2f', 360, 'Verde marble',     'Yeşil mermer',     'Зелёный мрамор'),
  top('nero',       'marble',     '#19191b', 340, 'Nero marble',      'Siyah mermer',     'Чёрный мрамор'),
  top('oak',        'wood',       '#b98b52', 0,   'Solid oak',        'Masif meşe',       'Массив дуба'),
  top('walnut',     'wood',       '#5b3a24', 120, 'Solid walnut',     'Masif ceviz',      'Массив ореха'),
];
/* a dark top throws less light back under the table: its floor shadow is its own render */
export const DARK_TOPS = new Set(['nero', 'verde', 'walnut']);

export const UPHOLSTERY = { en: 'Upholstery', tr: 'Kumaş', ru: 'Ткань' };
export const TONES = { en: 'Tones', tr: 'Tonlar', ru: 'Оттенки' };

export const PRODUCTS = {
  armchair: {
    id: 'armchair', root: './renders/', steps: 72, base: 1290, lead: 14,
    h1: { en: 'Larisel armchair', tr: 'Larisel koltuk', ru: 'Кресло Larisel' },
    lede: { en: 'Build the chair for your own room — the model and the price change as you go.',
            tr: 'Koltuğu kendi odanıza göre kurun — model ve fiyat anında değişir.',
            ru: 'Соберите кресло под свой интерьер — модель и цена меняются сразу.' },
    formLabel: { en: 'Size', tr: 'Ölçü', ru: 'Размер' },
    frameLabel: { en: 'Frame', tr: 'Gövde', ru: 'Каркас' },
    fabricLabel: UPHOLSTERY, rowLabel: TONES,
    pillowLabel: { en: 'Scatter cushion', tr: 'Dekoratif yastık', ru: 'Декоративная подушка' },
    pairsNote: { en: 'chair · cushion · frame', tr: 'koltuk · yastık · gövde', ru: 'кресло · подушка · каркас' },
    pillowPrice: 90,
    /* XL changes the PROPORTIONS, not the overall scale: the chair gets visibly
       wider. In an empty scene a uniform enlargement is indistinguishable from
       the camera moving closer. Measured on the rendered chair (dims.json). */
    forms: [
      { id: 'std', price: 0,   cm: [87, 77, 78],  name: { en: 'Standard', tr: 'Standart', ru: 'Стандарт' } },
      { id: 'xl',  price: 230, cm: [102, 83, 82], name: { en: 'XL',       tr: 'XL',       ru: 'XL' } },
    ],
    fabrics: ARMCHAIR_FABRICS, types: null, frames: FRAMES,
    /* a chair, a cushion and a frame chosen together — one tap sets all three */
    pairs: [
      { fabric: 'sand',     frame: 'walnut',   pillow: 'terracotta', name: { en: 'Earth',    tr: 'Toprak', ru: 'Земля' } },
      { fabric: 'forest',   frame: 'brass',    pillow: 'ochre',      name: { en: 'Club',     tr: 'Kulüp',  ru: 'Клуб' } },
      { fabric: 'sage',     frame: 'bleached', pillow: 'rose',       name: { en: 'Garden',   tr: 'Bahçe',  ru: 'Сад' } },
      { fabric: 'cream',    frame: 'black',    pillow: 'indigo',     name: { en: 'Gallery',  tr: 'Galeri', ru: 'Галерея' } },
      { fabric: 'bordeaux', frame: 'bronze',   pillow: 'sand',       name: { en: 'Opera',    tr: 'Opera',  ru: 'Опера' } },
      { fabric: 'indigo',   frame: 'nickel',   pillow: 'stone',      name: { en: 'Midnight', tr: 'Gece',   ru: 'Полночь' } },
    ],
    fabricSwatch: (f) => 'renders/swatch/fab-' + f.id + '.webp',
    pairSrc: (pr) => 'renders/pairs/' + pr.fabric + '-' + pr.frame + '-' + pr.pillow + '.webp',
    macroSrc: (f) => 'renders/macro/' + f.id + '.webp',
    shadowWithPillow: null,              /* the chair's one cushion throws no shadow of its own on the floor */
    cx: 0.5, cy: 0.56,
    initial: { form: 'std', fabric: 'sand', frame: 'oak', pillow: false, pillowFabric: 'terracotta' },
  },
  sofa: {
    id: 'sofa', root: './renders/sofa/', steps: 72, lead: 21,
    h1: { en: 'Larisel sofa', tr: 'Larisel kanepe', ru: 'Диван Larisel' },
    lede: { en: 'Two seats, three, or a corner with a chaise — in bouclé, velvet or linen, on the legs you choose.',
            tr: 'İkili, üçlü ya da şezlonglu köşe — bukle, kadife ya da keten, seçtiğiniz ayaklarla.',
            ru: 'Двухместный, трёхместный или угловой с оттоманкой — в букле, бархате или льне, на выбранных ножках.' },
    formLabel: { en: 'Shape', tr: 'Form', ru: 'Форма' },
    frameLabel: { en: 'Legs', tr: 'Ayaklar', ru: 'Ножки' },
    fabricLabel: UPHOLSTERY, rowLabel: TONES,
    pillowLabel: { en: 'Scatter cushions, a pair', tr: 'Dekoratif yastık, çift', ru: 'Декоративные подушки, пара' },
    pairsNote: { en: 'sofa · cushions · legs', tr: 'kanepe · yastık · ayak', ru: 'диван · подушки · ножки' },
    pillowPrice: 140,
    forms: [
      { id: 'two',    price: 1890, cm: [176, 95, 89],  name: { en: 'Two-seater',   tr: 'İkili', ru: 'Двухместный' },  icon: 'M5 19v-2.5M27 19v-2.5M3 16.5h26M3.5 16.5v-6a2 2 0 0 1 4 0V13h17v-2.5a2 2 0 0 1 4 0v6M7 10V6.5A2 2 0 0 1 9 4.5h14a2 2 0 0 1 2 2V10M16 4.5V13' },
      { id: 'three',  price: 2390, cm: [236, 95, 89],  name: { en: 'Three-seater', tr: 'Üçlü',  ru: 'Трёхместный' }, icon: 'M5 19v-2.5M27 19v-2.5M2 16.5h28M2.5 16.5v-6a2 2 0 0 1 4 0V13h19v-2.5a2 2 0 0 1 4 0v6M6 10V6.5A2 2 0 0 1 8 4.5h16a2 2 0 0 1 2 2V10M12.7 4.5V13M19.3 4.5V13' },
      { id: 'corner', price: 3290, cm: [276, 163, 89], name: { en: 'Corner',       tr: 'Köşe',  ru: 'Угловой' },     icon: 'M3 4h26v24h-8V12H3zM3 4v8M21 12v16M11 4v8' },
    ],
    fabrics: SOFA_FABRICS, types: ['boucle', 'velvet', 'linen'], frames: FRAMES,
    pairs: [
      { fabric: 'boucle-ivory',    frame: 'walnut',   pillow: 'velvet-rust',     name: { en: 'Studio',   tr: 'Atölye', ru: 'Мастерская' } },
      { fabric: 'velvet-emerald',  frame: 'brass',    pillow: 'velvet-ochre',    name: { en: 'Club',     tr: 'Kulüp',  ru: 'Клуб' } },
      { fabric: 'linen-sea',       frame: 'bleached', pillow: 'linen-chalk',     name: { en: 'Coast',    tr: 'Kıyı',   ru: 'Побережье' } },
      { fabric: 'boucle-charcoal', frame: 'black',    pillow: 'boucle-oat',      name: { en: 'Gallery',  tr: 'Galeri', ru: 'Галерея' } },
      { fabric: 'velvet-bordeaux', frame: 'bronze',   pillow: 'velvet-rose',     name: { en: 'Opera',    tr: 'Opera',  ru: 'Опера' } },
      { fabric: 'linen-sage',      frame: 'oak',      pillow: 'boucle-sand',     name: { en: 'Garden',   tr: 'Bahçe',  ru: 'Сад' } },
      { fabric: 'velvet-midnight', frame: 'nickel',   pillow: 'linen-stone',     name: { en: 'Midnight', tr: 'Gece',   ru: 'Полночь' } },
      { fabric: 'linen-rust',      frame: 'smoked',   pillow: 'boucle-oat',      name: { en: 'Earth',    tr: 'Toprak', ru: 'Земля' } },
    ],
    fabricSwatch: (f) => 'renders/sofa/swatch/fab-' + f.id + '.webp',
    pairSrc: (pr) => 'renders/sofa/pairs/' + pr.fabric + '-' + pr.frame + '-' + pr.pillow + '.webp',
    macroSrc: (f) => 'renders/sofa/macro/' + f.id + '.webp',
    /* two cushions up on the back throw their own shadow on the floor: with them
       chosen, the ground comes from a render with them there */
    shadowWithPillow: 'shadowp',
    cx: 0.5, cy: 0.55,
    initial: { form: 'three', fabric: 'boucle-oat', frame: 'oak', pillow: false, pillowFabric: 'velvet-rust' },
  },
  table: {
    id: 'table', root: './renders/table/', steps: 72, lead: 18,
    h1: { en: 'Larisel coffee table', tr: 'Larisel sehpa', ru: 'Журнальный столик Larisel' },
    lede: { en: 'Round, oval or long — in marble, travertine or solid wood, on the base you choose.',
            tr: 'Yuvarlak, oval ya da uzun — mermer, traverten ya da masif ahşap, seçtiğiniz kaideyle.',
            ru: 'Круглый, овальный или длинный — из мрамора, травертина или массива, на выбранном основании.' },
    formLabel: { en: 'Shape', tr: 'Form', ru: 'Форма' },
    frameLabel: { en: 'Base', tr: 'Kaide', ru: 'Основание' },
    fabricLabel: { en: 'Top', tr: 'Tabla', ru: 'Столешница' },
    rowLabel: { en: 'Tops', tr: 'Tablalar', ru: 'Столешницы' },
    pairsNote: { en: 'top · base', tr: 'tabla · kaide', ru: 'столешница · основание' },
    pillowPrice: 0, pillowLabel: null,                 /* no cushions: the extras are not offered */
    forms: [
      { id: 'round', price: 890,  cm: [90, 90, 38],  round: true, name: { en: 'Round', tr: 'Yuvarlak', ru: 'Круглый' },
        icon: 'M4 16a12 12 0 1 0 24 0a12 12 0 1 0-24 0M16 11.5v9M11.5 16h9' },
      { id: 'oval',  price: 1290, cm: [130, 70, 36], name: { en: 'Oval', tr: 'Oval', ru: 'Овальный' },
        icon: 'M10 9h12a7 7 0 0 1 0 14H10a7 7 0 0 1 0-14zM12.5 16h7' },
      { id: 'rect',  price: 1090, cm: [120, 62, 40], name: { en: 'Long', tr: 'Uzun', ru: 'Длинный' },
        icon: 'M4.5 10h23a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 3 20.5v-9A1.5 1.5 0 0 1 4.5 10zM7 12.5v7M25 12.5v7' },
    ],
    fabrics: TABLE_TOPS, types: null, frames: FRAMES,
    /* a top and a base chosen together */
    pairs: [
      { fabric: 'carrara',    frame: 'nickel',   name: { en: 'Gallery',  tr: 'Galeri',    ru: 'Галерея' } },
      { fabric: 'calacatta',  frame: 'brass',    name: { en: 'Salon',    tr: 'Salon',     ru: 'Салон' } },
      { fabric: 'nero',       frame: 'brass',    name: { en: 'Noir',     tr: 'Noir',      ru: 'Нуар' } },
      { fabric: 'verde',      frame: 'bronze',   name: { en: 'Club',     tr: 'Kulüp',     ru: 'Клуб' } },
      { fabric: 'rosa',       frame: 'bleached', name: { en: 'Riviera',  tr: 'Riviera',   ru: 'Ривьера' } },
      { fabric: 'travertine', frame: 'walnut',   name: { en: 'Roma',     tr: 'Roma',      ru: 'Рим' } },
      { fabric: 'oak',        frame: 'black',    name: { en: 'Atelier',  tr: 'Atölye',    ru: 'Мастерская' } },
      { fabric: 'walnut',     frame: 'brass',    name: { en: 'Library',  tr: 'Kütüphane', ru: 'Библиотека' } },
    ],
    fabricSwatch: (f) => 'renders/table/swatch/fab-' + f.id + '.webp',
    pairSrc: (pr) => 'renders/table/pairs/' + pr.fabric + '-' + pr.frame + '.webp',
    macroSrc: (f) => 'renders/table/macro/' + f.id + '.webp',
    shadowOf: (sel) => (DARK_TOPS.has(sel.fabric) ? 'shadowd' : 'shadow'),
    /* the top always lies above the base as the camera sees it: each was rendered whole,
       the other unseen, and the base is laid first, the top over it (render_table.py) */
    stack: 'over',
    ground: 'light',                                   /* seen from higher: lit floor behind the mark, so ink type */
    cx: 0.5, cy: 0.55,
    initial: { form: 'round', fabric: 'carrara', frame: 'brass', pillow: false, pillowFabric: 'carrara' },
  },
};
export const frameSwatch = (f) => 'renders/swatch/frm-' + f.id + '.webp';

/* ══════════════════════════════════════════════════════════════════════════
   WHAT EACH PIECE IS MADE OF — the specification under the configurator,
   and the parts it travels in (for "will it fit through my door?": the
   largest parts as they come off the van, legs off, in centimetres).
   ══════════════════════════════════════════════════════════════════════════ */
const L3 = (en, tr, ru) => ({ en, tr, ru });
export const DETAILS = {
  armchair: {
    seat: [44, 52],
    rows: [
      [L3('Frame', 'İskelet', 'Каркас'), L3('Kiln-dried solid beech, mortise-and-tenon, glued', 'Fırınlanmış masif kayın, zıvanalı ve tutkallı', 'Сушёный массив бука, шипы на клею')],
      [L3('Seat', 'Oturak', 'Сиденье'), L3('Pocket springs under high-resilience foam', 'Yüksek esneklikli sünger altında cep yayları', 'Пружинный блок под высокоэластичной пеной')],
      [L3('Back', 'Sırt', 'Спинка'), L3('Foam wrapped in feather and down', 'Kaz tüyü sarılı sünger', 'Пена в пуховой обёртке')],
      [L3('Delivered', 'Teslimat', 'Доставка'), L3('In one piece, ready to use', 'Tek parça, kullanıma hazır', 'Целиком, готово к использованию')],
    ],
    parts: { std: [[87, 77, 78]], xl: [[102, 83, 82]] },
  },
  sofa: {
    seat: [45, 58],
    rows: [
      [L3('Frame', 'İskelet', 'Каркас'), L3('Kiln-dried beech and birch plywood, corner-blocked', 'Fırınlanmış kayın ve huş kontrplak, köşe takviyeli', 'Сушёный бук и берёзовая фанера, с угловыми блоками')],
      [L3('Cushions', 'Minderler', 'Подушки'), L3('Foam core wrapped in feather; covers zip off', 'Kaz tüyü sarılı sünger çekirdek; kılıflar fermuarla çıkar', 'Пена в пуховой обёртке; чехлы снимаются на молнии')],
      [L3('Legs', 'Ayaklar', 'Ножки'), L3('11 cm, screw off for delivery', '11 cm, teslimat için sökülür', '11 см, откручиваются для доставки')],
      [L3('Delivered', 'Teslimat', 'Доставка'), L3('In one piece; the corner in two modules, joined in your room', 'Tek parça; köşe iki modül hâlinde gelir, odanızda birleştirilir', 'Целиком; угловой — двумя модулями, соединяются на месте')],
    ],
    parts: { two: [[176, 95, 78]], three: [[236, 95, 78]], corner: [[186, 95, 78], [90, 163, 78]] },
  },
  table: {
    seat: null,
    rows: [
      [L3('Top', 'Tabla', 'Столешница'), L3('Natural stone, polished or honed and sealed; or oiled solid wood', 'Doğal taş, cilalı ya da honlanmış ve koruyucu uygulanmış; veya yağlı masif ahşap', 'Натуральный камень, полированный или матовый, с защитой; или промасленный массив')],
      [L3('Base', 'Kaide', 'Основание'), L3('Solid wood, or steel with a metal finish', 'Masif ahşap ya da metal kaplamalı çelik', 'Массив дерева или сталь с металлическим покрытием')],
      [L3('Load', 'Taşıma', 'Нагрузка'), L3('Up to 60 kg spread over the top', 'Tablaya yayılmış 60 kg’a kadar', 'До 60 кг, распределённых по столешнице')],
      [L3('Delivered', 'Teslimat', 'Доставка'), L3('Top and base apart, put together in your room', 'Tabla ve kaide ayrı gelir, odanızda birleştirilir', 'Столешница и основание отдельно, собираются на месте')],
    ],
    parts: { round: [[90, 90, 4], [45, 45, 35]], oval: [[130, 70, 4], [66, 25, 33]], rect: [[120, 62, 4], [52, 4, 36]] },
  },
};
