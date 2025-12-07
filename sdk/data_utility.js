```javascript
// data_utility.js

/**
 * โครงสร้างข้อมูลสินค้าจำลอง 
 * (ใช้สำหรับ Mock Data Source แทนการเรียก API จริง)
 */
const MOCK_PRODUCTS_DATA = [
    {
        id: 'oversized-tee-black',
        name: 'Classic Black Oversized Tee',
        price: 790,
        description: 'เสื้อยืดโอเวอร์ไซส์สีดำคลาสสิก ผลิตจากผ้าคอตตอน 100% ทรงหลวมสบาย เหมาะสำหรับลุคสตรีทและสวมใส่ประจำวัน',
        qty: 1,
        size: 'M', 
        color: 'Black',
        image: 'https://hnungh.github.io/mcl/img/oversized-tee-black.jpg',
        category: 'OVERSIZED TEE',
        available_sizes: ['XS', 'S', 'M', 'L', 'XL'],
        available_colors: [{ name: 'Black', hex: '#000000' }, { name: 'White', hex: '#FFFFFF' }]
    },
    {
        id: 'cargo-pants-olive',
        name: 'Military Olive Cargo Pants',
        price: 1590,
        description: 'กางเกงคาร์โก้สีเขียวมะกอก ดีไซน์สไตล์ทหาร Y2K กระเป๋าเยอะ ให้ความทนทานและเท่ห์ในการแต่งตัว',
        qty: 1,
        size: 'L',
        color: 'Olive',
        image: 'https://hnungh.github.io/mcl/img/cargo-pants-olive.jpg',
        category: 'CARGO PANTS',
        available_sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        available_colors: [{ name: 'Olive', hex: '#808000' }, { name: 'Black', hex: '#000000' }]
    },
    {
        id: 'hoodie-grey',
        name: 'Stone Grey Pullover Hoodie',
        price: 1290,
        description: 'เสื้อฮู้ดดี้สีเทาหิน ทรงคลาสสิก ผ้านุ่มพิเศษ ให้ความอบอุ่นและสวมใส่ได้ทุกฤดู',
        qty: 1,
        size: 'XL',
        color: 'Grey',
        image: 'https://hnungh.github.io/mcl/img/hoodie-grey.jpg',
        category: 'PULLOVER HOODIE',
        available_sizes: ['S', 'M', 'L', 'XL'],
        available_colors: [{ name: 'Grey', hex: '#808080' }, { name: 'Navy', hex: '#000080' }]
    },
    {
        id: 'sunglasses-retro',
        name: 'Retro Square Sunglasses',
        price: 890,
        description: 'แว่นตากันแดดทรงสี่เหลี่ยมสไตล์ย้อนยุค Y2K เฟรมหนาและเลนส์คุณภาพสูง เหมาะกับลุคสตรีท',
        qty: 1,
        size: 'One Size',
        color: 'Black',
        image: 'https://hnungh.github.io/mcl/img/sunglasses-retro.jpg',
        category: 'SUNGLASSES',
        available_sizes: ['One Size'],
        available_colors: [{ name: 'Black', hex: '#000000' }, { name: 'Tortoise', hex: '#824510' }]
    }
];
