import React from 'react'
import logo from '../imges/icon.svg'

const Footer = () => {
  return (
    <footer className="container bg-color py-6">
      <div className="px-4 sm:px-10 md:px-20 lg:px-5 xl:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <img src={logo} alt="Icon" className="w-24 h-auto" />
        </div>
        <div>
          <h2 className="minTextsize text-white text-center sm:text-right">
            +998 (55) 500-37-77
          </h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer
