import CartContext from '../../context/CartContext'
import './index.css'

const Counter = props => {
  let increaseQuantity = null
  let decreaseQuantity = null
  let removeCartItem = null

  const {id, quantity} = props

  const onClickIncrement = () => {
    increaseQuantity(id)
  }

  const onClickDecrement = () => {
    const newQuantity = quantity - 1
    if (newQuantity === 0) {
      removeCartItem(id)
    } else {
      decreaseQuantity(id)
    }
  }

  return (
    <CartContext.Consumer>
      {value => {
        increaseQuantity = value.increaseQuantity
        decreaseQuantity = value.decreaseQuantity
        removeCartItem = value.removeCartItem

        return (
          <div className="counter-container">
            <button
              className="counter-button"
              testid="decrement-count"
              type="button"
              onClick={onClickDecrement}
            >
              -
            </button>
            <p className="counter-count" testid="active-count">
              {quantity}
            </p>
            <button
              className="counter-button"
              testid="increment-count"
              type="button"
              onClick={onClickIncrement}
            >
              +
            </button>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}

export default Counter
