/* ══════════════════════════════════════════════════════════════════════════
   Larisel furniture — the shop around the configurator
   ══════════════════════════════════════════════════════════════════════════
   One module every page imports: the language (English by default, Turkish
   and Russian a click away, remembered), the header and the footer, the cart,
   the saved designs and the orders, the drawers they open in, and a toast.

   The shop keeps its state in the visitor's browser (localStorage): a demo
   store has no server, and nothing about a visitor leaves the page unless
   they write to us themselves (contact/: their own e-mail app). Every read
   and write is guarded — private windows and full storage still get a
   working page, only without memory.

   Strings shown by this module and by the pages carry data-s keys (the
   configurator's own data-t keys are its business): a page registers its
   words with words({ en, tr, ru }) and they are written on every language
   change.                                                                   */

export const LANGS = ['en', 'tr', 'ru'];
const LANG_KEY = 'larisel-lang';

const read = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } };
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } };

let lang = 'en';
try { const saved = localStorage.getItem(LANG_KEY); if (LANGS.includes(saved)) lang = saved; } catch (e) { /* private mode */ }
/* ?lang=tr wins over the remembered choice (a link sent in the reader's language) — and is remembered */
{ const asked = new URLSearchParams(location.search).get('lang'); if (LANGS.includes(asked)) { lang = asked; try { localStorage.setItem(LANG_KEY, asked); } catch (e) { /* private mode */ } } }
export const getLang = () => lang;

