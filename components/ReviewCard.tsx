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
      className={`rounded-lg text-black px-4 py-6 mx-auto w-[500px] h-[360px] flex flex-col justify-between
        ${faded ? "bg-grey-custom/5" : "bg-grey-custom/15"}
      `}
    >
      <div className="flex flex-col ">
        <h1 className="text-6xl text-grey-custom/30">❝</h1>
        <p className="text-black text-base italic font-bold mt-[-10px]">
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
          ></Image>
          <h1 className="text-lg font-semibold">{review.review_name}</h1>
        </div>
        <div className="flex gap-x-1">
          {Array.from({ length: review.review_rating }).map((_, i) => (
            <Star key={i} size={20} color="#1E90FF" fill="#1E90FF" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
