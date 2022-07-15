import router from 'next/router'
import React from 'react'

export default function ButtonPrimary(props) {
  return (
      <div>
        <button onClick={() => router.push(`/${props.link}`)}>
            <p>{props.text}</p>
        </button>
        <style jsx>{`
            button {
                padding: 10px 60px;
                border: 1px solid #000;
                border-radius: 5px;
                background-color: #000;
                color: #fff;
                transition: all 0.3s ease-in-out;
            }

            button:hover {
                background-color: #fff;
                color: #000;
                transform: translateY(-5px);
                drop-shadow: 0px 0px 5px #000;
            }

            @media (max-width: 1024px) {
                button {
                    padding: 15px;
                }
            }
        `}</style>
    </div>
  )
}
