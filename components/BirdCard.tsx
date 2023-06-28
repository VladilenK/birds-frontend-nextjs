"use client";

import { useState } from "react";
import Image from "next/image";

// import { calculateCarRent, generateCarImageUrl } from "@/utils";
import { BirdProps } from "@/types";
import CustomButton from "./CustomButton";
import BirdDetails from "./BirdDetails";

interface BirdCardProps {
  bird: BirdProps;
}

const BirdCard = ({ bird }: BirdCardProps) => {
  const { taxon } = bird;

  const [isOpen, setIsOpen] = useState(false);

  // const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {taxon} 
        </h2>
      </div>

      {/* <p className='flex mt-6 text-[18px] leading-[16px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
        {taxon}
        <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
      </p> */}

      <div className='relative w-full h-40 my-3 object-contain'>
        <a href={bird.targetUrl}>
          <Image src={bird.url} alt={taxon} fill priority className='object-contain' />
        </a>
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-[14px] leading-[17px]'>
              Source site: <a href={bird.targetUrl}>{bird.origSiteName}</a><br/>
              Location: {bird.origLocation}
            </p>
          </div>
        </div>
        {/* <div className="car-card__btn-container">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div> */}
      </div>

      {/* <BirdDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} bird={bird} /> */}
    </div>
  );
};

export default BirdCard;