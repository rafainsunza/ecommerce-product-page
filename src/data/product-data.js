import image_product_1 from '../assets/image-product-1.jpg'
import image_product_1_thumbnail from '../assets/image-product-1-thumbnail.jpg';
import image_product_2 from '../assets/image-product-2.jpg'
import image_product_2_thumbnail from '../assets/image-product-2-thumbnail.jpg';
import image_product_3 from '../assets/image-product-3.jpg'
import image_product_3_thumbnail from '../assets/image-product-3-thumbnail.jpg';
import image_product_4 from '../assets/image-product-4.jpg'
import image_product_4_thumbnail from '../assets/image-product-4-thumbnail.jpg';

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
                image_product_1_thumbnail,
                image_product_2_thumbnail,
                image_product_3_thumbnail,
                image_product_4_thumbnail
            ],
            full_size: [
                image_product_1,
                image_product_2,
                image_product_3,
                image_product_4
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