/* ── words ─────────────────────────────────────────────────────────────── */
const DICT = {
  en: {
    'brand.sub': 'Furniture', demo: 'Demo',
    'nav.shop': 'Shop', 'nav.materials': 'Materials', 'nav.atelier': 'Atelier', 'nav.help': 'Help', 'nav.contact': 'Contact',
    'nav.orders': 'My orders', 'nav.favs': 'Saved designs', 'nav.cart': 'Cart', 'nav.menu': 'Menu', 'nav.lang': 'Language',
    close: 'Close',
    'cart.title': 'Your cart', 'cart.empty': 'Your cart is empty.',
    'cart.emptyLead': 'Design a piece and add it here — every one is made to order for you.',
    'cart.start': 'Start designing', 'cart.subtotal': 'Subtotal', 'cart.delivery': 'Delivery & assembly', 'cart.free': 'Free',
    'cart.total': 'Total', 'cart.checkout': 'Checkout', 'cart.edit': 'Edit design', 'cart.remove': 'Remove',
    'cart.qty': 'Quantity', 'cart.less': 'One fewer', 'cart.more': 'One more', 'cart.added': 'Added to your cart', 'cart.view': 'View cart',
    'cart.instal': 'or 12 × %s, interest-free', 'cart.made': 'Made to order · %d days',
    'fav.title': 'Saved designs', 'fav.empty': 'Nothing saved yet. Tap the heart on a design to keep it here.',
    'fav.open': 'Open', 'fav.toCart': 'Add to cart', 'fav.saved': 'Saved to your designs', 'fav.removed': 'Removed from your saved designs',
    'foot.tag': 'Furniture made to order, designed by you.', 'foot.shop': 'Shop', 'foot.help': 'Help', 'foot.atelier': 'Atelier',
    'p.armchair': 'Armchair', 'p.sofa': 'Sofa', 'p.table': 'Coffee table', 'foot.samples': 'Free samples',
    'foot.delivery': 'Delivery', 'foot.returns': 'Returns', 'foot.warranty': 'Warranty', 'foot.care': 'Care', 'foot.faq': 'Questions',
    'foot.about': 'About us', 'foot.privacy': 'Privacy',
    'foot.demo': 'A demo store by the Larisel studio: the pieces, prices and orders are illustrative, and no payment is taken.',
    'foot.studio': 'larisel.com',
    'f.name': 'Full name', 'f.email': 'E-mail', 'f.phone': 'Phone', 'f.optional': 'optional', 'f.required': 'Please fill this in',
    'f.badEmail': 'Please enter a valid e-mail address', 'f.badPhone': 'Please enter a valid phone number',
  },
  tr: {
    'brand.sub': 'Mobilya', demo: 'Demo',
    'nav.shop': 'Mağaza', 'nav.materials': 'Malzemeler', 'nav.atelier': 'Atölye', 'nav.help': 'Yardım', 'nav.contact': 'İletişim',
    'nav.orders': 'Siparişlerim', 'nav.favs': 'Kayıtlı tasarımlar', 'nav.cart': 'Sepet', 'nav.menu': 'Menü', 'nav.lang': 'Dil',
    close: 'Kapat',
    'cart.title': 'Sepetiniz', 'cart.empty': 'Sepetiniz boş.',
    'cart.emptyLead': 'Bir mobilya tasarlayıp buraya ekleyin — her biri sizin için siparişe özel üretilir.',
    'cart.start': 'Tasarlamaya başla', 'cart.subtotal': 'Ara toplam', 'cart.delivery': 'Teslimat ve kurulum', 'cart.free': 'Ücretsiz',
    'cart.total': 'Toplam', 'cart.checkout': 'Siparişi tamamla', 'cart.edit': 'Tasarımı düzenle', 'cart.remove': 'Kaldır',
    'cart.qty': 'Adet', 'cart.less': 'Bir azalt', 'cart.more': 'Bir artır', 'cart.added': 'Sepete eklendi', 'cart.view': 'Sepeti gör',
    'cart.instal': 'ya da faizsiz 12 × %s', 'cart.made': 'Siparişe özel üretim · %d gün',
    'fav.title': 'Kayıtlı tasarımlar', 'fav.empty': 'Henüz kayıtlı tasarım yok. Bir tasarımı burada saklamak için kalbe dokunun.',
    'fav.open': 'Aç', 'fav.toCart': 'Sepete ekle', 'fav.saved': 'Tasarımlarınıza kaydedildi', 'fav.removed': 'Kayıtlı tasarımlardan çıkarıldı',
    'foot.tag': 'Siparişe özel üretilen, sizin tasarladığınız mobilya.', 'foot.shop': 'Mağaza', 'foot.help': 'Yardım', 'foot.atelier': 'Atölye',
    'p.armchair': 'Koltuk', 'p.sofa': 'Kanepe', 'p.table': 'Sehpa', 'foot.samples': 'Ücretsiz numune',
    'foot.delivery': 'Teslimat', 'foot.returns': 'İade', 'foot.warranty': 'Garanti', 'foot.care': 'Bakım', 'foot.faq': 'Sorular',
    'foot.about': 'Hakkımızda', 'foot.privacy': 'Gizlilik',
    'foot.demo': 'Larisel stüdyosunun demo mağazası: ürünler, fiyatlar ve siparişler örnek amaçlıdır; ödeme alınmaz.',
    'foot.studio': 'larisel.com',
    'f.name': 'Ad soyad', 'f.email': 'E-posta', 'f.phone': 'Telefon', 'f.optional': 'isteğe bağlı', 'f.required': 'Lütfen doldurun',
    'f.badEmail': 'Lütfen geçerli bir e-posta adresi girin', 'f.badPhone': 'Lütfen geçerli bir telefon numarası girin',
  },
  ru: {
    'brand.sub': 'Мебель', demo: 'Демо',
    'nav.shop': 'Магазин', 'nav.materials': 'Материалы', 'nav.atelier': 'Мастерская', 'nav.help': 'Помощь', 'nav.contact': 'Контакты',
    'nav.orders': 'Мои заказы', 'nav.favs': 'Сохранённые', 'nav.cart': 'Корзина', 'nav.menu': 'Меню', 'nav.lang': 'Язык',
    close: 'Закрыть',
    'cart.title': 'Ваша корзина', 'cart.empty': 'Корзина пуста.',
    'cart.emptyLead': 'Создайте свою мебель и добавьте её сюда — каждая вещь изготавливается на заказ.',
    'cart.start': 'Начать', 'cart.subtotal': 'Подытог', 'cart.delivery': 'Доставка и сборка', 'cart.free': 'Бесплатно',
    'cart.total': 'Итого', 'cart.checkout': 'Оформить заказ', 'cart.edit': 'Изменить дизайн', 'cart.remove': 'Удалить',
    'cart.qty': 'Количество', 'cart.less': 'На одну меньше', 'cart.more': 'Ещё одну', 'cart.added': 'Добавлено в корзину', 'cart.view': 'Открыть корзину',
    'cart.instal': 'или 12 × %s без переплаты', 'cart.made': 'Изготовление на заказ · %d',
    'fav.title': 'Сохранённые дизайны', 'fav.empty': 'Пока ничего нет. Нажмите на сердце, чтобы сохранить дизайн здесь.',
    'fav.open': 'Открыть', 'fav.toCart': 'В корзину', 'fav.saved': 'Сохранено в ваших дизайнах', 'fav.removed': 'Удалено из сохранённых',
    'foot.tag': 'Мебель на заказ — по вашему дизайну.', 'foot.shop': 'Магазин', 'foot.help': 'Помощь', 'foot.atelier': 'Мастерская',
    'p.armchair': 'Кресло', 'p.sofa': 'Диван', 'p.table': 'Журнальный столик', 'foot.samples': 'Бесплатные образцы',
    'foot.delivery': 'Доставка', 'foot.returns': 'Возврат', 'foot.warranty': 'Гарантия', 'foot.care': 'Уход', 'foot.faq': 'Вопросы',
    'foot.about': 'О нас', 'foot.privacy': 'Конфиденциальность',
    'foot.demo': 'Демо-магазин студии Larisel: товары, цены и заказы — для примера, оплата не взимается.',
    'foot.studio': 'larisel.com',
    'f.name': 'Имя и фамилия', 'f.email': 'Эл. почта', 'f.phone': 'Телефон', 'f.optional': 'необязательно', 'f.required': 'Заполните это поле',
    'f.badEmail': 'Введите корректный адрес почты', 'f.badPhone': 'Введите корректный номер телефона',
  },
};
export function words(more) {
  for (const l of LANGS) Object.assign(DICT[l], more[l] || {});
}
export const t = (key) => (DICT[lang][key] ?? DICT.en[key] ?? key);
/* Russian counts three ways: 1 день, 2 дня, 5 дней */
export const ruPlural = (n, one, few, many) => ({ one, few })[new Intl.PluralRules('ru').select(n)] || many;
export const days = (n) => (lang === 'ru' ? n + ' ' + ruPlural(n, 'день', 'дня', 'дней') : n);
export const price = (v) => '$' + new Intl.NumberFormat('en-US').format(Math.round(v));
export const date = (ms) => new Intl.DateTimeFormat({ en: 'en-GB', tr: 'tr-TR', ru: 'ru-RU' }[lang], { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(ms));
export const pick = (o) => (o ? (o[lang] ?? o.en) : '');

/* every [data-s] (text), [data-s-ph] (placeholder), [data-s-aria] (label) */
export function translate(root = document) {
  root.querySelectorAll('[data-s]').forEach((el) => { el.textContent = t(el.dataset.s); });
  root.querySelectorAll('[data-s-ph]').forEach((el) => { el.setAttribute('placeholder', t(el.dataset.sPh)); });
  root.querySelectorAll('[data-s-aria]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.sAria)); });
}

const langListeners = new Set();
export const onLang = (fn) => langListeners.add(fn);
export function setLang(next) {
  if (!LANGS.includes(next)) return;
  lang = next;
  document.documentElement.lang = next;
  try { localStorage.setItem(LANG_KEY, next); } catch (e) { /* private mode */ }
  /* a ?lang= link has done its work once read: left in the address, a reload would undo this choice */
  try { const u = new URL(location.href); if (u.searchParams.has('lang')) { u.searchParams.delete('lang'); history.replaceState(history.state, '', u); } } catch (e) { /* sandboxed */ }
  translate();
  document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === next)));
  renderDrawers();
  langListeners.forEach((fn) => fn(next));
}

