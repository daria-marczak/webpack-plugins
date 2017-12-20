import React from "react";

//Twoim zadaniem będzie zaimplementowanie komponentu Title, który będzie wyświetlał tytuł aplikacji wraz z liczbą zadań, które zostały dodane do listy.

const Title = (props) => {
    return (
        <div className="header">
            <h1>Task board</h1>
            <p>Number of tasks is: {props.counter}</p>
        </div>
    )
}

export default Title;
