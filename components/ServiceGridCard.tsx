import Link from "next/link";
import Image from "next/image";

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
}: ServiceGridCardProps) => {};