/* ── the visitor's things ──────────────────────────────────────────────── */
const changeListeners = new Set();
export const onChange = (fn) => changeListeners.add(fn);
function changed() { renderBadges(); renderDrawers(); changeListeners.forEach((fn) => fn()); }
addEventListener('storage', (e) => { if (e.key && e.key.startsWith('larisel-')) changed(); });

const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

/* an item: { key, p, title{}, spec{}, price, lead, img, link, qty } — written
   whole by the configurator, so every page can show it without the catalogue */
export const cart = {
  items: () => read('larisel-cart', []),
  count: () => cart.items().reduce((n, it) => n + it.qty, 0),
  total: () => cart.items().reduce((n, it) => n + it.price * it.qty, 0),
  add(item) {
    const items = cart.items();
    const same = items.find((it) => it.key === item.key);
    if (same) same.qty = Math.min(9, same.qty + 1);
    else items.unshift({ ...item, id: uid(), qty: 1 });
    write('larisel-cart', items); changed();
  },
  setQty(id, q) {
    const items = cart.items().map((it) => (it.id === id ? { ...it, qty: Math.max(1, Math.min(9, q)) } : it));
    write('larisel-cart', items); changed();
  },
  remove(id) { write('larisel-cart', cart.items().filter((it) => it.id !== id)); changed(); },
  clear() { write('larisel-cart', []); changed(); },
};
export const favs = {
  items: () => read('larisel-favs', []),
  has: (key) => favs.items().some((it) => it.key === key),
  toggle(item) {
    const items = favs.items();
    const on = items.some((it) => it.key === item.key);
    write('larisel-favs', on ? items.filter((it) => it.key !== item.key) : [{ ...item, id: uid() }, ...items].slice(0, 24));
    changed();
    return !on;
  },
  remove(id) { write('larisel-favs', favs.items().filter((it) => it.id !== id)); changed(); },
};
export const orders = {
  list: () => read('larisel-orders', []),
  get: (id) => orders.list().find((o) => o.id.toUpperCase() === String(id || '').trim().toUpperCase()),
  add(o) { const all = orders.list(); all.unshift(o); write('larisel-orders', all.slice(0, 30)); changed(); },
  newId() {
    const d = new Date();
    return 'LR-' + String(d.getFullYear()).slice(2) + String(d.getMonth() + 1).padStart(2, '0') + '-' + Math.random().toString(36).slice(2, 6).toUpperCase();
  },
};
export const samples = {
  items: () => read('larisel-samples', []),
  set(list) { write('larisel-samples', list.slice(0, 6)); changed(); },
};

