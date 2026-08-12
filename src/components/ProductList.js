import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

const initialProducts = [
  {
    id: 1,
    name: "Fashion Women 01",
    price: 199000,
    status: "Hàng mới",
    stock: 5,
    image: "/images/Nu1.jpg",
  },
  {
    id: 2,
    name: "Fashion Women 02",
    price: 249000,
    status: "Giảm giá",
    stock: 3,
    image: "/images/Nu2.jpg",
  },
  {
    id: 3,
    name: "Fashion Women 03",
    price: 299000,
    status: "Còn hàng",
    stock: 0,
    image: "/images/Nu3.jpg",
  },
  {
    id: 4,
    name: "Fashion Men 01",
    price: 219000,
    status: "Hàng mới",
    stock: 4,
    image: "/images/nam1.jpg",
  },
  {
    id: 5,
    name: "Fashion Men 02",
    price: 259000,
    status: "Còn hàng",
    stock: 2,
    image: "/images/nam2.jpg",
  },
  {
    id: 6,
    name: "Fashion Men 03",
    price: 309000,
    status: "Giảm giá",
    stock: 1,
    image: "/images/nam3.jpg",
  },
];

function ProductList({ onAddToCart }) {
  const [products, setProducts] = useState(initialProducts);

  function handleAddToCart(productId) {
    const selectedProduct = products.find((product) => product.id === productId);

    if (!selectedProduct || selectedProduct.stock === 0) {
      return;
    }

    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === productId
          ? { ...product, stock: product.stock - 1 }
          : product
      )
    );

    onAddToCart(selectedProduct.name);
  }

  return (
    <section id="products" className="products-section">
      <Container>
        <div className="section-heading">
          <h2>Featured Products</h2>
          <p>Explore our latest clothing essentials.</p>
        </div>

        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} xs={12} md={6} lg={4}>
              <ProductCard product={product} onAddToCart={handleAddToCart} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProductList;
