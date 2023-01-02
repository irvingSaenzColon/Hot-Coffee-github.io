//HTML Elements
const coffees_container = document.getElementById('coffees');
const desserts_container = document.getElementById('desserts');
const burger_button = document.querySelector('button.navbar__burger-btn');
const cart_count = document.querySelector('button.navbar__button>span');

// Arrays
const products = [];
const cart = [];

// Arrays definition

products.push({
    name: 'Latte',
    price: 2.67,
    category: 'coffee',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

});

products.push({
    name: 'American Coffe',
    price: 2.49,
    category: 'coffee',
    image: 'https://images.pexels.com/photos/13730479/pexels-photo-13730479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

products.push({
    name: 'Mocca',
    price: 2.89,
    category: 'coffee',
    image: 'https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-Mocca-Latte.jpg'
});

products.push({
    name: 'Irish',
    price: 3.56,
    category: 'coffee',
    image: 'https://cdn7.kiwilimon.com/recetaimagen/36985/46347.jpg'
});

products.push({
    name: 'Capuccino',
    price: 3.87,
    category: 'coffee',
    image: 'https://cdn.cookmonkeys.es/recetas/medium/capuccino-11194.jpeg'
});

products.push({
    name: 'Bombon',
    price: 4.15,
    category: 'coffee',
    image: 'https://cdn.elcocinerocasero.com/imagen/receta/1000/2022-07-03-14-12-38/cafe-bombon.jpeg'
});

products.push({
    name: 'Carajillo',
    price: 6.36,
    category: 'coffee',
    image: 'https://imag.bonviveur.com/carajillo.jpg'
});

products.push({
    name: 'Lungo',
    price: 4.25,
    category: 'coffee',
    image: 'https://www.acouplecooks.com/wp-content/uploads/2021/09/Lungo-001.jpg'
});

products.push({
    name: 'Expresso',
    price: 2.00,
    category: 'coffee',
    image: 'https://perfectdailygrind.com/wp-content/uploads/2020/06/Ristretto-3.jpg'
});

products.push({
    name: 'Ristretto',
    price: 1.79,
    category: 'coffee',
    image: 'http://cdn.shopify.com/s/files/1/0590/4531/4737/articles/risretto-recette.jpg?v=1653906398'
});

products.push({
    name: 'Macchiato',
    price: 1.54,
    category: 'coffee',
    image: 'https://www.recetasderechupete.com/wp-content/uploads/2022/01/Expresso-macchiato.jpg'
});

products.push({
    name: 'Vienés',
    price: 4.92,
    category: 'coffee',
    image: 'https://monkites.com/wp-content/uploads/cafe-vienes3.jpg'
});

products.push({
    name: 'frappe',
    price: 8.32,
    category: 'coffee',
    image: 'https://monkites.com/wp-content/uploads/cafe-vienes3.jpg'
});

products.push({
    name: 'azteca',
    price: 9.67,
    category: 'coffee',
    image: 'https://mejorescafeteras.top/wp-content/uploads/2022/02/cafe-azteca-o-cafe-helado-tipos-de-cafe-e1644056475962.jpg'
});


//
products.push({
    name: 'muffin',
    price: 7.99,
    category: 'dessert',
    image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

products.push({
    name: 'chocolate cake',
    price: 9.56,
    category: 'dessert',
    image: 'https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/6067295d78d1b038f676b502_28084100000-front.jpg'
});

products.push({
    name: 'cheese cake',
    price: 9.00,
    category: 'dessert',
    image: 'https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg'
});

products.push({
    name: 'Cookies',
    price: 6.22,
    category: 'dessert',
    image: 'https://recetasdecocina.elmundo.es/wp-content/uploads/2015/09/cookies-receta.jpg'
});

products.push({
    name: 'Oatmeal Cookies',
    price: 6.22,
    category: 'dessert',
    image: 'https://comeviveviaja.com/wp-content/uploads/2018/10/Cookies-de-avena.jpg'
});

products.push({
    name: 'flan',
    price: 4.73,
    category: 'dessert',
    image: 'https://www.recetasjudias.com/wp-content/uploads/2015/11/Flan-1.jpg'
});

products.push({
    name: 'Cinnamon Roll',
    price: 4.00,
    category: 'dessert',
    image: 'https://n9z4u8f2.rocketcdn.me/wp-content/uploads/2015/08/Rollos-de-canela01.jpg'
});

products.push({
    name: 'Donut',
    price: 4.00,
    category: 'dessert',
    image: 'https://natashaskitchen.com/wp-content/uploads/2021/05/Glazed-Donuts-SQ-500x500.jpg'
});


// Events
burger_button.addEventListener('click', onToggleMobileMenu);


// Click Functions
function onToggleMobileMenu(event){
    
}

function onAddToCart(event){
    console.log();
    const product_body = event.target.closest('div.product__body');
    const product_name = product_body.querySelector('div.product__info>p:nth-child(1)').innerText;
    console.log('buscando nombre de producto ' + product_name);
    const product = products.find(function(element){
        if(element.name === product_name)
            return element;
    });

    cart.push(product);
    console.table(cart);

    
    cart_count.innerText = cart.length;
    cart_count.classList.add('navbar__button--add-to-cart');
    setTimeout(function(){
        cart_count.classList.remove('navbar__button--add-to-cart');
    }, 500)
}
// Create HTML Element
function productHTML(product){
    const article = document.createElement('article');
    article.classList.add('product');

    const product_image = document.createElement('img');
    product_image.setAttribute('src', product.image);

    const product_body = document.createElement('div');
    product_body.classList.add('product__body');

    const product_info = document.createElement('div');
    product_info.classList.add('product__info');

    const product_name = document.createElement('p');
    product_name.innerText = product.name;
    const product_price = document.createElement('p');
    product_price.innerText = `$ ${product.price.toFixed(2)}`;

    const product_button = document.createElement('button');
    product_button.classList.add('product__button');
    product_button.addEventListener('click', onAddToCart);

    const cart_svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    cart_svg.setAttribute('viewBox', '0 0 576 512');

    const cart_path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    cart_path.setAttribute('d', 'M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z');
    
    cart_svg.appendChild(cart_path);
    product_button.appendChild(cart_svg);

    product_info.append(product_name, product_price);

    product_body.append(product_info, product_button);

    article.append(product_image, product_body);

    return article;
}
// Render
function renderArray(array, container){
    array.forEach(element => {
        container.appendChild( productHTML(element) )
    });
}

function renderArray(array, container, category){
    array.forEach(element => {
        if(element.category === category)
            container.appendChild( productHTML(element) )
    });
}

// Functions
function applyDiscount(price, discount){
    return (discount * price) / 100; 
}
function getDiscount(price, discount){
    return price - ((discount * price) / 100) ; 
}


renderArray(products, coffees_container, 'coffee');
renderArray(products, desserts_container, 'dessert');

