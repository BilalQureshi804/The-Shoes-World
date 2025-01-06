import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/app/assets/logo.jpg'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


export const Header = () => {
  return (
    <header className='header'>
      {/* Logo Section*/}
      <div>
      <Image src= {logo} alt= "logo" className='pic' width= {70} height= {80}/>

        <h1 className='logo'>The Shoes World</h1>
        </div>
        <nav>

            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/shoes">Shoes</Link>
            <Link href="/contact">Contact</Link>
            

        </nav>
        <div  className='header-icons'>
          <a href='#' className='login'>
            Login / Register
          </a>
          <FaSearch  className='icon' />
          <FaShoppingCart className='icon' />
        </div>
    </header>
  )
}
