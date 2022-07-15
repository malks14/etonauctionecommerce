import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
 
function Collection({name, collection, artist, year, chain, hover, link, image}) {
    return (
        <CollectionWrapper>
            <Link href="/" passHref>
                <a>
                    <img src={image} alt={name}/>
                    <h1>{collection}</h1>
                    <h2 style={{marginBottom:"10px"}}><span style={{}}>{artist}</span></h2>
                    <span style={{fontWeight:"100", fontSize:"16px", marginLeft:"2px"}}>{year}</span>
                    <Chain>{chain}</Chain>
                    <ComingSoon style={{transition:"1s ease-out!important"}}>
                        <img alt="" src={hover}/>
                    </ComingSoon>
                </a>
            </Link>
        </CollectionWrapper>
    )
}

export default Collection


const CollectionWrapper = styled.div`
    position: relative;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: auto;
    padding: 25px;
    margin: 2% 2%;
    width: 300px;
    height: 460px;
    background-color: white;
    overflow: hidden;
    cursor: pointer;
    box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: 0.371s ease-out;
    a{
        color: black;
        text-decoration:  none!important;
        img {
            object-fit: cover;
            width: 300px;
            height: 300px;
            margin-bottom: 24px;
            margin-top: 10px;
        }
        h1 {
            font-size: 24px!important;
            font-weight: 400;
            margin-bottom: 10px!important;
        }
        span {
            
        }
        h2 {
            background-color: black; 
            color: white;
            padding: 8px 0;  
            font-weight: 200;
            font-size: 20px!important;
            max-width: 180px;
            margin:  auto;
            margin-top: 12px;
        }
    }
    :hover {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.21),0 24px 6px -2px rgba(0, 0, 0, 0.05);
        transition: 0.371s ease-out;
        
        width: 300px;
        height: 460px;
        background-color: black;
        a {
            background-color: black;

            color: white;
        }
        h1 {
            color: white;
        }
        h2 {
            background-color: white;
            color: black;
        }
        h3 {
            color: white;
            opacity: 1;
            transition: 0.371s ease-out;
            svg {
                transition: 0.371s ease-out;
                fill: white;
            }
        }
    }
    @media (max-width: 1023px) {
        width: 250px;
        height: 420px;
        img {
            box-shadow: none;
            width: 250px;
            margin-bottom: 24px;
            margin-top: -10px;
            object-fit: contain;
        }
        h1 {
            font-size: 20px!important;
            font-weight: 400;
            margin-bottom: 5px!important;
           
        }
        span {
            margin-top: 0;
            height: 420px;
        }
        h2 {
            font-weight: 200;
            font-size: 20px;
        }
        :hover {
            width: 250px;
        }
    }
    @media (max-width: 768px) {
        margin: 0;
        margin-bottom: 40px;
        width: 280px;
        height: 420px;
        :hover {
            margin: 0;
            margin-bottom: 40px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.21),0 24px 6px -2px rgba(0, 0, 0, 0.05);
            transition: 0.371s ease-out;
            width: 180px;
            height: 420px;
            h3 {
                opacity: 1;
                transition: 0.371s ease-out;
                svg {
                    transition: 0.371s ease-out;
                    fill: white;
                }
            }
        }
        img {
            box-shadow: none;
            width: 200px;
            object-fit: contain;
        }
        h1 {
            font-size: 18px!important;
            font-weight: 400;
            margin-bottom: 5px!important;
           
        }
        span {
            margin-top: 0;
           
        }
        h2 {
            font-weight: 200;
            font-size: 18px;
        }
        :hover {
            width: 280px;
            height: 420px;
        }
        
    }
    @media (max-width: 425px) {
        margin: 0;
        margin-bottom: 0px;
        width: 90vw;
        height: auto;
        padding: 0;
        padding-bottom: 40px;
        :hover {
            margin: 0;
            margin-bottom: 40px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.21),0 24px 6px -2px rgba(0, 0, 0, 0.05);
            transition: 0.371s ease-out;
            width: 180px;
            height: 460px;
            h3 {
                opacity: 1;
                transition: 0.371s ease-out;
                svg {
                    transition: 0.371s ease-out;
                    fill: white;
                }
            }
        }
        img {
            box-shadow: none;
            width: 70vw!important;
            object-fit: contain;
        }
        a{
            width: 100%;
            h1 {
                font-size: 18px!important;
                font-weight: 400;
                margin-bottom: 5px!important;
                width: 100%;
            }
            span {
                margin-top: 0;
                margin-bottom: 20px!important;
                height: auto;
            }
        }
        h2 {
            font-weight: 200;
            font-size: 18px;
        }
        :hover {
            width: 280px;
            height: 420px;
        }
        
    }
`

const Chain  = styled.div`
    position:  absolute;
    bottom: 16px;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    color: black;
    padding: 8px;
    @media (max-width: 420px) {
        bottom: 0!important;
    }
`


const ComingSoon = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    height: 480px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
    display: none;
    }
    img {
    display: none;
    width: auto;
    height: 480px!important;
    object-fit: cover;
    }
    :hover{
        img {
        min-height: 480px!important;
        display: flex;

        width:  100%;
        display: none;
    }
    h2 {
    display: flex;
    color: white;
    line-height: 56px;
    }

    }
    @media (max-width: 1024px) {
        :hover{
            background-color: transparent;
        }
    }   

`
