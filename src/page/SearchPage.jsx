import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../services/config";
import ProductCart from "../components/ProductCart";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const q = (searchParams.get("q") || "").toLowerCase();

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
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const results = products.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );

  if (loading) return <p className="text-center font-[BattleBingo] text-[#561c24] p-10">Loading...</p>;
  if (error) return <p className="text-center font-[BattleBingo] text-[#561c24] p-10">{error}</p>;

  return (
    <div>
      <h2 className="text-center text-xl m-4">
        {results.length} result(s) for "{searchParams.get("q")}"
      </h2>
      <div className="flex flex-wrap justify-center gap-2">
        {results.map((product) => (
          <ProductCart product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;