/* ── icons ─────────────────────────────────────────────────────────────── */
const svg = (d, extra = '') => `<svg viewBox="0 0 24 24" aria-hidden="true"${extra}><path d="${d}"/></svg>`;
export const ICON = {
  bag: svg('M5 8h14l-1 12H6zM9 8V6.5a3 3 0 0 1 6 0V8'),
  heart: svg('M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.3 4.3 4.3 0 0 1 19.5 10C19.5 15.4 12 20 12 20z'),
  box: svg('M4 8l8-4 8 4v8l-8 4-8-4zM4 8l8 4 8-4M12 12v8'),
  menu: svg('M4 7h16M4 12h16M4 17h16'),
  close: svg('M6 6l12 12M18 6 6 18'),
  minus: svg('M6 12h12'),
  plus: svg('M6 12h12M12 6v12'),
};

/* ── header, footer, drawers ───────────────────────────────────────────── */
let BASE = './';
const link = (path) => BASE + path;

function header(page) {
  const nav = [['', 'nav.shop', 'shop'], ['materials/', 'nav.materials', 'materials'], ['about/', 'nav.atelier', 'about'],
    ['help/', 'nav.help', 'help'], ['contact/', 'nav.contact', 'contact']];
  const navLinks = nav.map(([p, k, id]) => `<a href="${link(p)}" data-s="${k}"${id === page ? ' aria-current="page"' : ''}></a>`).join('');
  const langs = LANGS.map((l) => `<button class="lang__btn" type="button" data-lang="${l}" aria-pressed="${l === lang}">${l.toUpperCase()}</button>`).join('');
  return `
    <a class="brand" href="${link('')}">
      <span class="brand__name">LARISEL</span>
      <span class="brand__sub"><span data-s="brand.sub"></span><i data-s="demo"></i></span>
    </a>
    <nav class="site-nav" aria-label="Main">${navLinks}</nav>
    <div class="site-tools">
      <div class="lang" role="group" data-s-aria="nav.lang">${langs}</div>
      <a class="icon-btn" href="${link('orders/')}" data-s-aria="nav.orders"${page === 'orders' ? ' aria-current="page"' : ''}>${ICON.box}</a>
      <button class="icon-btn" type="button" data-open="favs" data-s-aria="nav.favs">${ICON.heart}<i class="badge" data-badge="favs" hidden></i></button>
      <button class="icon-btn" type="button" data-open="cart" data-s-aria="nav.cart">${ICON.bag}<i class="badge" data-badge="cart" hidden></i></button>
      <button class="icon-btn icon-btn--menu" type="button" data-open="menu" data-s-aria="nav.menu">${ICON.menu}</button>
    </div>`;
}

