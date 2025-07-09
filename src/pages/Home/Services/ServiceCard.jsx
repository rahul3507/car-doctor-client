/** @format */

import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../components/ui/3d-card";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <CardContainer className="inter-var m-0">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  max-w-[30rem] h-auto rounded-xl p-6 pt-3 border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-lg md:text-xl  font-bold text-neutral-600 dark:text-white  mt-3"
        >
          {title}
        </CardItem>

        <div className="flex justify-between items-center mt-2">
          <CardItem
            translateZ="50"
            className="text-sm md:text-base font-medium text-red-500"
          >
            Price: {price}
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-sm md:text-base font-medium text-red-500"
          >
            <MoveRight />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ServiceCard;
