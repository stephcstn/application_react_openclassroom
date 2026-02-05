import "../styles/Cart.css";
import { useState } from "react";

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <div className="lmj-cart-closed">
        <button onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
      </div>
    );
  } else {
    return (
      <div className="lmj-cart">
        <button className="lmj-close-button" onClick={() => setIsOpen(false)}>
          Fermer
        </button>
        <h2>Panier</h2>
        {cart.map((item, index) => (
          <div key={`${item.name}-${index}`} className="lmj-cart-item">
            {item.name} - {item.price}€ x {item.quantity}
          </div>
        ))}
        <h3>Total : {
          cart.reduce((total, item) => total + item.price * item.quantity, 0)
        }€</h3>
        <button className="lmj-empty-button" onClick={() => updateCart([])}>
          Vider le panier
        </button>
      </div>
    );
  }
}

export default Cart;
