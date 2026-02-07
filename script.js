// Funções utilitárias para cookies
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
}

const products = [
    { id: 999, name: "Monte seu Lanche", price: 0.00, category: "hamburgueres", image: "monte-seu-lanche.jpg", description: "Crie seu hambúrguer perfeito escolhendo cada ingrediente." },
    { id: 1, name: "X-Bacon", price: 26.90, category: "hamburgueres", image: "x-bacon.png", description: "Hambúrguer artesanal, queijo, muito bacon crocante e salada." },
    { id: 2, name: "X-Egg", price: 24.90, category: "hamburgueres", image: "x-eagg.png", description: "Hambúrguer suculento, queijo, ovo frito no ponto e salada fresca." },
    { id: 3, name: "X-Tudo", price: 32.90, category: "hamburgueres", image: "x-tudo.png", description: "O gigante: hambúrguer, bacon, ovo, presunto, queijo e salada completa." },
    { id: 4, name: "Hambúrguer Tradicional", price: 22.90, category: "hamburgueres", image: "tradicional.png", description: "O clássico saboroso com carne, queijo e salada." },
    { id: 5, name: "Misto de Frango", price: 16.90, category: "hamburgueres", image: "misto-frango.png", description: "Sanduíche natural com frango desfiado temperado." },
    { id: 6, name: "Misto Peito de Peru", price: 17.90, category: "hamburgueres", image: "misto-peitodeperu.png", description: "Sanduíche leve com peito de peru e queijo branco." },
    { id: 7, name: "Misto Quente", price: 14.90, category: "hamburgueres", image: "misto-quente.png", description: "Clássico pão tostado com presunto e queijo derretido." },
    { id: 8, name: "Sanduíche Queijo Coalho", price: 18.90, category: "hamburgueres", image: "sanuiche-queijocoalho.png", description: "Sanduíche especial com queijo coalho grelhado." },
    { id: 9, name: "Batata com Bacon", price: 24.90, category: "porcoes", image: "babata-bacon.png", description: "Batata frita crocante coberta com cheddar e bacon." },
    { id: 10, name: "Batata com Cheddar", price: 24.90, category: "porcoes", image: "batata-cheddar.png", description: "Batata frita sequinha com muito molho cheddar." },
    { id: 11, name: "Batata Ondulada", price: 18.90, category: "porcoes", image: "batata-ondulada.png", description: "Batatas com corte ondulado, super crocantes." },
    { id: 12, name: "Batata Tradicional", price: 15.90, category: "porcoes", image: "batata-tradicional.png", description: "Porção clássica de batata frita." },
    { id: 13, name: "Coca-Cola", price: 6.00, category: "bebidas", image: "coca-cola.png", description: "Refrigerante Coca-Cola bem gelado." },
    { id: 14, name: "Guaraná", price: 6.00, category: "bebidas", image: "guarana.png", description: "Refrigerante Guaraná Antarctica." },
    { id: 15, name: "Fanta Laranja", price: 6.00, category: "bebidas", image: "refrigerante-fanta.png", description: "Refrigerante Fanta Laranja." },
    { id: 16, name: "Sprite", price: 6.00, category: "bebidas", image: "refrigerante-sprite.png", description: "Refrigerante Sprite limão." },
    { id: 17, name: "Suco de Laranja", price: 9.90, category: "bebidas", image: "suco-laranja.png", description: "Suco natural da fruta, feito na hora." },
    { id: 18, name: "Suco de Limão", price: 9.90, category: "bebidas", image: "suco-limao.png", description: "Limonada suíça refrescante." },
    { id: 19, name: "Suco de Uva", price: 9.90, category: "bebidas", image: "suco-uva.png", description: "Suco de uva integral." },
    { id: 20, name: "Suco de Goiaba", price: 9.90, category: "bebidas", image: "suco-goiaba.png", description: "Suco cremoso de goiaba." },
    { id: 21, name: "Caipirinha de Limão", price: 18.90, category: "bebidas", image: "caipirinha-limao.png", description: "Clássica caipirinha brasileira com limão e cachaça." },
    { id: 22, name: "Campari", price: 16.90, category: "bebidas", image: "campari.png", description: "Dose de Campari com gelo." },
    { id: 23, name: "Cerveja", price: 9.90, category: "bebidas", image: "cerveja.png", description: "Cerveja gelada (consulte marcas)." },
    { id: 24, name: "Vinho", price: 29.90, category: "bebidas", image: "vinho.png", description: "Taça de vinho tinto suave." },
    { id: 25, name: "Bolo de Cenoura", price: 12.90, category: "sobremesas", image: "bolo-cenoura.png", description: "Fatia de bolo de cenoura com cobertura de chocolate." },
    { id: 26, name: "Bolo de Chocolate", price: 12.90, category: "sobremesas", image: "bolo-chocolate.png", description: "Bolo de chocolate molhadinho e recheado." },
    { id: 27, name: "Bolo de Morango", price: 12.90, category: "sobremesas", image: "bolo-morango.png", description: "Bolo branco com recheio de morango e chantilly." },
    { id: 28, name: "Bolo Prestígio", price: 12.90, category: "sobremesas", image: "bolo-prestigio.png", description: "Bolo de chocolate com recheio de coco." },
    { id: 29, name: "Brigadeiro", price: 4.50, category: "sobremesas", image: "brigadeiro.png", description: "Brigadeiro tradicional enrolado." },
    { id: 30, name: "Docinho", price: 4.50, category: "sobremesas", image: "docinho.png", description: "Docinho de leite ninho." },
    { id: 31, name: "Sonho de Creme", price: 8.50, category: "sobremesas", image: "sonho-creme.png", description: "Sonho fofinho recheado com creme de baunilha." },
    { id: 32, name: "Sonho Doce de Leite", price: 8.50, category: "sobremesas", image: "sonho-docedeleite.png", description: "Sonho recheado com doce de leite cremoso." },
    { id: 33, name: "Sorvete de Baunilha", price: 14.90, category: "sobremesas", image: "sorvete-baunilha.png", description: "Casquinha crocante com sorvete de baunilha." },
    { id: 34, name: "Sorvete de Chocolate", price: 14.90, category: "sobremesas", image: "sorvete-chocolate.png", description: "Casquinha crocante com sorvete de chocolate." },
    { id: 35, name: "Sorvete Misto", price: 14.90, category: "sobremesas", image: "sorvete-misto.png", description: "O melhor dos dois mundos: baunilha e chocolate." },
    { id: 36, name: "Sorvete de Morango", price: 14.90, category: "sobremesas", image: "sorvete-morango.png", description: "Casquinha crocante com sorvete de morango." },
    { id: 37, name: "Combo Clássico", price: 32.90, category: "combos", image: "combo-classico.jpg", description: "1 Hambúrguer Tradicional + 1 Batata Frita Pequena + 1 Refrigerante Lata." },
    { id: 38, name: "Combo Duplo Bacon", price: 58.90, category: "combos", image: "combo-duplo-bacon.jpg", description: "2 X-Bacon + 1 Batata Frita Média + 2 Refrigerantes." },
    { id: 39, name: "Combo X-Tudo", price: 39.90, category: "combos", image: "combo-x-tudo.jpg", description: "1 X-Tudo Monstruoso + 1 Batata Frita + 1 Coca-Cola." },
    { id: 40, name: "Combo Happy Hour", price: 45.90, category: "combos", image: "combo-happy-hour.jpg", description: "1 Porção de Batata com Cheddar + 2 Cervejas Long Neck." }
];

