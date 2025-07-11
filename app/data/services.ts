import { desc, image } from "framer-motion/client";
import { sl } from "zod/v4/locales";

export const servicesData = {
  companyServices: {
    title: "Services",
    subtitle:
      "Reliable and professional residential and commercial roofing services designed to protect your property with quality craftsmanship and durable materials.",
    services: [
      {
        slug: "roof-installation",
        name: "Roof Installation",
        description:
          "We install high-quality shingle, tile, and flat roofs for homes and businesses.",
        image: "/residential.jpg",
        link: "",
      },
      {
        slug: "roof-repair",
        name: "Roof Repair",
        description:
          "We fix leaks, broken shingles or tiles, and other common roof issues quickly and reliably.",
        image: "/RoofRepair.jpg",
        link: "",
      },
      {
        slug: "roof-replacement",
        name: "Roof Replacement",
        description:
          "We remove and replace old or damaged roofs with durable, long-lasting shingle, tile, or flat roofing systems for homes and businesses.",
        image: "/roofReplacement.jpg",
        link: "",
      },
      {
        slug: "flat-and-low-slope-roofing",
        name: "Flat & Low-Slope Roofing",
        description:
          "We install and maintain durable flat roofing systems for residential and commercial properties.",
        image: "/commercial.jpg",
        link: "",
      },
      {
        slug: "gutter-installation-and-repair",
        name: "Gutter Installation & Repair",
        description:
          "Protect your property with custom-fit gutter systems and efficient drainage solutions.",
        image: "/gutterInstall.png",
        link: "",
      },
      {
        slug: "roof-coating-and-waterproofing",
        name: "Roof Coating & Waterproofing",
        description:
          "Extend the life of flat roofs with UV-resistant coatings and leak-preventing barriers.",
        image: "/waterProof.jpg",
        link: "",
      },
    ],
  },
};
