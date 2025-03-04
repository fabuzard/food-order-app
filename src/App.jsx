import { useState } from 'react'
import Header from './components/Header'
import MealList from './components/MealList'
import Modal from './components/Modal'
import { atom } from 'jotai'
import { useAtom } from 'jotai'
import { cartAtom } from './store/atoms'
function App() {
  const [cart, setCart] = useAtom(cartAtom);

  return (
    <div className=''>
<Header/>
<Modal cartItem={cart}/>
<MealList/>
    </div>
  )
}

export default App
