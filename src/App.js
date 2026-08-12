import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import HeroBanner from "./components/HeroBanner";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    if (!notification) return undefined;

    const timerId = setTimeout(() => {
      setNotification("");
    }, 3000);

    return () => clearTimeout(timerId);
  }, [notification]);

  function handleAddToCart(productName) {
    setCartQuantity((quantity) => quantity + 1);
    setNotification(`${productName} has been added to your cart.`);
  }

  return (
    <main className="fashion-page">
      <Header cartQuantity={cartQuantity} />
      <HeroBanner />
      <ProductList onAddToCart={handleAddToCart} />

      {notification && (
        <Alert variant="success" className="cart-notification">
          {notification}
        </Alert>
      )}

      <Footer />
    </main>
  );
}

export default App;
