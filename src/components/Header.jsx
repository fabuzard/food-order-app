import React from 'react'
import { useAtom } from 'jotai'
import { modalOpen } from '../store/atoms'

function Header() {
  const [isOpen,setIsOpen] = useAtom(modalOpen)
  return (
    <header className="flex justify-between p-4 bg-red-500 text-white">
    <h1 className="text-lg font-bold">Food Order App</h1>
    <button onClick={()=>setIsOpen(!isOpen)} className="relative" >
      🛒 Cart 
    </button>
  </header>
  )
}

export default Header