function footer() {
  const col = (title, items) => `<nav class="foot-col"><p class="foot-title" data-s="${title}"></p>${items.map(([href, k]) => `<a href="${href}" data-s="${k}"></a>`).join('')}</nav>`;
  return `
    <div class="foot-grid">
      <div class="foot-brand">
        <a class="brand brand--foot" href="${link('')}"><span class="brand__name">LARISEL</span></a>
        <p class="foot-tag" data-s="foot.tag"></p>
        <a class="foot-mail" href="mailto:studio@larisel.com">studio@larisel.com</a>
      </div>
      ${col('foot.shop', [[link('?p=armchair'), 'p.armchair'], [link('?p=sofa'), 'p.sofa'], [link('?p=table'), 'p.table'], [link('materials/#samples'), 'foot.samples']])}
      ${col('foot.help', [[link('help/#delivery'), 'foot.delivery'], [link('help/#returns'), 'foot.returns'], [link('help/#warranty'), 'foot.warranty'], [link('help/#care'), 'foot.care'], [link('help/#faq'), 'foot.faq']])}
      ${col('foot.atelier', [[link('about/'), 'foot.about'], [link('contact/'), 'nav.contact'], [link('orders/'), 'nav.orders'], [link('privacy/'), 'foot.privacy']])}
    </div>
    <div class="foot-base">
      <p data-s="foot.demo"></p>
      <p>© 2026 Larisel · <a href="https://larisel.com/" rel="noopener">larisel.com</a></p>
    </div>`;
}

