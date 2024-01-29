import { Link } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import useCategoriesFetchApi from "../../customHooks/useCategoriesFetchApi";

export default function FetchCategories() {
  const [data, isLoading, isError, error] = useCategoriesFetchApi();

  return (
    <>
      <div className="max-w-md mx-autop-6 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Fetch Kategoriler</h1>
        {isError ? <h2>{error}</h2> : isLoading ? <ProgressBar /> : ""}
        <ul className="list-disc pl-6 w-full">
          {data.map((item) => (
            <li key={item.id}>
              <Link to={`/fetch-category/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
