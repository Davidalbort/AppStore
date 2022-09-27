import { listenerCount } from "process";

const ListCategories = () => {
  const List = ['All','Clothes','Electronics','Furniture','Toys','Others'] 
  const handleFilter = (event:React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(event.target.value)
  }
  return(
    <div>
      {/* <input onChange={handleFilter} type='radio' name="filter" id="All" value="All" />
      <label htmlFor="All"> All</label >
      <input onChange={handleFilter} type='radio' name="filter" id="Clothes" value="Clothes"/>
      <label htmlFor="Clothes"> Clothes </label>
      <input onChange={handleFilter} type='radio' name="filter" id="Electronics" value="Electronics"/>
      <label htmlFor="Electronics"> Electronics </label>
      <input onChange={handleFilter} type='radio' name="filter" id="Forniture" value="Forniture"/>
      <label htmlFor="Forniture"> Forniture </label>
      <input onChange={handleFilter} type='radio' name="filter" id="Toys" value="Toys"/>
      <label htmlFor="Toys"> Toys </label>
      <input onChange={handleFilter} type='radio' name="filter" id="Others" value="Others"/>
      <label htmlFor="Others"> Others </label> */}
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
export { ListCategories };