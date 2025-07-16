/** @format */

import { BackgroundGradient } from "../../../components/ui/background-gradient";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../components/ui/3d-card";

import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <CardContainer className="inter-var m-0">
      <BackgroundGradient className="">
        <CardBody className="bg-white dark:bg-gray-700  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1]  max-w-[30rem] h-auto rounded-3xl p-6 pt-3 border  ">
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
            className="text-lg md:text-xl  font-bold  dark:text-white  mt-3"
          >
            {title}
          </CardItem>

          <div className="flex justify-between items-center mt-2">
            <CardItem
              translateZ="50"
              className="text-sm md:text-base font-medium text-red-400"
            >
              Price: {price}
            </CardItem>
            <CardItem
              translateZ="50"
              className="  font-medium text-red-500 cursor-pointer"
            >
              <Link
                to={`checkout/${_id}`}
                className="border border-amber-600 px-2 py-1 rounded-lg cursor-pointer"
              >
                Book Now
              </Link>
            </CardItem>
          </div>
        </CardBody>
      </BackgroundGradient>
    </CardContainer>
  );
};

export default ServiceCard;
