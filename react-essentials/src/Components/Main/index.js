import React from 'react';

export default function main(props) {
    const dishObjects = props.dishes.map( (dish, i) => {
        return {
            id: i,
            title: dish
        }
    });

    return (
        <section>
            <p>We serve the most {props.adjective} food around.</p>
            <img src="https://i.redd.it/flf4unxcf8x51.jpg" />
            <ul style={ {textAlign: 'left'} }>
                { dishObjects.map((dish) => {
                    return <li key={dish.id}> {dish.title} </li>
                }) }
            </ul>
        </section>
    )
}