
interface PropsButton {
  className: string
  handleClick ?: () => void
  name: string
  disable: boolean

}

const Button = ({name,handleClick,className, disable}:PropsButton) => {
	return(
		<button onClick={handleClick} className={className} disabled={disable}>
			{name}
		</button>
	)
}

export { Button}