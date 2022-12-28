import React,{useState} from 'react'
import { ProductItem } from '../components/ProductItem'
import { ProductsFromApi } from '../types/service'
import styles from '../styles/ProductList.module.scss'
import { Button } from '../components/Button'
import { useEffect } from 'react'
import { getProducts } from '../services/getProducts'


interface ProductListState {
  product: Array<ProductsFromApi>
  page: number
  disable: boolean
}

const ProductList = () => {
	const [product, setProduct]=useState<ProductListState['product']>([])
	const [page, setPage
	] = useState<ProductListState['page']>(0)
	const [next, setNext] = useState<ProductListState['disable']>(false)
	const [previous, setPrevious] = useState<ProductListState['disable']>(true)
	const limit = 30
	const button1 = {
		name: 'Next',
		disable: next,
		className: 'Button1'
    
	}
	const button2 = {
		name: 'Previous',
		disable: previous,
		className: 'Button2'
    
	}
	const handleAdd = (product:ProductsFromApi):void => {
		console.log('AddProduct',product)
	}
	const handleView = (product: ProductsFromApi):void => {
		console.log('ViewProduct',product)
	}
	const handleNext = () => {
		setPage(page+1)
		if(previous){
			setPrevious(false)
		}
	}
	const handlePrevious = () => {
		if(page> 0){
			const pages =page-1
			setPage(pages)
			if(pages===0){
				setPrevious(true)
			}
		}
		if(next && product.length===limit){
			setNext(false)
		}
	}
	useEffect(() => {
		getProducts({limit,page}).then(apiProducts => {
			const products = apiProducts
			console.log(products)
			if(products.length<limit){
				setNext(true)
			}else if (next && products.length === limit){
				setNext(false)
			}
			setProduct(products)
		})
	},[
		page, next
	])

	return (
		<div className={styles.container}>
			<div className={styles.button}>

				< Button 
					className={button2.className}
					name={button2.name}
					disable={button2.disable}
					handleClick={handlePrevious}
        
				/>
				< Button 
					className={button1.className}
					name={button1.name}
					disable={button1.disable}
					handleClick={handleNext}
        
				/>
			</div>
			<div className={styles.products}>

				{
					product.map(products => (
						<article key={products.id} className={styles.product}>
							<ProductItem  product={products} handleAdd={handleAdd} handleView={handleView}/>
						</article>
          
					))

				}
     
			</div>
		</div>
	)
}

export { ProductList }



const STATE_INITIAL:ProductsFromApi = [
	{
		'id': 25,
		'title': 'Handcrafted Fresh Chair',
		'price': 726,
		'description': 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
		'category': {
			'id': 3,
			'name': 'Furniture',
			image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=676'
		},
		'images': [
			'https://api.lorem.space/image/furniture?w=640&h=480&r=5552',
			'https://api.lorem.space/image/furniture?w=640&h=480&r=2933',
			'https://api.lorem.space/image/furniture?w=640&h=480&r=3982'
		]
	},
	{
		'id': 27,
		'title': 'Refined Plastic Mouse',
		'price': 544,
		'description': 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
		'category': {
			'id': 4,
			'name': 'Shoes',
			image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=3552'
		},
		'images': [
			'https://api.lorem.space/image/shoes?w=640&h=480&r=9716',
			'https://api.lorem.space/image/shoes?w=640&h=480&r=4164',
			'https://api.lorem.space/image/shoes?w=640&h=480&r=892'
		]
	},
	{
		'id': 28,
		'title': 'Gorgeous Fresh Bike',
		'price': 172,
		'description': 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
		'category': {
			'id': 4,
			'name': 'Shoes',
			image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=3552'
		},
		'images': [
			'https://api.lorem.space/image/shoes?w=640&h=480&r=172',
			'https://api.lorem.space/image/shoes?w=640&h=480&r=160',
			'https://api.lorem.space/image/shoes?w=640&h=480&r=5617'
		]
	},
	{
		'id': 30,
		'title': 'Gorgeous Plastic Shirt',
		'price': 928,
		'description': 'The Football Is Good For Training And Recreational Purposes',
		'category': {
			'id': 5,
			'name': 'Others',
			image: 'https://api.lorem.space/image?w=640&h=480&r=2327'
		},
		'images': [
			'https://api.lorem.space/image?w=640&h=480&r=6229',
			'https://api.lorem.space/image?w=640&h=480&r=8020',
			'https://api.lorem.space/image?w=640&h=480&r=8080'
		]
	},
	{
		'id': 31,
		'title': 'Small Granite Towels',
		'price': 263,
		'description': 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
		'category': {
			'id': 1,
			'name': 'Clothes',
			image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=8788'
		},
		'images': [
			'https://api.lorem.space/image/fashion?w=640&h=480&r=2291',
			'https://api.lorem.space/image/fashion?w=640&h=480&r=9195',
			'https://api.lorem.space/image/fashion?w=640&h=480&r=9450'
		]
	},
	{
		'id': 32,
		'title': 'Gorgeous Steel Fish',
		'price': 260,
		'description': 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
		'category': {
			'id': 5,
			'name': 'Others',
			image: 'https://api.lorem.space/image?w=640&h=480&r=2327'
		},
		'images': [
			'https://api.lorem.space/image?w=640&h=480&r=831',
			'https://api.lorem.space/image?w=640&h=480&r=4490',
			'https://api.lorem.space/image?w=640&h=480&r=2147'
		]
	}
]