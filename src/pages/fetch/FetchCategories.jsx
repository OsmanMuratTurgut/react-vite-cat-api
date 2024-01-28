import { useEffect, useState } from "react";


const VITE_CAT_API_URL = import.meta.env.VITE_CAT_API_URL;
export default function FetchCategories() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();

  const getApiData = async () => {
    const response = await fetch(`${VITE_CAT_API_URL}/breeds`);
    const responseData = await response.json();
    if (!response.ok) {
      setIsError(true);
      setError("Veri Alınamadı");
      throw new Error("Veri Alınamadı");
    }
    console.log(responseData);
    setData(responseData);
    setIsLoading(false);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <div className="max-w-md mx-autop-6 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Fetch Kategoriler</h1>

        <ul className="list-disc pl-6">

          {data.map((item) => <li key={item.id}>{item.name}</li>)}
          
        </ul>
      </div>
    </>
  );
}
