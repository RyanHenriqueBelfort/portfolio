import { Link } from "@phosphor-icons/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

interface CardProps {
  photo: string[];
  name: string;
  link: string;
  description: string;
}

export function CardProject({ photo, link, name, description }: CardProps) {
  const photos = [...photo];

  return (
    <>
    <div className="bg-main-700 w-80 hover:drop-shadow-2xl rounded-b-md rounded-t-sm">
      <Carousel showThumbs={false} showIndicators={true} showArrows={true}>
        {photos.map((photo) => (
          <div className="">
            <img
              src={photo}
              className="rounded-t-sm object-cover max-h-[200px] min-h-[200px]"
            />
          </div>
        ))}
      </Carousel>
      <div className="px-5 min-h-[170px] max-h-[150px] overflow-hidden">
        <h1 className="text-center text-2xl text-white pb-2">{name}</h1>
        <span className="text-gray-400 text-sm capitalize ">{description}</span>
      </div>
      <div className="px-5 pb-5">
        <a href={link} target="_blank">
          <button className="bg-main-200 p-2 rounded-md w-full hover:brightness-75 hover:scale-105 duration-500 mt-4 text-white text-lg flex justify-center items-center gap-2">
            Visite
            <Link size={24} color="#fff"/>
          </button>
        </a>
      </div>
    </div>
    </>
  );
}
