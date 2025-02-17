import { useState } from "react";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 33000,
      image:
        "https://media.istockphoto.com/id/1394988455/photo/laptop-with-a-blank-screen-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=VCCVeK25QpSCdGjiDgeviwz2pJfikLyclwhX-MQblhg=",
    },
    {
      id: 2,
      name: "Mobile",
      price: 15000,
      image:
        "https://www.samsungmobilepress.com/file/B1451680D49421D2EF196E8744B721CB102084AE494FEF3EA0040E0EA67ED31E895F515F2E6B5A8920B2251EF086C1662A573753A31D59F35A05E4724CEA7A052F35353ECFFE1C40AC11DF482128D81EA3D05347CFFF7AD38B703E0F7BB4F7847C1395FF032CCD0E85C72D1D97B6B2DFDBC24B570CAFE3316C10B5EFEE876114",
    },
    {
      id: 3,
      name: "PC",
      price: 10000,
      image: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg",
    },
    {
      id: 4,
      name: "A.C",
      price: 25000,
      image: "https://cdn.pixabay.com/photo/2021/09/08/07/20/air-conditioner-6605973_1280.jpg",
    },


    {
      id: 5,
      name: "Perfume",
      price: 500,
      image:
        "https://dms.mydukaan.io/original/webp/media/14664bf8-a0e4-4d32-aaa1-5d58d27559bc.jpg",
    },
    {
      id: 6,
      name: "Body Spray",
      price: 3455,
      image:
        "https://m.media-amazon.com/images/I/81q8Z-2Il8L.jpg",
    },
    {
      id: 7,
      name: "Air Birds",
      price: 3423545,
      image: "https://www.boat-lifestyle.com/cdn/shop/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
    },
    {
      id: 8,
      name: "Attar",
      price: 34545,
      image: "https://m.media-amazon.com/images/I/814GvOcQJrL.jpg",
    },
  ];

  const [cartItem, setCartItem] = useState([]);

  const cartItemCount = cartItem.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const onAddToCart = (product) => {
    setCartItem((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const onRemoveFromCarts = (productId) => {
    setCartItem((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const onRemoveFromCart = (productId) => {
    setCartItem((e) => {
      return e
        .map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <NavBar cartItemCount={cartItemCount} />
      <h1 style={{ textAlign: "center", fontSize: "32px", color: "#333" }}>E-Commerce Store</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-evenly", 
        }}
      >
        {products.map((product) => (
          <Products key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
      <Cart items={cartItem} onRemoveFromCart={onRemoveFromCart} onRemoveFromCarts={onRemoveFromCarts} onAddToCart={onAddToCart} />
    </div>
  );
}

export default App;
