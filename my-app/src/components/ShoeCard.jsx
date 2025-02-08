import React from 'react';

const ShoeCard = ({ imgUrl, changeBigShoe, bigShoeImg }) => {
  const handleOnClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoe(imgUrl.bigShoe);
    }
  };

  const img = imgUrl.bigShoe;

  return (
    <div
      className={`border-2 rounded-xl overflow-hidden 
        ${bigShoeImg === imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'}
        cursor-pointer max-sm:flex-1
      `}
      onClick={handleOnClick}
    >
      {/* Inner wrapper to contain blur effect without affecting the border */}
      <div
        className="relative flex justify-center items-center bg-primary sm:w-40 sm:h-40 rounded-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Blurred Overlay */}
        <div className="absolute inset-0 bg-black/15 backdrop-blur-md"></div>

        {/* Shoe Image */}
        <img 
          className="relative z-10" 
          src={imgUrl.thumbnail} 
          alt="shoes-collection" 
          width={127} 
          height={103} 
        />
      </div>
    </div>
  );
};

export default ShoeCard;
