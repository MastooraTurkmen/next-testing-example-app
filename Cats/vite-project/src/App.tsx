import { useState, useEffect } from "react";

interface Cat {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
}

function App() {
  const [cat, setCat] = useState<Cat[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCats = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://catfact.ninja/breeds");
        const data = await response.json();
        setCat(data.data as Cat[]);
        setLoading(false);
      } catch (error) {
        setError(
          "Failed to fetch data. Please try again later or check your network connection."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  return (
    <div>
      <h1>Cat Breeds</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && cat.length > 0 ? (
        <ul>
          {cat.map((item, index) => {
            return (
              <li key={index}>
                <h2>Breed: {item.breed}</h2>
                <p>Country: {item.country}</p>
                <p>Origin: {item.origin}</p>
                <p>Coat: {item.coat}</p>
                <p>Pattern {item.pattern}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        !loading && !error && <p>No data available</p>
      )}
    </div>
  );
}

export default App;
