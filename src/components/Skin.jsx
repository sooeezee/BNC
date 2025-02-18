const Skin = () => {
    return (
      <div className="p-6 rounded-md bg-white border mx-auto max-w-fit">
        <div className="animate-pulse">
          {/* Product Image Skeleton */}
          <div className="w-[300px] lg:h-52 md:h-52 h-48 rounded-lg bg-gray-300 mb-6"></div>
          {/* Product Title Skeleton */}
          <div className="w-[290px] h-4 rounded-lg bg-gray-300 mb-4"></div>
          {/* Product Heading Skeleton */}
          <div className="w-[220px] h-4 rounded-lg bg-gray-300 mb-4"></div>
          {/* Product Description Skeleton */}
          <div className="w-[200px] h-4 rounded-lg bg-gray-300 mb-4"></div>
        </div>
      </div>
    );
  };
  
  export default Skin;
  