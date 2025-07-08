import Image from "next/image";
import { Star } from "lucide-react";

import React from "react";
import { div } from "framer-motion/client";

type Review = {
  id: number;
  review_name: string;
  review_img: string;
  review_text: string;
  review_rating: number;
};

type ReviewCardProps = {
  review: Review;
  faded?: boolean;
};

const ReviewCard = ({ review, faded = false }: ReviewCardProps) => {
  return (
    <div
      className={`w-[90%] max-w-[500px] h-[300px] sm:h-[320px] md:h-[340px] lg:h-[360px] px-4 py-6 mx-auto flex flex-col justify-between rounded-lg bg-white text-black
    ${faded ? "opacity-40" : "scale-100"}
  `}
    >
      <div className="flex flex-col ">
        <h1 className="text-4xl lg:text-6xl text-black/30">❝</h1>
        <p className="text-black text-sm font-semibold lg:text-base italic lg:font-bold mt-[-10px]">
          {review.review_text}
        </p>
      </div>
      <div className="flex justify-between items-center ">
        <div className="flex flex-row items-center gap-x-2">
          <Image
            src={review.review_img}
            alt={review.review_name}
            width={48}
            height={48}
            className="hidden md:flex"
          ></Image>
          <Image
            src={review.review_img}
            alt={review.review_name}
            width={32}
            height={32}
            className="md:hidden"
          ></Image>
          <h1 className="text-base font-bold lg:text-lg lg:font-semibold">
            {review.review_name}
          </h1>
        </div>
        <div className="hidden md:flex gap-x-1">
          {Array.from({ length: review.review_rating }).map((_, i) => (
            <Star key={i} size={20} color="#1E90FF" fill="#1E90FF" />
          ))}
        </div>
        <div className="md:hidden flex gap-x-1">
          {Array.from({ length: review.review_rating }).map((_, i) => (
            <Star key={i} size={14} color="#1E90FF" fill="#1E90FF" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
