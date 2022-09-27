import Link from "next/link"
import Image from "next/image"


interface LogoProps {
  infoLogo:{
    srcLogo: string,
    hrefLogo: string,
    altLogo: string
  }
  className?: string
}

const Logo = ({infoLogo,className}: LogoProps, ) => {
  return(
    <Link href={infoLogo.hrefLogo} >
      <a className={className}>
        <Image src={infoLogo.srcLogo} alt={infoLogo.altLogo}>

        </Image>
      </a>
    </Link>
  )
}

export { Logo };