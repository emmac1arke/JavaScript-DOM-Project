const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})


const products = [
    {ProductName: 'Jug',
    price: 14.99,
    seller: 'By the Sea',
    image: 'https://www.houseofdisaster.com/cdn/shop/products/SEA-JUG-3_99_1000x.jpg?v=1663764035'},

    {ProductName: 'Hut Jar with Gift Box',
    price: 12.50,
    seller: 'By the Sea',
    image: 'https://www.houseofdisaster.com/cdn/shop/products/SEAJARHUT_1_1000x.jpg?v=1605543116'},
    
    {ProductName: 'Dish with Gift Box',
    price: 13.75,
    seller: 'By the Sea',
    image: 'https://www.houseofdisaster.com/cdn/shop/products/SEA-DIS-WH-1_1000x.jpg?v=1663760936'},
    
    {ProductName: 'Tropical Wallet',
    price: 30.00,
    seller: 'Frida Kahlo',
    image: 'https://www.houseofdisaster.com/cdn/shop/products/Fri-Wal-Tro-1_1000x.jpg?v=1634026219'},
    
    {ProductName: 'Flask',
    price: 19.99,
    seller: 'Frida Kahlo',
    image: 'https://www.houseofdisaster.com/cdn/shop/products/Fri-fla-1_1000x.jpg?v=1635345474'},
    
    {ProductName: 'Socks',
    price: 8.75,
    seller: 'Frida Kahlo',
    image: 'https://www.houseofdisaster.com/cdn/shop/products/Fri-Socks-1_1000x.jpg?v=1643296918'},
    
    {ProductName: 'Cream Cup',
    price: 19.99,
    seller: 'Forage',
    image: 'https://www.houseofdisaster.com/cdn/shop/files/FORCUPCR-1_1000x.jpg?v=1693408534'},
    
    {ProductName: 'Tea Light Holder',
    price: 15.99,
    seller: 'Forage',
    image: 'https://www.houseofdisaster.com/cdn/shop/files/FORCANMU-1_1000x.jpg?v=1693408615'},
    
    {ProductName: 'Black Velvet Cushion',
    price: 42.00,
    seller: 'Forage',
    image: 'https://www.houseofdisaster.com/cdn/shop/files/FORCUSBK-1_1000x.jpg?v=1693408395'},
    
    {ProductName: 'Hot Water Bottle',
    price: 27.50,
    seller: 'Secret Garden',
    image: 'https://www.houseofdisaster.com/cdn/shop/products/SEC-HWB-FX-1_1000x.jpg?v=1659805287'},
    
    {ProductName: 'Bird Planter',
    price: 29.99,
    seller: 'Secret Garden',
    image: 'https://www.houseofdisaster.com/cdn/shop/products/SEC-PLA-BD-1_1000x.jpg?v=1658749476'},
    
    {ProductName: 'Swan Notebook',
    price: 4.99,
    seller: 'Secret Garden',
    image: 'https://www.houseofdisaster.com/cdn/shop/products/SEC-NOT-SWA-1_1000x.jpg?v=1646650883'},

]


//Tag Templates for Product Cards//
const getProductCards = (image, ProductName, seller, price) => {
    return`<div class="product-card">
<div class="image">
    <img src="${image}"/>
</div>
<h2>${ProductName}</h2>
<h3>${seller}</h3>
<h4>${price}</h4>   
</div>`
};

const productsContainer = document.getElementById("productsList")
const populateProducts =() => {
    for (let i = 0; i < products.length; i++) {
        const currentProduct = products[i];
        productsContainer.innerHTML += getProductCards(
            currentProduct.image,
            currentProduct.ProductName,
            currentProduct.seller,
            currentProduct.price,
        );
    }
};

populateProducts();



