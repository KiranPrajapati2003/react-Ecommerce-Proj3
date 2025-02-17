import React from "react";

function Cart({ items, onRemoveFromCart, onRemoveFromCarts,onAddToCart }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <h2 style={{ marginTop: 0, textAlign: "center", fontSize: "24px", color: "#333" }}>
        Shopping Cart
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "15px",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              width: "220px",
              position: "relative",
            }}
          >
            <p
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                backgroundColor: "#dc3545",
                color: "white",
                padding: "5px 10px",
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: "18px",
              }}
              onClick={() => onRemoveFromCarts(item.id)}
            >
              X
            </p>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <p style={{ color: "#333", fontSize: "16px", marginTop: "10px" }}>{item.name}</p>
            <p style={{ color: "#666", fontSize: "14px" }}>
              ${item.price}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "10px",
                width: "100%",
              }}
            >
              <button
                onClick={() => onRemoveFromCart(item.id)}
                style={{
                  color: "#fff",
                  backgroundColor: "#007bff",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                -
              </button>

              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                {item.quantity}
              </span>

              <button
                onClick={() => onAddToCart(item)}
                style={{
                  color: "#fff",
                  backgroundColor: "#28a745",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                +
              </button>
            </div>

           
          </div>
        ))}
        <div style={{ width: "100%", textAlign: "center", marginTop: "20px" }}>
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      </div>
    </>
  );
}

export default Cart;
