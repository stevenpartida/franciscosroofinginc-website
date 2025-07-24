"use client";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceGridCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const ServiceGridCard = ({
  title,
  description,
  image,
  link,
}: ServiceGridCardProps) => {
  return (
    <motion.div whileHover={{ y: 10 }} className="h-full w-full">
      <Link href={link} className="h-full block">
        <Card className="w-full h-full flex flex-col justify-between overflow-hidden shadow-lg">
          {/* Image */}
          <div className="relative h-[200px] w-full">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>

          {/* Content */}
          <CardContent className="flex-1 flex flex-col justify-between text-center px-5 py-4">
            <div>
              <CardTitle className="text-lg sm:text-xl font-manrope font-semibold text-black">
                {title}
              </CardTitle>
              <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
                {description}
              </p>
            </div>
          </CardContent>

          {/* Footer */}
          <CardFooter className="justify-center py-4">
            <p className="text-blue-600 font-medium hover:underline">
              View Service
            </p>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};
