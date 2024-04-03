const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})













const products = [
    {name: 'Jug',
    price: 14.99,
    seller: 'By the Sea',
    image: '<https://www.houseofdisaster.com/cdn/shop/products/SEA-JUG-3_99_1000x.jpg?v=1663764035>'},

    {name: 'Hut Jar with Gift Box',
    price: 12.50,
    seller: 'By the Sea',
    image: '<https://www.houseofdisaster.com/cdn/shop/products/SEAJARHUT_1_1000x.jpg?v=1605543116>'},
    
    {name: 'Dish with Gift Box',
    price: 13.75,
    seller: 'By the Sea',
    image: '<https://www.houseofdisaster.com/cdn/shop/products/SEA-DIS-WH-2_1000x.jpg?v=1663760936>'},
    
    {name: 'Tropical Wallet',
    price: 30.00,
    seller: 'Frida Kahlo',
    image: '<https://www.houseofdisaster.com/cdn/shop/products/Fri-Wal-Tro-1_1000x.jpg?v=1634026219>'},
    
    {name: 'Flask',
    price: 19.99,
    seller: 'Frida Kahlo',
    image: '<https://www.houseofdisaster.com/cdn/shop/products/Fri-fla-1_1000x.jpg?v=1635345474>'},
    
    {name: 'Socks',
    price: 8.75,
    seller: 'Frida Kahlo',
    image: '<https://www.houseofdisaster.com/cdn/shop/products/Fri-Socks-1_1000x.jpg?v=1643296918>'},
    
    {name: 'Cream Cup',
    price: 19.99,
    seller: 'Forage',
    image: '<https://www.houseofdisaster.com/cdn/shop/files/FORCUPCR-1_1000x.jpg?v=1693408534>'},
    
    {name: 'Tea Light Holder',
    price: 15.99,
    seller: 'Forage',
    image: '<https://www.houseofdisaster.com/cdn/shop/files/FORCANMU-1_1000x.jpg?v=1693408615>'},
    
    {name: 'Black Velvet Cushion',
    price: 42.00,
    seller: 'Forage',
    image: '<https://www.houseofdisaster.com/cdn/shop/files/FORCUSBK-1_1000x.jpg?v=1693408395>'},
    
    {name: 'Hot Water Bottle',
    price: 27.50,
    seller: 'Secret Garden',
    image: '<https://www.houseofdisaster.com/cdn/shop/products/SEC-HWB-FX-1_1000x.jpg?v=1659805287>'},
    
    {name: 'Bird Planter',
    price: 29.99,
    seller: 'Secret Garden',
    image: '<https://www.houseofdisaster.com/cdn/shop/products/SEC-PLA-BD-1_1000x.jpg?v=1658749476>'},
    
    {name: 'Swan Notebook',
    price: 4.99,
    seller: 'Secret Garden',
    image: '<https://www.houseofdisaster.com/cdn/shop/products/SEC-NOT-SWA-1_1000x.jpg?v=1646650883>'},

]