const drawerShell = (name, titleKey) => `
  <div class="drawer" data-drawer="${name}" hidden>
    <div class="drawer__veil" data-close></div>
    <aside class="drawer__panel" role="dialog" aria-modal="true" aria-labelledby="drawer-${name}-title">
      <header class="drawer__head">
        <h2 id="drawer-${name}-title" data-s="${titleKey}"></h2>
        <button class="icon-btn" type="button" data-close data-s-aria="close">${ICON.close}</button>
      </header>
      <div class="drawer__body" data-drawer-body></div>
      <footer class="drawer__foot" data-drawer-foot></footer>
    </aside>
  </div>`;

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function renderCart() {
  const el = document.querySelector('[data-drawer="cart"]');
  if (!el) return;
  const body = el.querySelector('[data-drawer-body]'), foot = el.querySelector('[data-drawer-foot]');
  const items = cart.items();
  if (!items.length) {
    body.innerHTML = `<div class="empty"><p class="empty__title">${esc(t('cart.empty'))}</p><p class="empty__lead">${esc(t('cart.emptyLead'))}</p>
      <a class="btn btn--solid" href="${link('')}">${esc(t('cart.start'))}</a></div>`;
    foot.hidden = true;
    return;
  }
  body.innerHTML = `<ul class="lines">${items.map((it) => `
    <li class="line" data-id="${esc(it.id)}">
      <a class="line__pic" href="${esc(link(it.link))}" tabindex="-1" aria-hidden="true"><img src="${esc(it.img || '')}" alt="" width="120" height="90"></a>
      <div class="line__text">
        <p class="line__title">${esc(pick(it.title))}</p>
        <p class="line__spec">${esc(pick(it.spec))}</p>
        <div class="line__row">
          <div class="qty" role="group" aria-label="${esc(t('cart.qty'))}">
            <button type="button" data-qty="-1" aria-label="${esc(t('cart.less'))}" ${it.qty <= 1 ? 'disabled' : ''}>${ICON.minus}</button>
            <span>${Number(it.qty) || 1}</span>
            <button type="button" data-qty="1" aria-label="${esc(t('cart.more'))}" ${it.qty >= 9 ? 'disabled' : ''}>${ICON.plus}</button>
          </div>
          <strong class="line__price">${price(it.price * it.qty)}</strong>
        </div>
        <div class="line__links"><a href="${esc(link(it.link))}">${esc(t('cart.edit'))}</a><button type="button" data-remove>${esc(t('cart.remove'))}</button></div>
      </div>
    </li>`).join('')}</ul>`;
  const total = cart.total();
  foot.hidden = false;
  foot.innerHTML = `
    <dl class="sums">
      <div><dt>${esc(t('cart.subtotal'))}</dt><dd>${price(total)}</dd></div>
      <div><dt>${esc(t('cart.delivery'))}</dt><dd>${esc(t('cart.free'))}</dd></div>
      <div class="sums__total"><dt>${esc(t('cart.total'))}</dt><dd>${price(total)}</dd></div>
    </dl>
    <p class="sums__note">${esc(t('cart.instal').replace('%s', price(total / 12)))}</p>
    <a class="btn btn--solid btn--wide" href="${link('checkout/')}">${esc(t('cart.checkout'))}</a>`;
  body.querySelectorAll('.line').forEach((li) => {
    const id = li.dataset.id, it = items.find((x) => x.id === id);
    li.querySelectorAll('[data-qty]').forEach((b) => b.addEventListener('click', () => cart.setQty(id, it.qty + Number(b.dataset.qty))));
    li.querySelector('[data-remove]').addEventListener('click', () => cart.remove(id));
  });
}

function renderFavs() {
  const el = document.querySelector('[data-drawer="favs"]');
  if (!el) return;
  const body = el.querySelector('[data-drawer-body]'), foot = el.querySelector('[data-drawer-foot]');
  const items = favs.items();
  foot.hidden = true;
  if (!items.length) {
    body.innerHTML = `<div class="empty"><p class="empty__lead">${esc(t('fav.empty'))}</p><a class="btn btn--line" href="${link('')}">${esc(t('cart.start'))}</a></div>`;
    return;
  }
  body.innerHTML = `<ul class="lines">${items.map((it) => `
    <li class="line" data-id="${esc(it.id)}">
      <a class="line__pic" href="${esc(link(it.link))}" tabindex="-1" aria-hidden="true"><img src="${esc(it.img || '')}" alt="" width="120" height="90"></a>
      <div class="line__text">
        <p class="line__title">${esc(pick(it.title))}</p>
        <p class="line__spec">${esc(pick(it.spec))}</p>
        <div class="line__row"><strong class="line__price">${price(it.price)}</strong></div>
        <div class="line__links"><a href="${esc(link(it.link))}">${esc(t('fav.open'))}</a><button type="button" data-tocart>${esc(t('fav.toCart'))}</button><button type="button" data-remove>${esc(t('cart.remove'))}</button></div>
      </div>
    </li>`).join('')}</ul>`;
  body.querySelectorAll('.line').forEach((li) => {
    const it = items.find((x) => x.id === li.dataset.id);
    li.querySelector('[data-remove]').addEventListener('click', () => { favs.remove(it.id); toast(t('fav.removed')); });
    li.querySelector('[data-tocart]').addEventListener('click', () => { const { id, ...rest } = it; cart.add(rest); openDrawer('cart'); });
  });
}

