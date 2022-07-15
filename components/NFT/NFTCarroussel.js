import React, { useState } from 'react'
// import Carousel, { CarouselItem } from "../_App/Carousel";
import Collection from '../_App/Collection'
import "../_App/Carousel.module.css"

const NFTCarroussel = () => {
  return (
    <div className="nftCtn">
      {/* <Carousel>
        {collectionList.map((item, index) => {
          return (
            <CarouselItem key={index}>
              <Collection
                image={item.image}
                collection={item.collection}
                year={item.year}
                artist={item.artist}  
                chain={item.chain}
              />
            </CarouselItem>
          );
        })}
      </Carousel> */}
      <div style={{width: "280px", height:"340px", backgroundColor:"aqua", marginRight: "100px"}}>temporario</div>
          
      <div className="nftCtn_info">

          <p>Celebrate this end of year with your loved ones.</p>
          <h1>Woo them with their first NFT!</h1>
          <div>
          <p>
            Browse through the upcoming collections we're launching december
            14th.
          </p>
          <p>
            Every NFT you buy is backed by its physical piece at Eton Auctions.
            International Shipping is included on all purchases*.
          </p>
          <p>
            Any pieces above 1kg in package weight will incur extra charges
            which are to borned by the purchaser.
          </p>
        </div>
      </div>

      <style jsx>
        {`
          .nftCtn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin-top: 20px;
            padding: 0;
            align-items: center;
            text-align: left;
          }

          @media (max-width: 1024px) {
            .nftCtn {
              flex-direction: column;
            }
          }
          .nftCtn h1 {
            font-size: 40px;
          }

          .nftCtn p {
            font-size: 20px;
            font-weight: 200;
          }

          .nftCtn__carroussel {
            height: 460px;
            width: 300px;
            background-color: green;
          }

          .nftCtn_info {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: start;
            width: 440px;
          }



          .nftCtn_info h1 {
            font-size: 40px;
            margin-bottom: 40px;
          }

          .nftCtn_info p {
            width: 450px;
            text-align: left;
          }

          @media (max-width: 1024px) {
            .nftCtn_info {
              text-align: center;
              width: 100%;
              margin-top: 10px;
            }

            .nftCtn_info p {
              width: 100%;
            }

          }
        `}
      </style>
    </div>
  );
};

export default NFTCarroussel;



export const CarouselItem = ({children, width}) => {
  return (
      <div className="carousel-item" style={{ width: width}}>
          {children}
      </div>
  )
}

export function Carousel({children}) {
  const [activeIndex, setActiveIndex] = useState();

  const updateIndex = (newIndex) => {
      if(newIndex < 0) {
          newIndex = 0;
      } else if (newIndex >= React.Children.count(children)) {
          newIndex = React.Children.count(children) - 1;
      }

      setActiveIndex(newIndex);
  }

  return (
      <div className="carousel-wrapper">
          <div className="inner" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
              {
                  React.Children.map(children, (child, index) => {
                      return React.cloneElement(child, {width: "100%"});
                  })
              }
          </div>
          <div className="indicators">
              <button onClick={() => {updateIndex(activeIndex - 1 )}}> <img alt="Eton Auctions" src="/assets/arrow-left.svg"/> </button>
              {React.Children.map(children, (child, index) => {
                  return  (
                      <button 
                      className={`${index === activeIndex ? "active" : ""}`}
                      onClick={() => {updateIndex(index)}}>
                          {index + 1}
                      </button>
                  )
              })}
              <button onClick={() => {updateIndex(activeIndex + 1 )}}> <img alt="Eton Auctions" src="/assets/arrow-right.svg"/>  </button>
          </div>
      </div>
  
  )
}

let collectionList = [
  {
      image: "https://res.cloudinary.com/devops-imgcloud/image/upload/v1634317353/etonauctions/APE_WARRIORS_1_rwz9wv.png",
      collection: "Ape Warriors",
      year: "2021",
      artist: "General Ape",  
      chain: "Polygon",
      hover: "https://res.cloudinary.com/devops-imgcloud/image/upload/v1634164937/etonauctions/eactotts_lq_2_xk8uv9.jpg",
      link: "/",
  },
  {
      image: "https://res.cloudinary.com/devops-imgcloud/image/upload/v1637078142/etonauctions/Collections/M.%20F.%20Hussain/M-F-Hussain-EDITS_0007_20211116_113245_j4kyuu.png",
      collection: "The Picasso of India",
      year: "1978",
      artist: "M. F. Husain",  
      chain: "Polygon",
      link: "/",
  },
  {
      image: "https://res.cloudinary.com/devops-imgcloud/image/upload/v1636410301/etonauctions/Captura_de_Pantalla_2021-11-08_a_la_s_19.07.47_f7n38k.png",
      collection: "T. Wong Collection",
      year: "1994",
      artist: "T. Wong",  
      chain: "Polygon",
      link: "/",
  },
  {
      image: "https://res.cloudinary.com/devops-imgcloud/image/upload/v1634316302/etonauctions/shikha_bnaqsj.png",
      collection: "Life Doodle",
      year: "2021",
      artist: "Shikha Kashyap",  
      chain: "Polygon",
      link: "/",
  },
  {
      image: "https://res.cloudinary.com/devops-imgcloud/image/upload/v1634168196/etonauctions/6179bOX4QXL._AC_SL1200__qh5ehp.jpg",
      collection: "Casual Dog Prints",
      year: "1989",
      artist: "Original",  
      chain: "Polygon",
      link: "/",
  },
  {
      image: "https://res.cloudinary.com/devops-imgcloud/image/upload/v1633041442/etonauctions/Doodlecraze_-_Justin_Draws_iv1dru.png",
      collection: "Into The Mind of Doodle",
      year: "2021",
      artist: "Justin Draws",  
      chain: "Polygon",
      link: "/",
  },
]