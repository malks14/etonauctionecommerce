import React from "react";
import styled from "styled-components";
import ButtonPrimary from "../components/_App/ButtonPrimary";
import ButtonSecondary from "../components/_App/ButtonSecondary";
import NFTCarroussel from "../components/NFT/NFTCarroussel";

function Home() {
  return (
    <div className="wrapper">
      <section>
        <div className="hero">
          <div className="heroMain">
            <div className="heroMain__info">
              <h1>Eton Auctions</h1>
              <p>
                ❖ Art has proven to outlast centuries, and in today's world we
                can now digitalize authenticity of artwork as a footprint in the
                network. Discover what NFT's are and how you can purchase real
                art through the blockchain.
              </p>
            </div>
            <div className="heroButtons">
              <ButtonPrimary link="" text="Browse our Collection" />
              <ButtonSecondary link="" text="Invest in Art" />
            </div>
          </div>
          <div className="logoCtn">
            <img
              src="/assets/logo.svg"
              alt="Eton Auction Logo"
              className="logoEton"
            />
          </div>
        </div>
        <NFTCarroussel />
      </section>
      <section>
        <div className="aboutCtn">
          <div className="aboutCtn__info">
            <h2>About Us</h2>
            <p>
              For three generations, we have been carrying a legacy by providing
              collectors with renowned valuable art pieces and antiques from all
              over the world.
            </p>
            <ButtonPrimary link="" text="Meet The Team" />
          </div>
          <div className="imageCtnA">
            <video
              autoPlay
              loop
              alt="Eton's Auction About"
              src="https://res.cloudinary.com/devops-imgcloud/video/upload/v1634164937/etonauctions/eactotts_lq_2_xk8uv9.mp4"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="collectorsCtn">
          <div className="imageCtn">
            <img
              src="https://marianacustodio.com/wp-content/uploads/2020/10/pic1.jpg"
              alt="Eton's Auction Collectors"
            />
          </div>
          <div className="collectorsCtn__info">
            <h2>Collectors</h2>
            <p>
              We can source and have in stock Art and Antique pieces for avid
              collectors in the market, please make an appointment for a
              consultation via video call or on site at our premises.
            </p>
            <ButtonPrimary link="" text="Contact Us" />
          </div>
        </div>
      </section>
      <section>
        <div className="artistsCtn">
          <div className="artistsCtn__info">
            <h2>Artists</h2>
            <p>
              We are always looking for emerging artists who are looking for
              international recognition and promotion in the art world. We would
              like to hear from you should you fit the above criteria.
            </p>
            <ButtonPrimary link="" text="Contact Us" />
          </div>
          <div className="imageCtnA">
            <img
              src="https://www.brides.com/thmb/PfcFX47xMD78b7tmVUeIvsB4XW4=/1500x1125/smart/filters:no_upscale()/fbcopy-01ab8a451ca24a57adeaf953056e909b.png"
              alt="Eton's Auction Artists"
            />
          </div>
        </div>
      </section>
      <style jsx>
        {`

        section {
          width: 100%
        }
          .wrapper {
            width: 90%;
            margin: auto;
          }
          @media (max-width: 1440px) {
            .wrapper {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin: auto;
            }
          }

          section {
            height: auto;
            padding: 1rem 0;
          }

          .hero {
            display: flex;
            flex-direction: column;
          }

          .heroMain {
            overflow: hidden;
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            text-align: left;
            margin-left: 8vw;
          }

          .heroMain__info {
            height: auto;
            width: 80%;
            text-align: left;
            margin: 0px auto;
          }

          .heroMain h1 {
            margin-bottom: 40px;
            font-size: 60px;
          }

          .heroMain p {
            font-size: 28px;
            width: 50%;
            line-height: 34px;
            font-weight: 200;
          }

          @media (max-width: 1024px) {
            .heroMain__info {
              width: 100%;
            }
            .heroMain p {
              width: 100%
            }
          }

          @media (max-width: 2560px) {

            .heroMain {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-left: 0px;
            }
            .heroMain__info {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          }

          .heroButtons {
            display: flex;
            margin-top: 40px;
            width: 500px;
            justify-content: space-between;
            margin-left: 10vw;
            min-width: 240px;
          }

          @media (max-width: 1024px) {
            .heroButtons {
              width: 100%;
              justify-content: space-evenly;
              margin: 0px;
            }
          }

          @media (min-width: 2560px) {
            .heroButtons {
              margin-left: 0px;
            }
          }

          .logoEton {
            position: absolute;
            height: 80vh;
            width: 80vw;
            top: 34vh;
            right: 0;
          }

          .collectorsCtn,
          .artistsCtn,
          .aboutCtn {
			      width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          @media (max-width: 1024px) {
            .collectorsCtn,
            .artistsCtn,
            .aboutCtn{
              flex-direction: column;
            }
          }

          @media (max-width: 1024px) {
            .collectorsCtn {
              flex-direction: column-reverse;
            }
          }


          .collectorsCtn__info {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            text-align: left;
            flex: 0.5;
            padding: 2em;
          }

          .collectorsCtn__info h2 {
            font-size: 40px;
          }

          .collectorsCtn__info p {
            font-weight: 100;
            font-size: 28px;
            width: 30rem;
          }

          @media (max-width: 1024px) {
            .collectorsCtn__info {
              align-items: center;
            }
            .collectorsCtn__info p {
              width: 100%;
            }
          }

          .aboutCtn__info,
          .artistsCtn__info {
            width: 30%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: end;
            text-align: right;
            height: auto;
            margin-top: 100px;
          }

          .aboutCtn__info h2,
          .artistsCtn__info h2 {
            font-size: 40px;
          }

          .aboutCtn__info p,
          .artistsCtn__info p {
            font-weight: 100;
            font-size: 28px;
            line-height: 34px;
          }

          @media (max-width: 1024px) {
            .aboutCtn__info {
              width: 100%;
              margin-right: 0px;
              margin-top: 0px;
              align-items: center;
            }

            .artistsCtn__info {
              width: 100%;
              margin-top: 0px;
              align-items: center;
              text-align: center;
            }

            .aboutCtn__info p {
              text-align: center;
            }
          }

          .imageCtn {
            width: 50%;
            align-items: end;
            text-align: right;
            height: auto;
            margin-top: 100px;
            flex: 0.5;
          }

          @media (max-width: 1024px) {
            .imageCtn {
              width: 100%;
              text-align: center;
              margin-top: 0px;
            }
          }

          .imageCtnA {
            text-align: left;
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            text-align: left;
            height: auto;
            margin-top: 100px;
          }
          @media (max-width: 1024px) {
            .imageCtnA {
              width: 100%;
              margin-top: 50px;
            }
          }

          .imageCtnA video {
            margin: auto;
            width: 600px;
          } 
          @media (max-width: 1024px) {
            .imageCtnA video {
              width: 300px;
            }
          }

          @media (min-width: 768px) {
            .imageCtnA video {
              width: 700px;
            }
          }

          .imageCtn img,
          .imageCtnA img {
            width: 510px;
            max-width: 510px;
            margin: auto;
            height: 480px;
            object-fit: cover;
          }
          @media (max-width: 1024px) {
            .imageCtn img,
            .imageCtnA img {
              height: 300px;
              width: 80vw;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;

