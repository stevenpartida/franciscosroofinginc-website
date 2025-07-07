import Link from "next/link";
import Image from "next/image";

import React from "react";

const LogoCloud = () => {
  return (
    <div className="mx-auto grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 max-w-6xl place-items-center">
      {/* Top 4 Logos */}
      <Image
        src="/logos/eagleRoofing.png"
        alt="eagle roofing logo"
        width={164}
        height={92}
        className="max-h-12 w-full object-contain"
      />
      <Image
        src="/logos/certainTeed.png"
        alt="certainteed logo"
        width={164}
        height={43}
        className="max-h-12 w-full object-contain"
      />
      <Image
        src="/logos/owensCorning.png"
        alt="owens corning logo"
        width={164}
        height={72}
        className="max-h-12 w-full object-contain"
      />
      <Image
        src="/logos/GAF.png"
        alt="gaf logo"
        width={164}
        height={72}
        className="max-h-12 w-full object-contain"
      />

      {/* Last logo full-width on mobile, center aligned */}
      <div className="col-span-2 flex justify-center sm:col-span-1 lg:col-span-1">
        <Image
          src="/logos/malarkey.png"
          alt="malarkey logo"
          width={164}
          height={51}
          className="max-h-12 w-full object-contain"
        />
      </div>
    </div>
  );
};

export default LogoCloud;
