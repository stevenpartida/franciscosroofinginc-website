"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";
import ReviewCard from "./ReviewCard";

import React from "react";

type Review = {
  id: number;
  review_name: string;
  review_img: string;
  review_text: string;
  review_rating: number;
};

const reviews: Review[] = [
  {
    id: 1,
    review_name: "Rob Luchow",
    review_img: "/reviewers/RobLuchow.png",
    review_text:
      "Francisco Roofing was incredible! We had a pretty standard roof replacement on our old home. Francisco came in with a very fair estimate, stuck to his schedule and delivered a beautiful rain. We even had some rain in the forecast so the team hustled to get everything done in time. Highly communicative, great workers. Can’t recommend this group more!",
    review_rating: 5,
  },
  {
    id: 2,
    review_name: "Fil Ruting",
    review_img: "/reviewers/FilRuting.png",
    review_text:
      "Our roof was damaged in the windstorm that lead to the Eaton fires recently. Francisco's Roofing a local roofer came quickly with a reasonable price and a great team of workers. His great communication, years of experience and speed made this re-roof hassle free.",
    review_rating: 5,
  },
  {
    id: 3,
    review_name: "Marie Turnor",
    review_img: "/reviewers/MarieTurnor.png",
    review_text:
      "Francisco's Roofing is a local family business which we have used several times over the years for jobs both big and small. They are responsible and professional and easy to deal with. Their prices are competitive. We have been very happy with Francisco's work and have recommended them to our friends and neighbors.",
    review_rating: 5,
  },
  {
    id: 4,
    review_name: "Alyse Johnson",
    review_img: "/reviewers/AlyseJohnson.png",
    review_text:
      "Francisco and sons are terrific! To begin with David came out for a quote after heavy winds had blown off multiple shingles. He gave me a fair quote and repaired the roof. Shortly after, Francisco Sr. and Jr. were installing a brand new roof with 6 new vents. I am pleased that such a hard working family collaborated on the project.",
    review_rating: 5,
  },
  {
    id: 5,
    review_name: "HermeyTheDentist",
    review_img: "/reviewers/HermeyTheDentist.png",
    review_text:
      "Francisco’s Roofing saved the day, repairing roof damage from the recent winds, that led to a leak in the roof. Francisco and his team were very professional and kind. The went the extra mile to fix the roof quickly before the next rain storm is scheduled to come in. Highly recommend!",
    review_rating: 5,
  },
  {
    id: 6,
    review_name: "Effy Yang",
    review_img: "/reviewers/EffyYang.png",
    review_text:
      "Francisco and his team were great to work with. The quote/install process was straightforward. The team even worked on a Saturday so my roof would be finished before the rain arrives. I appreciate their care and effort. Would definitely recommend them to others and re-use them again.",
    review_rating: 5,
  },
  {
    id: 7,
    review_name: "Lisa Grundy",
    review_img: "/reviewers/LisaGrundy.png",
    review_text:
      "Francisco and his team did a complete tear-off and re-roof of my modest 1910 bungalow. I now have the prettiest roof in the neighborhood and (more important) I have a roof that will last for decades.",
    review_rating: 5,
  },
  {
    id: 8,
    review_name: "Viken C",
    review_img: "/reviewers/VikenC.png",
    review_text:
      "Francisco‘s Roofing is a veteran owned company that will not disappoint you. Highly professional in every aspect of the project including punctuality, communication and execution. Roofing isn’t an inexpensive project but you know they’re saying you get what you pay for and it’s all the details. Trust me look no further if you’re looking to make a major investment in your property this is the crew to hire.",
    review_rating: 5,
  },
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const prevIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  const nextIndex = (currentIndex + 1) % reviews.length;

  const clearAndRestartTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 7000);
  };

  const nextReview = () => {
    setCurrentIndex(nextIndex);
    clearAndRestartTimer();
  };

  const prevReview = () => {
    setCurrentIndex(prevIndex);
    clearAndRestartTimer();
  };

  useEffect(() => {
    clearAndRestartTimer();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  return (
    <section className="w-full mx-auto overflow-hidden flex flex-col lg:flex-row justify-center items-center gap-4">
      {/* Review Cards */}
      <div className="flex flex-col gap-6">
        <div className="mt-[-55%]">
          <ReviewCard review={reviews[prevIndex]} faded />
        </div>
        <ReviewCard review={reviews[currentIndex]} />
        <div className="mb-[-55%]">
          <ReviewCard review={reviews[nextIndex]} faded />
        </div>
      </div>

      {/* Nav Buttons */}
      <div className="hidden lg:flex flex-row lg:flex-col justify-center gap-4 w-full lg:w-auto mt-6 lg:mt-30 ">
        <button
          onClick={prevReview}
          className="p-6 rounded-full bg-grey-custom/30 hover:cursor-pointer"
          aria-label="Previous review"
        >
          <ArrowUp className="text-gray-700" />
        </button>
        <button
          onClick={nextReview}
          className="p-6 rounded-full bg-grey-custom/30 hover:cursor-pointer"
          aria-label="Next review"
        >
          <ArrowDown className="text-black" />
        </button>
      </div>
    </section>
  );
};

export default ReviewCarousel;
