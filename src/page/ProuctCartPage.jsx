import { useEffect, useState } from "react";
import api from "../services/config";
import ProductCart from "../components/ProductCart";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await api.get("products");
        setProducts(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {products.map((product) => (
          <ProductCart     product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
