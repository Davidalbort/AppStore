import { listenerCount } from 'process'

interface PropsListCategories {
  className: string
}
const ListCategories = ({className}:PropsListCategories) => {
 
	const handleFilter = (event:React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault()
		console.log(event.target.value)
	}
	return(
		<div className={className}>
      
			<input type="radio" name="filter" id="All" defaultChecked/>
			<label htmlFor="All">All</label>
			<input type="radio" name="filter" id="Clothes" />
			<label htmlFor="Clothes">Clothes</label>
			<input type="radio" name="filter" id="Electronics" />
			<label htmlFor="Electronics">Electronics</label>
			<input type="radio" name="filter" id="Fortinure" />
			<label htmlFor="Fortinure">Fortinure</label>
			<input type="radio" name="filter" id="Toys" />
			<label htmlFor="Toys">Toys</label>
			<input type="radio" name="filter" id="Others" />
			<label htmlFor="Others">Others</label>
      
		</div>
	)
}
export { ListCategories }