import { Component } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Product } from '../types/product';
import { ProductsRequestService } from '../services/products-request.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  // products: Product[] = [
  //   {
  //     id: 1,
  //     name: "Wireless Bluetooth Headphones",
  //     description: "Over-ear headphones with noise cancellation and 20-hour battery life. Features Bluetooth 5.0 for a stable connection, memory foam ear cushions for comfort, and foldable design for portability. Includes a carrying case and USB-C charging cable.",
  //     price: 99.99,
  //     rating: 4.5,
  //     image: "https://www.cowinaudio.com/cdn/shop/products/se7-foldable-active-noise-cancelling-bluetooth-headphones-cowinaudio-black-472791_2048x.jpg?v=1616747175",
  //     stock: 15,
  //     features: ["Noise Cancellation", "Bluetooth 5.0", "Foldable Design"],
  //     brand: "Sony",
  //     warranty: "1 year",
  //   },
  //   {
  //     id: 2,
  //     name: "Smart Fitness Watch",
  //     description: "Track your steps, heart rate, and sleep patterns with this smartwatch. Offers water resistance up to 50 meters, GPS tracking, and compatibility with Android and iOS devices. Comes with a magnetic charger and adjustable silicone strap.",
  //     price: 149.99,
  //     rating: 4.7,
  //     image: "https://m.media-amazon.com/images/I/613cSfPU+5L.jpg",
  //     stock: 25,
  //     features: ["Heart Rate Monitor", "GPS", "Water Resistance"],
  //     brand: "Huawei",
  //     warranty: "2 years",
  //   },
  //   {
  //     id: 3,
  //     name: "Laptop Backpack",
  //     description: "Water-resistant backpack with compartments for laptops up to 15.6 inches. Features padded shoulder straps for comfort, anti-theft design with hidden zippers, and multiple compartments for organizing essentials. Ideal for work, travel, and school.",
  //     price: 49.99,
  //     rating: 4.2,
  //     image: "https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/b/h/bh105.jpg",
  //     stock: 0,
  //     features: ["Water Resistance", "Anti-Theft Design", "Padded Straps"],
  //     brand: "TechPack",
  //     warranty: "6 months",
  //   },
  //   {
  //     id: 4,
  //     name: "4K Ultra HD Smart TV",
  //     description: "50-inch smart TV with 4K resolution, streaming apps, and voice control. Includes support for HDR10, Dolby Audio, and seamless integration with Alexa or Google Assistant. Comes with a wall-mount kit and remote control.",
  //     price: 399.99,
  //     rating: 4.8,
  //     image: "https://images.philips.com/is/image/philipsconsumer/29102b9659a04440a81eafb90075d3ca?$pnglarge$&wid=960",
  //     stock: 5,
  //     features: ["4K Resolution", "HDR10 Support", "Voice Control"],
  //     brand: "Philips",
  //     warranty: "3 years",
  //   },
  //   {
  //     id: 5,
  //     name: "Gaming Mouse",
  //     description: "Ergonomic design with RGB lighting and programmable buttons. Features adjustable DPI settings up to 16,000 DPI, a braided cable for durability, and customizable profiles via software. Perfect for competitive gaming.",
  //     price: 29.99,
  //     rating: 4.3,
  //     image: "https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/o/mo536-1-min.jpg",
  //     stock: 40,
  //     features: ["16,000 DPI", "RGB Lighting", "Programmable Buttons"],
  //     brand: "GamePro",
  //     warranty: "1 year",
  //   },
  //   {
  //     id: 6,
  //     name: "Wireless Charger",
  //     description: "Fast-charging pad compatible with most smartphones. Supports Qi-enabled devices, includes an LED indicator, and offers overcharge and overheating protection. Comes with a USB-C charging cable.",
  //     price: 19.99,
  //     rating: 4.0,
  //     image: "https://i5.walmartimages.com/seo/onn-5W-Wireless-Charging-Pad-Black_114db449-4bb5-4b3d-93fb-cb1965286de0.c0d2dd5a000c403ba9312efef8afdd8c.jpeg",
  //     stock: 30,
  //     features: ["Qi-Compatible", "Overcharge Protection", "LED Indicator"],
  //     brand: "Huawei",
  //     warranty: "1 year",
  //   },
  //   {
  //     id: 7,
  //     name: "Portable Power Bank",
  //     description: "10000mAh power bank with dual USB output and fast charging. Compact design with LED power indicators, supports multiple devices, and includes a micro-USB cable. Ideal for travel and emergencies.",
  //     price: 39.99,
  //     rating: 4.6,
  //     image: "https://btech.com/media/catalog/product/w/w/www_joyroom_com-10000mah_c7260333-3f75-4898-85fa-e49c9b5f82a2.png",
  //     stock: 50,
  //     features: ["10000mAh Capacity", "Fast Charging", "Dual USB Ports"],
  //     brand: "PowerMate",
  //     warranty: "1 year",
  //   },
  //   {
  //     id: 8,
  //     name: "Wireless Earbuds",
  //     description: "Compact earbuds with touch controls and 12-hour battery life. Features noise isolation, sweat resistance, and a charging case with USB-C support. Ideal for workouts and on-the-go use.",
  //     price: 219.99,
  //     rating: 4.4,
  //     image: "https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/k/k/kk5jadb_fvjyqv9npllzb1mu_2.png?format=jpeg&width=368",
  //     stock: 8,
  //     features: ["Touch Controls", "Noise Isolation", "Sweat Resistant"],
  //     brand: "Samsung",
  //     warranty: "2 years",
  //   },
  //   {
  //     id: 9,
  //     name: "Digital Camera",
  //     description: "Compact 20MP digital camera with 5x zoom and HD video recording. Includes built-in image stabilization, a flip screen for selfies, and a rechargeable battery. Comes with a memory card and USB charging cable.",
  //     price: 199.99,
  //     rating: 4.2,
  //     image: "https://www.kamera-express.nl/_ipx/b_%23ffffff00,f_webp,fit_contain,s_208x208/https://www.kamera-express.nl/media/7ac051cf-2766-4b9c-bd56-a77816cb4867/canon-powershot-g7x-mark-iii-zwart-1-jpg.jpg",
  //     stock: 12,
  //     features: ["20MP Sensor", "5x Zoom", "Image Stabilization"],
  //     brand: "Canon",
  //     warranty: "1 year",
  //   },
  // ];
  
  products: any = [];
  constructor(private productsRequestService: ProductsRequestService, private cartService: CartService) {}

  ngOnInit() {
      this.productsRequestService.getProductsList().subscribe((data) => {
        this.products = data.products;
        console.log(data);
      }); 
  }

  getProducts() {
    return this.products;
  }
}