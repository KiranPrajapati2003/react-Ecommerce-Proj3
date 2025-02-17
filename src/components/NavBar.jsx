import React from "react";

function NavBar({ cartItemCount = 0 }) {
  return (
    <div
      style={{
        backgroundColor: "#333",
        padding: "15px 30px",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "0", fontSize: "24px", fontWeight: "500" }}>E-Commerce Store</h1>
        <span
          style={{
            fontSize: "30px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          🛒
          {cartItemCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              {cartItemCount}
            </span>
          )}
        </span>
      </div>
    </div>
  );
}

export default NavBar;