function renderMenu() {
  const el = document.querySelector('[data-drawer="menu"]');
  if (!el) return;
  const body = el.querySelector('[data-drawer-body]');
  const nav = [['', 'nav.shop'], ['materials/', 'nav.materials'], ['about/', 'nav.atelier'], ['help/', 'nav.help'], ['contact/', 'nav.contact'], ['orders/', 'nav.orders']];
  body.innerHTML = `<nav class="menu-nav">${nav.map(([p, k]) => `<a href="${link(p)}">${esc(t(k))}</a>`).join('')}</nav>
    <div class="lang lang--menu" role="group" aria-label="${esc(t('nav.lang'))}">${LANGS.map((l) => `<button class="lang__btn" type="button" data-lang="${l}" aria-pressed="${l === lang}">${l.toUpperCase()}</button>`).join('')}</div>`;
  body.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
  el.querySelector('[data-drawer-foot]').hidden = true;
}

function renderDrawers() {
  for (const [name, fn] of [['cart', renderCart], ['favs', renderFavs], ['menu', renderMenu]]) {
    const el = document.querySelector(`[data-drawer="${name}"]`);
    if (el) keepFocus(el, fn); else fn();
  }
}

/* Re-rendering with innerHTML drops the focused control (a keyboard user lands
   on <body>): note which item and which control had focus, render, and focus
   its twin — or, when it is gone or disabled, the nearest control that is left. */
const CONTROLS = ['data-qty', 'data-remove', 'data-tocart', 'data-add', 'data-look', 'data-lang', 'data-more', 'data-k'];
export function keepFocus(root, render) {
  const a = document.activeElement;
  if (!a || a === root || !root.contains(a)) { render(); return; }
  const item = a.closest('[data-id], li[data-k]');
  const itemSel = item ? (item.dataset.id ? `[data-id="${CSS.escape(item.dataset.id)}"]` : `li[data-k="${CSS.escape(item.dataset.k)}"]`) : null;
  const ctl = CONTROLS.find((x) => a.hasAttribute(x));
  const ctlSel = ctl ? `[${ctl}="${CSS.escape(a.getAttribute(ctl))}"]` : null;
  render();
  const scope = itemSel ? root.querySelector(itemSel) : root;
  let next = scope && ctlSel ? scope.querySelector(ctlSel) || (scope.matches(ctlSel) ? scope : null) : null;
  if (!next || next.disabled) next = scope && scope.querySelector('button:not([disabled]), a[href]:not([tabindex="-1"])');
  if (!next) next = root.querySelector('[data-close].icon-btn') || root.querySelector('button:not([disabled]), a[href]:not([tabindex="-1"])');
  if (next) next.focus({ preventScroll: true });
}

/* A dialog over the page: everything beside it goes inert while it is open.
   Each opener undoes only what it did itself, so a drawer opened over a sheet
   and closed again leaves the sheet's page still locked. */
