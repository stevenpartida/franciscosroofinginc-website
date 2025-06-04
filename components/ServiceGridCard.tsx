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
    <Card className="w-full h-[400px] flex flex-col overflow-hidden shadow-lg">
      {/* Image section */}
      <div className="relative h-[40%] w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Content section */}
      <CardContent className="flex-1 flex flex-col items-center justify-center text-center px-6 py-4">
        <CardTitle className="text-lg text-blue-800">{title}</CardTitle>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      </CardContent>

      {/* Footer with link */}
      <CardFooter className="justify-center">
        <Link
          href={link}
          className="text-sm text-blue-600 font-medium hover:underline"
        >
          View Service →
        </Link>
      </CardFooter>
    </Card>
  );
};
