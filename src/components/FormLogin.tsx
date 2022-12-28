import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../styles/FormLogin.module.scss'

interface StateFormLogin {
    inputValues:{
        email:string
        password: string
    }
}
const INPUT = {
	email: '',
	password: ''
}

export const FormLogin = () => {
	const [inputValues,setInputValues] = useState<StateFormLogin['inputValues']>(INPUT)
	const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		const {name,value} = event.target
		setInputValues({...inputValues,[name]: value})
	}
	const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		console.log(inputValues)
	}
	return(
		<div className={styles.container}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<fieldset>
					<label htmlFor="email">Email address</label>
					<input type="email" id="email" name="email"  onChange={handleChange} value={inputValues.email} required/>
				</fieldset>
				<fieldset>
					<label htmlFor="password">Password</label>
					<input type="password" id="password" name="password" onChange={handleChange} value={inputValues.password} required/>
				</fieldset>
				<button type='submit'>Login</button>
				<Link
					href={'/recovery'}
				>
					<span>Forgot my password</span>
				</Link>
				<Link
					href={'/signup'}
				>
					<button type='button' className={styles.signup}>
                        Sign up
					</button>
				</Link>
			</form>
		</div>
	)
}