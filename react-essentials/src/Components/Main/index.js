import React from 'react';

export default function main(props) {
    return (
        <section>
            <p>We serve the most {props.adjective} food around.</p>
            <ul  style={ {textAlign: 'left'} }>
                { props.dishes.map((dish) => {
                    return <li> {dish} </li>
                }) }
            </ul>
        </section>
    )
}