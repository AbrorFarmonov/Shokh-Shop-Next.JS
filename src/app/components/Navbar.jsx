import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (

    <header className="text-gray-600 body-font" >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

          <span className="ml-3 text-xl">Shokh Shop</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Contact</a>
        </nav>
        <Link href={'/shop'} className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none mr-5 hover:bg-indigo-700 rounded text-base mt-4 md:mt-0 transition-all duration-300">
          My Bag
        </Link>
      </div>
    </ header>
  )
}
