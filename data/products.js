// data/products.js

const products = [
    { 
        id: 1, 
        name: "Smartphone", 
        price: 799.99, 
        category: "Electronics", 
        description: "The latest smartphone with advanced features.",
        image: "/images/smartphone.jpg" // URL to the image
    },
    { 
        id: 2, 
        name: "Laptop", 
        price: 1299.99, 
        category: "Electronics", 
        description: "A powerful laptop for all your computing needs.",
        image: "/images/laptop.jpg" // URL to the image
    },
    { 
        id: 3, 
        name: "Headphones", 
        price: 199.99, 
        category: "Accessories", 
        description: "Noise-cancelling over-ear headphones.",
        image: "/images/headphones.jpg" // URL to the image
    },
    { 
        id: 4, 
        name: "Smartwatch", 
        price: 299.99, 
        category: "Wearables", 
        description: "Track your fitness and health.",
        image: "/images/smartwatch.jpg" // URL to the image
    },
    { 
        id: 5, 
        name: "Tablet", 
        price: 499.99, 
        category: "Electronics", 
        description: "Lightweight tablet for work and play.",
        image: "/images/tablet.jpg" // URL to the image
    },
    { 
        id: 6, 
        name: "Camera", 
        price: 899.99, 
        category: "Photography", 
        description: "DSLR camera for professional photography.",
        image: "/images/camera.jpg" // URL to the image
    },
    { 
        id: 7, 
        name: "Bluetooth Speaker", 
        price: 149.99, 
        category: "Audio", 
        description: "Portable Bluetooth speaker with great sound.",
        image: "/images/speaker.jpg" // URL to the image
    },
    { 
        id: 8, 
        name: "Fitness Tracker", 
        price: 99.99, 
        category: "Wearables", 
        description: "Keep track of your fitness goals.",
        image: "/images/fitness_tracker.jpg" // URL to the image
    },
    { 
        id: 9, 
        name: "Gaming Console", 
        price: 499.99, 
        category: "Gaming", 
        description: "Next-gen gaming console with immersive graphics.",
        image: "/images/gaming_console.jpg" // URL to the image
    },
    { 
        id: 10, 
        name: "Drone", 
        price: 599.99, 
        category: "Photography", 
        description: "Capture stunning aerial photos and videos.",
        image: "/images/drone.jpg" // URL to the image
    },
    {
        "id": 1,
        "name": "Smartphone",
        "price": 799.99,
        "category": "Electronics",
        "description": "The latest smartphone with advanced features."
    },
    {
        "id": 2,
        "name": "Laptop",
        "price": 1299.99,
        "category": "Electronics",
        "description": "A powerful laptop for all your computing needs."
    },
    {
        "id": 3,
        "name": "Wireless Headphones",
        "price": 199.99,
        "category": "Electronics",
        "description": "Experience high-quality sound without the wires."
    },
    {
        "id": 4,
        "name": "Smartwatch",
        "price": 299.99,
        "category": "Electronics",
        "description": "Track your fitness and receive notifications."
    },
    {
        "id": 5,
        "name": "Tablet",
        "price": 499.99,
        "category": "Electronics",
        "description": "Portable and versatile for work or play."
    },
    {
        "id": 6,
        "name": "Bluetooth Speaker",
        "price": 149.99,
        "category": "Electronics",
        "description": "Enjoy your music anywhere, anytime."
    },
    {
        "id": 7,
        "name": "Smart TV",
        "price": 899.99,
        "category": "Electronics",
        "description": "Stream your favorite shows and movies."
    },
    {
        "id": 8,
        "name": "Camera",
        "price": 699.99,
        "category": "Electronics",
        "description": "Capture stunning photos and videos."
    },
    {
        "id": 9,
        "name": "Fitness Tracker",
        "price": 99.99,
        "category": "Fitness",
        "description": "Monitor your health and fitness goals."
    },
    {
        "id": 10,
        "name": "Game Console",
        "price": 499.99,
        "category": "Gaming",
        "description": "Enjoy the latest games with friends."
    },
    {
        "id": 11,
        "name": "Electric Kettle",
        "price": 39.99,
        "category": "Home Appliances",
        "description": "Boil water quickly and safely."
    },
    {
        "id": 12,
        "name": "Blender",
        "price": 49.99,
        "category": "Home Appliances",
        "description": "Make smoothies and soups with ease."
    },
    {
        "id": 13,
        "name": "Air Fryer",
        "price": 79.99,
        "category": "Home Appliances",
        "description": "Cook healthier meals with less oil."
    },
    {
        "id": 14,
        "name": "Robot Vacuum",
        "price": 199.99,
        "category": "Home Appliances",
        "description": "Clean your home effortlessly."
    },
    {
        "id": 15,
        "name": "Coffee Maker",
        "price": 89.99,
        "category": "Home Appliances",
        "description": "Brew your favorite coffee at home."
    },
    {
        "id": 16,
        "name": "Vacuum Cleaner",
        "price": 149.99,
        "category": "Home Appliances",
        "description": "Keep your home clean with ease."
    },
    {
        "id": 17,
        "name": "Portable Speaker",
        "price": 79.99,
        "category": "Electronics",
        "description": "Take your music anywhere you go."
    },
    {
        "id": 18,
        "name": "Wireless Mouse",
        "price": 29.99,
        "category": "Accessories",
        "description": "Navigate your computer with ease."
    },
    {
        "id": 19,
        "name": "Laptop Stand",
        "price": 49.99,
        "category": "Accessories",
        "description": "Ergonomic design for comfortable working."
    },
    {
        "id": 20,
        "name": "Phone Case",
        "price": 19.99,
        "category": "Accessories",
        "description": "Protect your phone from drops and scratches."
    }

    ,
    {
        "id": 21,
        "name": "Water Bottle",
        "price": 15.99,
        "category": "Fitness",
        "description": "Stay hydrated on the go."
    },
    {
        "id": 22,
        "name": "Yoga Mat",
        "price": 29.99,
        "category": "Fitness",
        "description": "Perfect for yoga and workouts."
    },
    {
        "id": 23,
        "name": "Jump Rope",
        "price": 12.99,
        "category": "Fitness",
        "description": "A great tool for cardio workouts."
    },
    {
        "id": 24,
        "name": "Resistance Bands",
        "price": 19.99,
        "category": "Fitness",
        "description": "Versatile for strength training."
    },
    {
        "id": 25,
        "name": "Dumbbell Set",
        "price": 79.99,
        "category": "Fitness",
        "description": "Build strength with weights."
    },
    {
        "id": 26,
        "name": "Smart Home Hub",
        "price": 99.99,
        "category": "Electronics",
        "description": "Control all your smart devices from one place."
    },
    {
        "id": 27,
        "name": "Outdoor Tent",
        "price": 149.99,
        "category": "Camping",
        "description": "Stay protected from the elements."
    },
    {
        "id": 28,
        "name": "Noise-Cancelling Earbuds",
        "price": 59.99,
        "category": "Electronics",
        "description": "Experience music without distractions."
    },
    {
        "id": 29,
        "name": "Travel Mug",
        "price": 24.99,
        "category": "Home & Kitchen",
        "description": "Keep your drinks hot or cold on the go."
    },
    {
        "id": 30,
        "name": "Fitness Mat",
        "price": 29.99,
        "category": "Fitness",
        "description": "Perfect for yoga and workouts."
    },
    
        {
            "id": 41,
            "name": "Car Dash Cam",
            "price": 89.99,
            "category": "Electronics",
            "description": "Record your drives for safety."
        },
        {
            "id": 42,
            "name": "Sunglasses",
            "price": 19.99,
            "category": "Accessories",
            "description": "Protect your eyes in style."
        },
        {
            "id": 43,
            "name": "Portable Grill",
            "price": 129.99,
            "category": "Camping",
            "description": "Cook delicious meals outdoors."
        },
        {
            "id": 44,
            "name": "Camping Chair",
            "price": 49.99,
            "category": "Camping",
            "description": "Relax in comfort outdoors."
        },
        {
            "id": 45,
            "name": "Hiking Backpack",
            "price": 89.99,
            "category": "Camping",
            "description": "Carry everything you need on your hikes."
        },
        {
            "id": 46,
            "name": "Sleeping Bag",
            "price": 49.99,
            "category": "Camping",
            "description": "Stay warm during your camping trips."
        },
        {
            "id": 47,
            "name": "Outdoor Cooking Set",
            "price": 59.99,
            "category": "Camping",
            "description": "Cook meals easily in the wild."
        },
        {
            "id": 48,
            "name": "Bike Lock",
            "price": 19.99,
            "category": "Accessories",
            "description": "Secure your bike wherever you go."
        },
        {
            "id": 49,
            "name": "Yoga Blocks",
            "price": 29.99,
            "category": "Fitness",
            "description": "Enhance your yoga practice."
        },
        {
            "id": 50,
            "name": "Waterproof Phone Case",
            "price": 24.99,
            "category": "Accessories",
            "description": "Protect your phone from water damage."
        }
    
    

];

module.exports = products;
