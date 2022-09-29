import React from "react"

const Search = () => {
  const handleChange= (event:React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }
  return(
    <>
      <input onChange={handleChange} type="text" placeholder="Search product"/>
    </>
  )
}

export { Search}