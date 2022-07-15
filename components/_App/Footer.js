import React from 'react'

function Footer() {
  return (
    <div>
        <footer>
            <div className="social-media">
                <p>FB</p>
                <p>IG</p>
                <p>TG</p>
                <p>Etc</p>
            </div>
            <div className='sectionsWrapper'>
                <section>
                    <p>Collections</p>
                    <p>Meet The Team</p>
                    <p>Cookies</p>
                    <p>Privacy Policy</p>
                    <p>Terms &amp; Conditions</p>
                </section>
                <section>
                    <p>Invest In Art</p>
                    <p>The Picasso of India</p>
                    <p>What are NFT's</p>
                    <p>Web3.0 and it's repercusion in Art</p>
                    <p>How to connect to the Polygon Blockchain</p>
                </section>
                <section>
                    <p>General Inquiries</p>
                    <p>info@etonauctions.co.uk</p>
                    <p>Art Advisory</p>
                    <p>artadvisory@etonauctions.com</p>
                    <p>Grenville Court, Britwell Rd - Burnham, UK</p>
                </section>
            </div>
        </footer>
        <style jsx>{`
            footer {
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: #000;
                color: rgba(255,255,255,0.5);
                padding-top: 60px;
            }
            
            .sectionsWrapper {
                padding-bottom: 80px;
                padding-top: 40px;
                width: 100%;
                height: auto;
                display: flex;
                align-items: center;
                justify-content: space-around;
            }
            
            .social-media {
                width: 60%;
                margin: auto;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            p { 
                cursor: pointer;
            }

            @media (max-width: 1024px) {
                section {
                    width: 100%;
                }
            }
        `}</style>
    </div>
  )
}

export default Footer;