import PropTypes from 'prop-types';

export default function CatCard({imgSrc, description, name, origin}) {
  return (
    <div className="bg-secondary rounded-3xl">
    <div className="w-full bg-gray-700 dark:bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl">
      <div className="relative w-36 h-36 hover:scale-110 transition-all">
        <img src={imgSrc} alt="" className="w-full h-full object-cover rounded-full shadow-md" />
      </div>
    </div>
    <div className="p-[25px] text-black dark:text-white">
      <h4 className="text-xl font-semibold">Name : {name}</h4>
      <h5 className="text-xl font-semibold">Origin : {origin}</h5>
      <p className="text-[15px]">
        {description}
      </p>
    </div>
  </div>
  )
}

CatCard.propTypes = {
    imgSrc: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    origin: PropTypes.string,
  };
