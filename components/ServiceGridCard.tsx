import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

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
    <Card className="w-full h-[500px] flex flex-col overflow-hidden shadow-lg">
      {/* Image section */}
      <div className="relative h-[45%] w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Content section */}
      <CardContent className="flex-1 flex flex-col text-center px-6 py-4">
        <CardTitle className="text-xl font-manrope font-semibold text-black">
          {title}
        </CardTitle>
        <p className="text-base/6  text-muted-foreground mt-2">{description}</p>
      </CardContent>

      {/* Footer with link */}
      <CardFooter className="justify-center pb-8">
        <Link
          href={link}
          className="text-normal text-highlight font-medium hover:underline"
        >
          View Service
        </Link>
      </CardFooter>
    </Card>
  );
};
