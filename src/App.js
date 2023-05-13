import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [productData, setProductData] = useState({});
  const url = "https://dummyjson.com/products";

  const getProductData = async () => {
    const jsonResponse = await fetch(url);
    const jsonData = await jsonResponse.json();
    setProductData(jsonData);
  };

  useEffect(() => {
    getProductData();
  }, []);

  const displayProducts = (product) => {
    return (
      <tr>
        <td>{product.id}</td>
        <td>{product.title}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td>
          <img src={product.thumbnail} alt={product.title} />
        </td>
      </tr>
    );
  };

  return (
    <div className="App">
      <h1>Products</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Thumbnail</th>
          <th>Actions</th>
        </tr>
        {productData?.products?.map((obj) => {
          return displayProducts(obj);
        })}
      </table>
    </div>
  );
}
