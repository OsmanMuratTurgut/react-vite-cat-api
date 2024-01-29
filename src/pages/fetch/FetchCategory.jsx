import { useParams } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import CatCard from "../../components/CatCard";
import useCategoryFetchApi from "../../customHooks/useCategoryFetchApi";

export default function FetchCategory() {
  const { categoryName } = useParams();
  const [data, isLoading, isError, error] = useCategoryFetchApi(categoryName);
  return (
    <>
      <div className="container mx-auto  mb-16">
        <div className="flex flex-col items-center w-full">
          <span className="text-[40px]">
            FetchCategory: {categoryName.toUpperCase()}
          </span>
        </div>
        {isError ? <h2>{error}</h2> : isLoading ? <ProgressBar /> : ""}

        <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 min-h-[450px]">
          {data.map((item) => (
            <div key={item.id}>
              {item.breeds.map((breed) => (
                <div key={breed.id}>
                  <CatCard
                    imgSrc={item.url}
                    description={breed.description}
                    name={breed.name}
                    origin={breed.origin}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
