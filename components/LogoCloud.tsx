import Link from "next/link";
import Image from "next/image";

import React from "react";

const LogoCloud = () => {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-5 items-center gap-x-4 gap-y-6 sm:gap-x-6">
      <Image
        src="/logos/eagleRoofing.png"
        alt="eagle roofing logo"
        width={164}
        height={92}
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
      ></Image>
      <Image
        src="/logos/certainTeed.png"
        alt="certainteed logo"
        width={164}
        height={43}
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
      ></Image>
      <Image
        src="/logos/owensCorning.png"
        alt="owens corning logo"
        width={164}
        height={72}
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
      ></Image>
      <Image
        src="/logos/GAF.png"
        alt="gaf logo"
        width={164}
        height={72}
        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
      ></Image>
      <Image
        src="/logos/malarkey.png"
        alt="malarkey logo"
        width={164}
        height={51}
        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
      ></Image>
    </div>
  );
};

export default LogoCloud;
