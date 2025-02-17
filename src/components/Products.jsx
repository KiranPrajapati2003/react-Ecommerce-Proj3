import React from "react";

function Products({ product, onAddToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
        width: "220px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <h3 style={{ margin: "15px 0", fontSize: "18px", color: "#333" }}>{product.name}</h3>
      <p style={{ color: "#666", fontSize: "16px" }}>${product.price}</p>

      <button
        onClick={() => onAddToCart(product)}
        style={{
          color: "#fff",
          backgroundColor: "#28a745",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%",
          fontSize: "16px",
          transition: "background-color 0.3s",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Products;
