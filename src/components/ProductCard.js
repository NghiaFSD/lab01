import { Badge, Button, Card } from "react-bootstrap";

function ProductCard({ product, onAddToCart }) {
  const isOutOfStock = product.stock === 0;
  const statusLabel = isOutOfStock ? "Hết hàng" : product.status;
  const statusVariant = isOutOfStock ? "secondary" : "primary";

  return (
    <Card className="product-card h-100">
      <div className="product-image-wrap">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        <Badge bg={statusVariant} className="product-status">
          {statusLabel}
        </Badge>
      </div>

      <Card.Body className="d-flex flex-column px-0">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="product-price">
          {product.price.toLocaleString("vi-VN")}đ
        </Card.Text>
        <small className="product-stock">
          {isOutOfStock ? "Hết hàng" : `Còn hàng: ${product.stock}`}
        </small>
        <Button
          variant={isOutOfStock ? "secondary" : "primary"}
          disabled={isOutOfStock}
          onClick={() => onAddToCart(product.id)}
          className="mt-auto add-button"
        >
          {isOutOfStock ? "Out of Stock" : "Add to cart"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
