import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../Redux/CreateSlice/CartSlice'

const CartButton = ({ item }) => {

    const dispatch = useDispatch()




  // localStorage'dan isCart vəziyyətini oxumaq
  const cartItems = useSelector(state => state.cartState.items) || [];

  // Məhsul səbətdə varmı? (true/false)
  const isCart = cartItems.some(cartItem => cartItem.id === item.id);

  const handleCart = (e) => {
    if (isCart) {
      dispatch(removeItem(item.id));
          e.stopPropagation();
    } else {
      dispatch(addItem(item));
          e.stopPropagation();
    }
  };



    return (
        <div className='relative'>
            <button 
                onClick={handleCart}
                className={` group-hover:opacity-100 absolute bottom-0 left-0 w-full text-center px-4 py-2 transition-opacity duration-300 ${isCart ? 'bg-red-500' : 'bg-black'} text-white`}
            >
                {isCart ? 'Remove from Cart' : 'Add to Cart'}
            </button>
        </div>
    )
}

export default CartButton