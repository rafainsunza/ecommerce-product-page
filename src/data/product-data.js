const product_data = [
    {
        id: 1,
        brand: "Sneaker Company",
        title: "Fall Limited Edition Sneakers",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        price: 250.00,
        currency: "$",
        discount_percentage: 50,
        images: {
            thumbnails: [
                "../assets/image-product-1-thumbnail.jpg",
                "../assets/image-product-2-thumbnail.jpg",
                "../assets/image-product-3-thumbnail.jpg",
                "../assets/image-product-4-thumbnail.jpg"
            ],
            full_size: [
                "../assets/image-product-1.jpg",
                "../assets/image-product-2.jpg",
                "../assets/image-product-3.jpg",
                "../assets/image-product-4.jpg"
            ]
        }
    },
]

product_data.forEach((product) => {
    if (product.discount_percentage !== 0) {
        product.price = product.price * (1 - product.discount_percentage / 100);
    }
})




export { product_data }
