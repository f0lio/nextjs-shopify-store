import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import cn from "classnames";

const OtherImages = ({ images, currentImage, onClick }) => {
  return (
    <div>
      {[...images].map((image, index) => (
        <div className="pb-6" key={index}>
          <img
            className={cn(
              "h-14 w-12 cursor-pointer border-black object-cover",
              index == currentImage && " ring-1",
            )}
            onClick={() => onClick(index)}
            src={image?.src || ""}
            alt={image?.alt || ""}
          />
          {/* <Image
              src={image?.src || ""}
              alt={image?.alt || ""}
              width={48}
              height={64}
              objectFit="cover"
              layout='responsive'
              className='border-black cursor-pointer'
              onClick={() => setCurrentImage(index)}
            /> */}
          {/* <p >HOLA</p> */}
        </div>
      ))}
    </div>
  );
};

interface ProductImage {
  src: string;
  altText: string;
}

const ProductGallery = ({ images }: { images: ProductImage[] }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="grid h-full max-h-screen grid-cols-12 sm:px-4">
      <div className="col-span-1 hidden sm:flex sm:justify-center">
        <OtherImages
          images={images}
          currentImage={currentImage}
          onClick={setCurrentImage}
        />
      </div>
      <figure className="col-span-12 h-full rounded-lg px-2 sm:col-span-11">
        <Swiper onSlideChange={(e) => setCurrentImage(e.snapIndex)}>
          {images?.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                className="w-full cursor-zoom-in "
                src={image?.src}
                alt={image?.altText}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <Image
            src={images[currentImage]?.src || "https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"}
            alt={images[currentImage]?.alt}
            width={800}
            height={800}
            quality={100}
            // layout="responsive"
            objectFit="contain"
            className='top-0 w-full h-full cursor-zoom-in'
          /> */}
      </figure>
    </div>
  );
};

export default ProductGallery;
