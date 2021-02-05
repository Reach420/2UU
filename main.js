let carts = document.querySelectorAll('.addcart')
let product =[
    {
        id: 1,
        url: "./IMAGE/hoodie.jpeg",
        description: "Hoodie",
        price: "15",
        special: "discount",
        type:"Clothing",
    },
    {
        incart: "0",
        url: "./IMAGE/pants.jpg",
        description: "Pants",
        price:"5",
        special: "top-rating",
        type:"Clothing",
    },
    {
        incart: "0",
        url: "./Image/t-shirt.jpg",
        description: "T Shirt",
        price:"10",
        type:"Clothing",
    },
    {
        incart: "0",
        url: "./IMAGE/long-sleeves.jpg",
        description: "Long Sleeves",
        price:"15",
        type:"Clothing",
    },
    {
        incart: "0",
        url: "./IMAGE/socks.jpg",
        description: "Socks",
        price:"3",
        type:"Clothing",
    },
    {
        incart: "0",
        url: "./IMAGE/pizza.jpg",
        description: "Pizza",
        price:"20",
        special: "top-rating",
        type:"Food",
    },
    {
        incart: "0",
        url: "./IMAGE/burger.jpg",
        description: "Hamburgers",
        price:"10",
        type:"Food",
    },
    {
        incart: "0",
        url: "./IMAGE/sushi.jpg",
        description: "Sushi",
        price:"15",
        special: "top-rating",
        type:"Food",
    },
    {
        incart: "0",
        url: "./IMAGE/omellete.jpg",
        description: "Omellete",
        price:"4",
        type:"Food",
    },
    {
        incart: "0",
        url: "./IMAGE/ramen.jpg",
        description: "Ramen",
        price:"9",
        type:"Food",
    },
    {
        incart: "0",
        url: "./IMAGE/friend-chicken.jpeg",
        description: "Fried Chicken",
        price:"6",
        special: "best-selling",
        type:"Food",
    },
    {
        incart: "0",
        url: "./IMAGE/salad.jpg",
        description: "Salad",
        price:"5",
        type:"Food",
    },
    {
        incart: "0",
        url: "./IMAGE/uno.jpeg",
        description: "Uno",
        price:"9",
        special: "discount",
        type:"toy",
    },
    {
        incart: "0",
        url: "./IMAGE/twister.jpeg",
        description: "Twister",
        price:"25",
        type:"toy",
    },
    {
        incart: "0",
        url: "./IMAGE/monopoly.jpg",
        description: "Monopoly",
        price:"30",
        type:"toy",
    },
    {
        incart: "0",
        url: "./IMAGE/phone.jpeg",
        description: "Phone",
        price:"700",
        special: "best-selling",
        type:"electronics",
    },
    {
        incart: "0",
        url: "./IMAGE/computer (1).jpg",
        description: "Computer",
        price:"500",
        special: "best-selling",
        type:"electronics",
    },
    {
        incart: "0",
        url: "./IMAGE/earphone.png",
        description: "Earphone",
        price:"7",
        special: "top-rating",
        type:"electronics",
    },
    {
        incart: "0",
        url: "./IMAGE/earbuds.jpeg",
        description: "Earbuds",
        price:"185",
        type:"electronics",
    },
    {
        incart: "0",
        url: "./IMAGE/phone-charger.jpg",
        description: "Phone Charger",
        price:"6",
        type:"electronics",
    },
    {
        incart: "0",
        url: "./IMAGE/calculator.jpg",
        description: "Calculator",
        price:"5",
        special: "discount",
        type:"electronics",
    },
    {
        incart: "0",
        url: "./IMAGE/camera.jpeg",
        description: "Camera",
        price:"250",
        type:"electronics",
    },
    {
        incart: "0",
        url: "./IMAGE/watch.jpg",
        description: "Watch",
        price:"30",
        special: "discount",
        type:"electronics",
    },
    {
        incart: "0",
        url: "./IMAGE/speaker.jpeg",
        description: "Speaker",
        price:"150",
        special: "discount",
        type:"electronics",
    },
    {
        incart: "0",
        url: "./IMAGE/glasses.jpeg",
        description: "Smart Glasses",
        price:"200",
        special: "top-rating",
        type:"electronics",
    },
    {
        incart: "0",
        url: "./IMAGE/advil.jpeg",
        description: "Advil",
        price:"12",
        special: "discount",
        type:"health",
    },
    {
        incart: "0",
        url: "./IMAGE/sleeping.jpg",
        description: "Sleeping Medicine",
        price:"5",
        type:"health",
    },
    {
        incart: "0",
        url: "./IMAGE/perfume.jpg",
        description: "Perfume",
        price:"85",
        type:"health",
    },
    {
        incart: "0",
        url: "./IMAGE/face.jpg",
        description: "Face Mask",
        price:"10",
        special: "best-selling",
        type:"health",
    },
    {
        incart: "0",
        url: "./IMAGE/makeup.png",
        description: "Make Up",
        price:"20",
        special: "top-rating",
        type:"health",
    },
    {
        incart: "0",
        url: "./IMAGE/chair.jpg",
        description: "Chair",
        price:"15",
        type:"furniture",
    },
    {
        incart: "0",
        url: "./IMAGE/table.jpg",
        description: "Table",
        price:"60",
        special: "best-selling",
        type:"furniture",
    },
    {
        incart: "0",
        url: "./IMAGE/bed.jpeg",
        description: "Bed",
        price:"500",
        special: "best-selling",
        type:"furniture",
    },
    {
        incart: "0",
        url: "./IMAGE/couch.jpg",
        description: "Couch",
        price:"300",
        type:"furniture",
    },
    {
        incart: "0",
        url: "./IMAGE/lamp.jpg",
        description: "Lamp",
        price:"4",
        type:"furniture",
    },
]
for (let i=0; i< carts.length; i++){
    carts[i].addEventListener('click',() => {
        cartNumbers();
    })
}
function onloadcartnumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){ 
        document.querySelector('.num').textContent = productNumbers;
    }
}
function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.num').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.num').textContent = 1;
    }
    setitems(product);
}

function setitems(product){
    product.incart = 1;
    let cartitems = localStorage.getItem('productsincart');
    cartitems=JSON.parse(cartitems);
     console.log("my cart are", cartitems);
    cartitems = {
        [product.description]: product
    }
    localStorage.setItems("productsincart", JSON.stringify(cartitems))
}
onloadcartnumbers()