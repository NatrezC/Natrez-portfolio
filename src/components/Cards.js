import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="jokesterpic.jpg"
                            text="This is a fullstack web application that allow the user to experience laughter and fun with different random jokes. I used Node.js, PostgreSql, and API calling for this application."
                            label="JavaScript"
                            href="https://jokesterapp.herokuapp.com/"
                        />
                        <CardItem
                            src="connect4.jpeg"
                            text="During my childhood, my family always played different kinds of classic games. I decided to creat another variation of a classic Connect 4 game using vanilla JavaScript, HTML, and CSS. Battle against a friend to see who will win. "
                            label="React"
                            href="https://natrezc.github.io/NatrezC_Connect4/"
                        />
                        <CardItem
                            src="ecommerce.jpeg"
                            text="This application is something that I would want to branch off my talents into doing which is creating ecommerce websites. Creating this website I used React.js, MongoDb, HTML, CSS, and Redux. "
                            label="React"
                            href="https://natrezc.github.io/NatrezC_Connect4/"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
