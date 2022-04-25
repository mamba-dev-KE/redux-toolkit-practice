import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import CartItem from "./CartItem";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  } else {
    return (
      <section className="cart">
        <header>
          <h2>Your Cart</h2>
        </header>
        <div>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))}
        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total <span>{total}</span>
            </h4>
          </div>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(clearCart())}
          >
            clear cart
          </button>
        </footer>
      </section>
    );
  }
};

export default CartContainer;
