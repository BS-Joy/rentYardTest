import React from 'react'
import { Button } from '../ui/button'

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-20 py-4 border-b border-[#e0e0e0]">
        <img
          className="w-[147.28px] h-[38.78px] object-cover"
          alt="RentYard Logo"
          src="/image-4.png"
        />
        <Button variant="outline" className="px-6 py-3 rounded-xl">
          Exit
        </Button>
        <h1>This is navbar</h1>
      </header>
  )
}
