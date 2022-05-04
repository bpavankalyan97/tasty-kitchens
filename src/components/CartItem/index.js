import {BiRupee} from 'react-icons/bi'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => {
  const {data} = props
  const {id, name, imageUrl, quantity, cost} = data

  const renderCartItem = value => {
    const {removeCartItem, increaseQuantity, decreaseQuantity} = value

    const onClickIncrement = () => {
      increaseQuantity(id)
    }

    const onClickDecrement = () => {
      if (quantity === 1) {
        removeCartItem(id)
      } else {
        decreaseQuantity(id)
      }
    }

    return (
      <li className="cart-item-li" testid="cartItem">
        <img className="li-mobile-item-image" src={imageUrl} alt={name} />

        <div className="li-all-details-container">
          <div className="li-item-details-container">
            <img className="li-item-image" src={imageUrl} alt={name} />
            <h1 className="li-item-name">{name}</h1>
          </div>

          <div className="li-item-quantity-cost-container">
            <button
              className="counter-button"
              testid="decrement-quantity"
              type="button"
              onClick={onClickDecrement}
            >
              -
            </button>
            <p className="counter-count" testid="item-quantity">
              {quantity}
            </p>
            <button
              className="counter-button"
              testid="increment-quantity"
              type="button"
              onClick={onClickIncrement}
            >
              +
            </button>
          </div>

          <div className="li-item-quantity-cost-container">
            <BiRupee className="li-item-cost-icon" />
            <p className="li-item-cost-icon" testid="total-price">
              {cost * quantity}.00
            </p>
          </div>
        </div>
      </li>
    )
  }

  return (
    <CartContext.Consumer>
      {value => renderCartItem(value)}
    </CartContext.Consumer>
  )
}

export default CartItem
