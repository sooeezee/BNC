const Rating = ({ rating }) => {
    return (
      <div className="flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className={index < rating ? "text-yellow-500" : "text-gray-300"}>
            ★
          </span>
        ))}
      </div>
    );
  };
  
  export default Rating;
  