let cart = [];

function saveCartToStorage() {
    // Usar localStorage para persistência do carrinho
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateUI();
    }
}

function renderProducts(items) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = items.map(product => `
        <div class="product-card bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div class="relative overflow-hidden">
                 <img src="${product.image}" onerror="this.src='https://placehold.co/400x300?text=Sem+Imagem'" onclick="showProductDetail(${typeof product.id === 'string' ? "'" + product.id + "'" : product.id})" class="w-full h-40 object-cover hover:scale-110 transition-transform duration-300 cursor-pointer">
                 <div class="absolute top-2 right-2 bg-black/50 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-lg font-bold">
                    ${product.category.toUpperCase()}
                 </div>
            </div>
            <div class="p-4">
                <h4 class="font-bold text-sm text-gray-800 line-clamp-2 h-10 mb-1">${product.name}</h4>
                <span class="block text-xl font-brand font-bold text-zinc-900 mb-3">R$ ${product.price.toFixed(2).replace('.', ',')}</span>

                <!-- SELETOR DE QUANTIDADE NO CARD -->
                <div class="flex items-center justify-between bg-gray-50 rounded-xl p-1 mb-3 border border-gray-100">
                    <button onclick="adjustQty(${typeof product.id === 'string' ? "'" + product.id + "'" : product.id}, -1)" class="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm font-bold text-zinc-900 hover:bg-gray-100 transition-colors">-</button>
                    <input type="number" id="qty-${product.id}" value="1" min="1" class="w-10 bg-transparent text-center font-bold text-sm outline-none" readonly>
                    <button onclick="adjustQty(${typeof product.id === 'string' ? "'" + product.id + "'" : product.id}, 1)" class="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm font-bold text-zinc-900 hover:bg-gray-100 transition-colors">+</button>
                </div>

                <button onclick="addToCart(${typeof product.id === 'string' ? "'" + product.id + "'" : product.id})" class="w-full bg-zinc-900 text-white py-2.5 rounded-xl text-[11px] font-bold uppercase hover:bg-yellow-400 hover:text-black transition-all active:scale-95 shadow-sm">${product.id === 999 ? 'Montar' : 'Adicionar'}</button>
            </div>
        </div>
    `).join('');
}