const locks = [];
export function lock(el) {
  if (locks.some((l) => l.el === el)) return;
  const nodes = [], freed = el.inert;
  if (freed) el.inert = false;
  document.querySelectorAll('body > *').forEach((n) => {
    if (n === el || n.contains(el) || n.inert || n.matches('script, .toast-host')) return;
    n.inert = true; nodes.push(n);
  });
  locks.push({ el, nodes, freed });
}
export function unlock(el) {
  const i = locks.findIndex((l) => l.el === el);
  if (i < 0) return;
  const [l] = locks.splice(i, 1);
  l.nodes.forEach((n) => { n.inert = false; });
  if (l.freed) el.inert = true;
}

function renderBadges() {
  const set = (name, n) => document.querySelectorAll(`[data-badge="${name}"]`).forEach((b) => { b.hidden = !n; b.textContent = n > 9 ? '9+' : String(n); });
  set('cart', cart.count()); set('favs', favs.items().length);
}

/* a drawer: slides in over a softened page; Escape, the veil or the cross closes it */
let lastFocus = null;
export function openDrawer(name) {
  const el = document.querySelector(`[data-drawer="${name}"]`);
  if (!el) return;
  document.querySelectorAll('.drawer.is-open').forEach((d) => { if (d !== el) closeDrawer(d, true); });
  lastFocus = document.activeElement;
  el.hidden = false;
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('is-open')));
  lock(el);
  document.documentElement.classList.add('has-drawer');
  setTimeout(() => { const c = el.querySelector('[data-close].icon-btn'); if (c) c.focus({ preventScroll: true }); }, 60);
}
export function closeDrawer(el, quiet) {
  el.classList.remove('is-open');
  setTimeout(() => { if (!el.classList.contains('is-open')) el.hidden = true; }, 460);
  unlock(el);
  if (!document.querySelector('.drawer.is-open')) {
    document.documentElement.classList.remove('has-drawer');
    if (!quiet && lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
}

/* a short line at the foot of the screen; with an action when given */
let toastTimer = 0;
function toastHost() {
  let host = document.querySelector('.toast-host');
  if (!host) { host = document.createElement('div'); host.className = 'toast-host'; host.setAttribute('role', 'status'); host.setAttribute('aria-live', 'polite'); document.body.appendChild(host); }
  return host;
}
export function toast(text, action) {
  const host = toastHost();
  host.innerHTML = `<div class="toast-pill"><span>${esc(text)}</span>${action ? `<button type="button">${esc(action.label)}</button>` : ''}</div>`;
  if (action) host.querySelector('button').addEventListener('click', () => { host.classList.remove('is-on'); action.run(); });
  requestAnimationFrame(() => host.classList.add('is-on'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => host.classList.remove('is-on'), action ? 4200 : 2800);
}

/* put the shop around a page: base is the path back to the shop's root ('./' or '../') */
export function mount({ base = './', page = '' } = {}) {
  BASE = base;
  document.documentElement.lang = lang;
  const head = document.querySelector('[data-site-head]');
  if (head) head.innerHTML = header(page);
  const foot = document.querySelector('[data-site-foot]');
  if (foot) foot.innerHTML = footer();
  document.body.insertAdjacentHTML('beforeend', drawerShell('cart', 'cart.title') + drawerShell('favs', 'fav.title') + drawerShell('menu', 'nav.menu'));
  toastHost();
  document.querySelectorAll('[data-open]').forEach((b) => b.addEventListener('click', () => openDrawer(b.dataset.open)));
  document.querySelectorAll('.drawer').forEach((d) => d.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeDrawer(d); }));
  addEventListener('keydown', (e) => { if (e.key === 'Escape') document.querySelectorAll('.drawer.is-open').forEach((d) => closeDrawer(d)); });
  document.querySelectorAll('.site-tools [data-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
  /* the header gains a hairline once the page has scrolled under it */
  const hd = document.querySelector('.site-head');
  if (hd) { const f = () => hd.classList.toggle('is-scrolled', scrollY > 4); addEventListener('scroll', f, { passive: true }); f(); }
  translate();
  renderBadges();
  renderDrawers();
}
