import { Link } from "react-router-dom"
import { useFetchCategoriesQuery } from "../../store/catApi/catApiSlicer"
import ProgressBar from "../../components/ProgressBar";

export default function RTKQueryCategories() {
  const { data, isLoading, isError, error } = useFetchCategoriesQuery()
  return (
    <>
    <div className="max-w-md mx-autop-6 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">RTK Query Kategoriler</h1>
      {isError ? <h2>{error}</h2> : isLoading ? <ProgressBar /> : ""}
      <ul className="list-disc pl-6 w-full">
        {data?.map((item) => (
          <li key={item.id}>
             <Link to={`/rtk-query-category/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </>
  )
}