function adjustQty(id, delta) {
    const input = document.getElementById(`qty-${id}`);
    let val = parseInt(input.value) + delta;
    if (val < 1) val = 1;
    input.value = val;
}

// Nova função para ajustar quantidade dentro do carrinho
function adjustCartQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity < 1) {
            remove(id);
        } else {
            updateUI();
            saveCartToStorage();
        }
    }
}

function addToCart(id, customQty = null) {
    const product = products.find(p => p.id === id);
    const qtyInput = document.getElementById(`qty-${id}`);
    const quantity = customQty !== null ? customQty : parseInt(qtyInput.value);

    const existing = cart.find(i => i.id === id);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ ...product, quantity: quantity });
    }

    if (qtyInput) qtyInput.value = 1;
    updateUI();
    saveCartToStorage();

    const btn = event.target;
    if (btn && btn.tagName === 'BUTTON') {
        const originalText = btn.innerText;
        btn.innerText = "ADICIONADO! ✓";
        btn.classList.replace('bg-zinc-900', 'bg-green-500');
        setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.replace('bg-green-500', 'bg-zinc-900');
        }, 800);
    }
}

function updateUI() {
    document.getElementById('cart-count').innerText = cart.reduce((s, i) => s + i.quantity, 0);
    const total = cart.reduce((s, i) => s + (i.price * i.quantity), 0);
    document.getElementById('cart-total').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;

    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        if (cart.length === 0) {
            checkoutBtn.disabled = true;
            checkoutBtn.classList.add('opacity-50', 'cursor-not-allowed', 'grayscale');
            checkoutBtn.classList.remove('hover:bg-yellow-500', 'active:scale-95', 'shadow-lg', 'shadow-yellow-200');
        } else {
            checkoutBtn.disabled = false;
            checkoutBtn.classList.remove('opacity-50', 'cursor-not-allowed', 'grayscale');
            checkoutBtn.classList.add('hover:bg-yellow-500', 'active:scale-95', 'shadow-lg', 'shadow-yellow-200');
        }
    }

    const cartContainer = document.getElementById('cart-items');
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="flex flex-col items-center justify-center h-64 text-gray-400">
                <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </div>
                <p class="text-xs uppercase font-bold tracking-widest">Carrinho vazio</p>
            </div>
        `;
        return;
    }

    cartContainer.innerHTML = cart.map(item => `
        <div class="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm relative animate-in fade-in slide-in-from-right-4 duration-300">
            <img src="${item.image}" onerror="this.src='https://placehold.co/100x100?text=No+Img'" class="w-16 h-16 object-cover rounded-xl shadow-sm">
            <div class="flex-grow">
                <h5 class="text-[11px] font-bold text-gray-800 uppercase tracking-tight leading-tight mb-1">${item.name}</h5>
                ${typeof item.id === 'string' ? `<p class="text-[10px] text-gray-500 leading-tight mb-2 line-clamp-2">${item.description}</p>` : ''}
                <div class="flex items-center justify-between">
                    <p class="text-sm font-brand font-bold text-zinc-900">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>

                    <!-- CONTROLES DE QUANTIDADE DENTRO DO CARRINHO -->
                    <div class="flex items-center gap-2 bg-gray-50 rounded-lg p-0.5 border border-gray-100 ml-2">
                        <button onclick="adjustCartQty(${typeof item.id === 'string' ? "'" + item.id + "'" : item.id}, -1)" class="w-6 h-6 flex items-center justify-center bg-white rounded-md shadow-sm text-xs font-bold hover:bg-red-50 hover:text-red-500 transition-colors">-</button>
                        <span class="text-xs font-bold w-4 text-center">${item.quantity}</span>
                        <button onclick="adjustCartQty(${typeof item.id === 'string' ? "'" + item.id + "'" : item.id}, 1)" class="w-6 h-6 flex items-center justify-center bg-white rounded-md shadow-sm text-xs font-bold hover:bg-green-50 hover:text-green-500 transition-colors">+</button>
                    </div>
                </div>
            </div>
            <button onclick="remove(${typeof item.id === 'string' ? "'" + item.id + "'" : item.id})" class="ml-2 text-gray-300 hover:text-red-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>
    `).join('');
}

function remove(id) {
    cart = cart.filter(i => i.id !== id);
    updateUI();
    saveCartToStorage();
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('translate-x-full');
    const overlay = document.getElementById('overlay');
    if (overlay) overlay.classList.toggle('hidden');
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');
    menu.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
}

function filterCategory(cat) {
    if (cat === 'todos') renderProducts(products);
    else renderProducts(products.filter(p => p.category === cat));
    
    const t = translations[currentLanguage];
    
    // Scroll suave para o início da lista
    const grid = document.getElementById('products-grid');
    const offset = grid ? grid.offsetTop - 180 : 0;
    if (offset > 0) window.scrollTo({ top: offset, behavior: 'smooth' });
}

function searchProducts(query) {
    const q = query.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(q));
    renderProducts(filtered);
}

function checkout() {
    if (cart.length === 0) return;

    // Redirect to checkout page
    window.location.href = 'checkout.html';
}

// Traduções
const translations = {
    pt: {
        title: 'O Melhor Lanche da Cidade!',
        searchPlaceholder: 'O que vamos comer hoje?',
        categoryTitle: 'Nosso Cardápio',
        categories: {
            todos: 'Todos',
            hamburgueres: 'Hambúrgueres',
            combos: 'Combos',
            porcoes: 'Porções',
            bebidas: 'Bebidas',
            sobremesas: 'Sobremesas'
        },
        cartTitle: 'Meu Carrinho',
        close: 'Voltar',
        back: 'Voltar',
        emptyCart: 'Carrinho vazio',
        total: 'Total:',
        purchaseDetails: 'Voltar',
        addToCart: 'Adicionar ao Carrinho',
        addButton: 'Adicionar',
        contact: 'Contato',
        footerButtons: {
            whatsapp: 'WhatsApp',
            location: 'Localização',
            instagram: 'Instagram'
        },
        ageWarning: '🚫 Venda proibida para menores de 18 anos',
        copyright: '&copy; 2024 Sua Lanchonete. Todos os direitos reservados.',
        cookieText: 'Este site usa cookies para melhorar sua experiência. Cookies essenciais são sempre permitidos. Aceite para cookies não essenciais (preferências, marketing).',
        accept: 'Aceitar',
        reject: 'Rejeitar'
    },
    en: {
        title: 'The Best Snack in Town!',
        searchPlaceholder: 'What are we eating today?',
        categoryTitle: 'Our Menu',
        categories: {
            todos: 'All',
            hamburgueres: 'Burgers',
            combos: 'Combos',
            porcoes: 'Sides',
            bebidas: 'Drinks',
            sobremesas: 'Desserts'
        },
        cartTitle: 'My Cart',
        close: 'Back',
        back: 'Back',
        emptyCart: 'Empty cart',
        total: 'Total:',
        purchaseDetails: 'Back',
        addToCart: 'Add to Cart',
        addButton: 'Add',
        contact: 'Contact',
        footerButtons: {
            whatsapp: 'WhatsApp',
            location: 'Location',
            instagram: 'Instagram'
        },
        ageWarning: '🚫 Sale prohibited to minors under 18',
        copyright: '&copy; 2024 Your Snack Bar. All rights reserved.',
        cookieText: 'This site uses cookies to improve your experience. Essential cookies are always allowed. Accept for non-essential cookies (preferences, marketing).',
        accept: 'Accept',
        reject: 'Reject'
    }
};

// Preferências persistentes com localStorage
let currentLanguage = localStorage.getItem('language') || 'pt';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateLanguage();
}

function updateLanguage() {
    const t = translations[currentLanguage];

    // Título principal
    const title = document.querySelector('h2');
    if (title) {
        title.textContent = t.title;
    }

    // Placeholder da busca
    const searchInputs = document.querySelectorAll('.search-input');
    searchInputs.forEach(input => {
        input.placeholder = t.searchPlaceholder;
    });

    // Título da categoria
    const categoryTitle = document.getElementById('category-title');
    if (categoryTitle) {
        categoryTitle.textContent = t.categoryTitle;
    }

    // Botões de categoria (Filtros)
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        const cat = btn.getAttribute('data-category');
        if (cat && t.categories[cat]) {
            btn.textContent = t.categories[cat] || cat;
        }
    });

    // Botões de categoria Mobile
    const mobileFilterBtns = document.querySelectorAll('.mobile-filter-btn');
    mobileFilterBtns.forEach(btn => {
        const cat = btn.getAttribute('data-category');
        if (cat && t.categories[cat]) {
            btn.textContent = t.categories[cat] || cat;
        }
    });

    // Carrinho
    const cartTitle = document.querySelector('#cart-sidebar h3');
    if (cartTitle) {
        cartTitle.textContent = t.cartTitle;
    }

    const closeBtn = document.querySelector('#cart-sidebar button');
    if (closeBtn) {
        closeBtn.textContent = t.close;
    }

    const emptyCartText = document.querySelector('#cart-items p');
    if (emptyCartText) {
        emptyCartText.textContent = t.emptyCart;
    }

    const totalLabel = document.querySelector('#cart-sidebar span:first-child');
    if (totalLabel) {
        totalLabel.textContent = t.total;
    }

    const purchaseBtn = document.querySelector('#cart-sidebar button:last-child');
    if (purchaseBtn) {
        purchaseBtn.textContent = t.purchaseDetails;
    }

    // Modal
    const modalAddBtn = document.getElementById('modal-add-btn');
    if (modalAddBtn) {
        modalAddBtn.textContent = t.addToCart;
    }

    const modalBackBtn = document.getElementById('modal-back-btn');
    if (modalBackBtn) {
        modalBackBtn.textContent = t.back;
    }

    // Botões de adicionar produto
    const addButtons = document.querySelectorAll('.product-card button');
    addButtons.forEach(btn => {
        if (btn.textContent.toLowerCase() === 'adicionar' || btn.textContent.toLowerCase() === 'add') {
            btn.textContent = t.addButton;
        }
    });

    // Footer
    const contactTitle = document.querySelector('footer h3');
    if (contactTitle) {
        contactTitle.textContent = t.contact;
    }

    const footerLinks = document.querySelectorAll('footer a');
    footerLinks.forEach(link => {
        if (link.textContent === 'WhatsApp' || link.textContent === 'Localização' || link.textContent === 'Instagram') {
            if (link.textContent === 'WhatsApp') link.textContent = t.footerButtons.whatsapp;
            else if (link.textContent === 'Localização') link.textContent = t.footerButtons.location;
            else if (link.textContent === 'Instagram') link.textContent = t.footerButtons.instagram;
        }
    });

    // Age warning removed as we have cookie verification

    // Removed to allow HTML copyright text

    // Cookie banner
    const cookieText = document.querySelector('#cookie-banner p');
    if (cookieText) {
        cookieText.textContent = t.cookieText;
    }

    const acceptBtn = document.getElementById('accept-cookies');
    if (acceptBtn) {
        acceptBtn.textContent = t.accept;
    }

    const rejectBtn = document.getElementById('reject-cookies');
    if (rejectBtn) {
        rejectBtn.textContent = t.reject;
    }

    // Botão de idioma
    const langBtn = document.getElementById('lang-text');
    if (langBtn) {
        langBtn.textContent = currentLanguage.toUpperCase();
    }
}



// Verificação de idade
function showAgeBanner() {
    if (getCookie('ageVerified')) return;
    const banner = document.getElementById('age-banner');
    if (banner) banner.classList.remove('hidden');
}

function acceptAge() {
    setCookie('ageVerified', 'true', 365);
    document.getElementById('age-banner').classList.add('hidden');
}

window.onload = () => {
    renderProducts(products);
    loadCartFromStorage();
    updateLanguage();
    showAgeBanner();
};

// Event listeners para banner
document.addEventListener('DOMContentLoaded', () => {
    const acceptBtn = document.getElementById('accept-age');
    if (acceptBtn) acceptBtn.addEventListener('click', acceptAge);

    // Event listeners do Carrinho
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) cartBtn.addEventListener('click', toggleCart);

    const closeCartBtn = document.getElementById('close-cart');
    if (closeCartBtn) closeCartBtn.addEventListener('click', toggleCart);

    const overlay = document.getElementById('overlay');
    if (overlay) overlay.addEventListener('click', toggleCart);

    // Lógica dos Botões de Filtro
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    function updateFilterStyles() {
        filterBtns.forEach(btn => {
            if (btn.classList.contains('active')) {
                btn.classList.remove('bg-gray-100', 'text-gray-600', 'hover:bg-gray-200');
                btn.classList.add('bg-zinc-900', 'text-white', 'shadow-md');
            } else {
                btn.classList.add('bg-gray-100', 'text-gray-600', 'hover:bg-gray-200');
                btn.classList.remove('bg-zinc-900', 'text-white', 'shadow-md');
            }
        });
    }

    // Inicializar estilos
    updateFilterStyles();

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateFilterStyles();
            
            const category = btn.getAttribute('data-category');
            filterCategory(category);
        });
    });

    // Lógica dos Botões de Filtro Mobile
    const mobileFilterBtns = document.querySelectorAll('.mobile-filter-btn');
    mobileFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            filterCategory(category);
            toggleMobileMenu(); // Fechar menu após selecionar
        });
    });
});

// Funções do modal de detalhes do produto
let currentModalProductId = null;

function showProductDetail(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    currentModalProductId = id;

    document.getElementById('modal-image').src = product.image;
    document.getElementById('modal-name').textContent = product.name;
    document.getElementById('modal-description').textContent = product.description;
    document.getElementById('modal-price').textContent = `R$ ${product.price.toFixed(2).replace('.', ',')}`;
    document.getElementById('modal-category').textContent = product.category.toUpperCase();
    document.getElementById('modal-qty').value = 1;

    // Renderizar opções de personalização
    renderCustomizationOptions(product);

    document.getElementById('product-modal').classList.remove('hidden');
}

function closeProductModal() {
    document.getElementById('product-modal').classList.add('hidden');
    currentModalProductId = null;
}

function adjustQtyModal(delta) {
    const input = document.getElementById('modal-qty');
    let val = parseInt(input.value) + delta;
    if (val < 1) val = 1;
    input.value = val;
}

// Função para atualizar o total no modal
function updateModalTotal() {
    const product = products.find(p => p.id === currentModalProductId);
    if (!product) return;

    let basePrice = product.price;
    let extrasTotal = 0;

    // Somar extras selecionados
    const inputs = document.querySelectorAll('#modal-customization input:checked');
    inputs.forEach(input => {
        extrasTotal += parseFloat(input.getAttribute('data-price'));
    });

    const qty = parseInt(document.getElementById('modal-qty').value);
    const total = (basePrice + extrasTotal) * qty;

    document.getElementById('modal-price').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function addToCartFromModal() {
    if (!currentModalProductId) return;

    const qty = parseInt(document.getElementById('modal-qty').value);
    const product = products.find(p => p.id === currentModalProductId);

    // Verificar validações para o Monte seu Lanche
    if (currentModalProductId === 999) {
        const bread = document.querySelector('input[name="bread"]:checked');
        const burger = document.querySelector('input[name="burger"]:checked');
        if (!bread || !burger) {
            alert('Por favor, selecione o Pão e a Carne.');
            return;
        }
    }

    // Coletar personalizações
    const selectedExtras = [];
    let extrasPrice = 0;
    const inputs = document.querySelectorAll('#modal-customization input:checked');
    
    inputs.forEach(input => {
        const name = input.getAttribute('data-name');
        const price = parseFloat(input.getAttribute('data-price'));
        selectedExtras.push({ name, price });
        extrasPrice += price;
    });

    // Se não houver personalização e não for o Monte seu Lanche, adiciona normal
    if (selectedExtras.length === 0 && currentModalProductId !== 999) {
        addToCart(currentModalProductId, qty);
    } else {
        // Criar item personalizado
        const customId = `${product.id}-${Date.now()}`; // ID único
        let customName = product.name;
        let customDesc = product.description;

        if (currentModalProductId === 999) {
            customDesc = selectedExtras.map(e => e.name).join(', ');
        } else {
            customName += " (Personalizado)";
            customDesc += ` + ${selectedExtras.map(e => e.name).join(', ')}`;
        }

        const customItem = {
            id: customId,
            name: customName,
            price: product.price + extrasPrice,
            category: product.category,
            image: product.image,
            description: customDesc,
            quantity: qty,
            addons: selectedExtras
        };

        cart.push(customItem);
        updateUI();
        saveCartToStorage();
    }

    closeProductModal();
    toggleCart(); // Abrir carrinho para feedback
}

// --- LÓGICA DO MONTE SEU LANCHE ---

const ingredients = {
    breads: [
        { id: 'b1', name: 'Pão Brioche', price: 3.00 },
        { id: 'b2', name: 'Pão Australiano', price: 3.50 },
        { id: 'b3', name: 'Pão com Gergelim', price: 2.50 }
    ],
    burgers: [
        { id: 'm1', name: 'Carne 150g', price: 8.00 },
        { id: 'm2', name: 'Frango Empanado', price: 7.00 },
        { id: 'm3', name: 'Smash 100g', price: 6.00 },
        { id: 'm4', name: 'Futuro Burger (Veg)', price: 9.00 }
    ],
    cheeses: [
        { id: 'q1', name: 'Queijo Prato', price: 2.00 },
        { id: 'q2', name: 'Cheddar', price: 2.50 },
        { id: 'q3', name: 'Mussarela', price: 2.00 }
    ],
    extras: [
        { id: 'e1', name: 'Bacon', price: 3.00 },
        { id: 'e2', name: 'Ovo', price: 1.50 },
        { id: 'e3', name: 'Alface', price: 0.50 },
        { id: 'e4', name: 'Tomate', price: 0.50 },
        { id: 'e5', name: 'Cebola Caramelizada', price: 2.00 },
        { id: 'e6', name: 'Picles', price: 1.50 }
    ],
    sauces: [
        { id: 's1', name: 'Maionese da Casa', price: 0.00 },
        { id: 's2', name: 'Barbecue', price: 0.00 },
        { id: 's3', name: 'Ketchup', price: 0.00 }
    ]
};

function renderCustomizationOptions(product) {
    const container = document.getElementById('modal-customization');
    container.innerHTML = '';
    container.classList.add('hidden');

    // Helper para criar seções
    const createSection = (title, items, type, name) => {
        const section = document.createElement('div');
        section.innerHTML = `<h4 class="font-bold text-sm text-gray-700 mb-2">${title}</h4>`;
        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-1 gap-2';
        
        items.forEach(item => {
            const label = document.createElement('label');
            label.className = 'flex items-center justify-between p-2 border border-gray-100 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors text-sm';
            const priceText = item.price > 0 ? `+ R$ ${item.price.toFixed(2).replace('.', ',')}` : 'Grátis';
            
            label.innerHTML = `
                <div class="flex items-center gap-2">
                    <input type="${type}" name="${name}" value="${item.id}" data-price="${item.price}" data-name="${item.name}" class="w-4 h-4 text-yellow-400 focus:ring-yellow-400" onchange="updateModalTotal()">
                    <span class="font-medium text-gray-800">${item.name}</span>
                </div>
                <span class="text-xs font-bold text-gray-500">${priceText}</span>
            `;
            grid.appendChild(label);
        });
        section.appendChild(grid);
        return section;
    };

    // Lógica para Monte seu Lanche (ID 999)
    if (product.id === 999) {
        container.classList.remove('hidden');
        container.appendChild(createSection('Escolha o Pão (Obrigatório)', ingredients.breads, 'radio', 'bread'));
        container.appendChild(createSection('Escolha a Carne (Obrigatório)', ingredients.burgers, 'radio', 'burger'));
        container.appendChild(createSection('Escolha o Queijo', ingredients.cheeses, 'checkbox', 'cheese'));
        container.appendChild(createSection('Adicionais', ingredients.extras, 'checkbox', 'extras'));
        container.appendChild(createSection('Molhos', ingredients.sauces, 'checkbox', 'sauces'));
    } 
    // Lógica para Hambúrgueres Normais (Adicionar Extras)
    else if (product.category === 'hamburgueres') {
        container.classList.remove('hidden');
        container.appendChild(createSection('Turbine seu lanche', ingredients.extras, 'checkbox', 'extras'));
        container.appendChild(createSection('Molhos Extras', ingredients.sauces, 'checkbox', 'sauces'));
    }

    // Atualiza o total inicial
    updateModalTotal();
}
