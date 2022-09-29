import { ProductItem } from "../components/ProductItem";
import { ProductsFromApi } from "../types/service";
import styles from '../../styles/ProductList.module.scss';


const ProductList = () => {
  const handleAdd = (product:ProductsFromApi):void => {
    console.log('AddProduct',product)
  }
  const handleView = (product: ProductsFromApi):void => {
    console.log('ViewProduct',product)
  }
  return (
    <div className={styles.container}>
      {
        STATE_INITIAL.map(products => (
          <article key={products.id} className={styles.product}>
            <ProductItem  product={products} handleAdd={handleAdd} handleView={handleView}/>
          </article>
          
        ))

      }
     
    </div>
  )
}

export { ProductList };



const STATE_INITIAL:Array<ProductsFromApi> = [
  {
    "id": 25,
    "title": "Handcrafted Fresh Chair",
    "price": 726,
    "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    "category": {
      "id": 3,
      "name": "Furniture",
      image: "https://api.lorem.space/image/furniture?w=640&h=480&r=676"
    },
    "images": [
      "https://api.lorem.space/image/furniture?w=640&h=480&r=5552",
      "https://api.lorem.space/image/furniture?w=640&h=480&r=2933",
      "https://api.lorem.space/image/furniture?w=640&h=480&r=3982"
    ]
  },
  {
    "id": 27,
    "title": "Refined Plastic Mouse",
    "price": 544,
    "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    "category": {
      "id": 4,
      "name": "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=3552"
    },
    "images": [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=9716",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=4164",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=892"
    ]
  },
  {
    "id": 28,
    "title": "Gorgeous Fresh Bike",
    "price": 172,
    "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    "category": {
      "id": 4,
      "name": "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=3552"
    },
    "images": [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=172",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=160",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=5617"
    ]
  },
  {
    "id": 30,
    "title": "Gorgeous Plastic Shirt",
    "price": 928,
    "description": "The Football Is Good For Training And Recreational Purposes",
    "category": {
      "id": 5,
      "name": "Others",
      image: "https://api.lorem.space/image?w=640&h=480&r=2327"
    },
    "images": [
      "https://api.lorem.space/image?w=640&h=480&r=6229",
      "https://api.lorem.space/image?w=640&h=480&r=8020",
      "https://api.lorem.space/image?w=640&h=480&r=8080"
    ]
  },
  {
    "id": 31,
    "title": "Small Granite Towels",
    "price": 263,
    "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    "category": {
      "id": 1,
      "name": "Clothes",
      image: "https://api.lorem.space/image/fashion?w=640&h=480&r=8788"
    },
    "images": [
      "https://api.lorem.space/image/fashion?w=640&h=480&r=2291",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=9195",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=9450"
    ]
  },
  {
    "id": 32,
    "title": "Gorgeous Steel Fish",
    "price": 260,
    "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    "category": {
      "id": 5,
      "name": "Others",
      image: "https://api.lorem.space/image?w=640&h=480&r=2327"
    },
    "images": [
      "https://api.lorem.space/image?w=640&h=480&r=831",
      "https://api.lorem.space/image?w=640&h=480&r=4490",
      "https://api.lorem.space/image?w=640&h=480&r=2147"
    ]
  }
]