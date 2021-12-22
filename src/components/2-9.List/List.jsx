import React from 'react'

export default function List() {
    // const numbers = [1,2,3,4,5];
    // return (
    //     <div>
    //         {numbers.map(item=>(
    //             <li key={item.toString()}>{item}</li>
    //         ))}
    //     </div>
    // );
    const todos = [
        {id:1, text: 'Drink water'},
        {id:2, text: 'Drink water2'},
        {id:3, text: 'Drink water3'},
        {id:4, text: 'Drink water4'},
        {id:5, text: 'Drink water5'}
    ];

    const Item = (props) => {
        return (
        <li>
            {props.id}
            {props.text}
        </li>
        );
    }

    const todoList = todos.map((todo) => <Item key={todo.id} id={todo.id} text={todo.text} />)

    return (
        <>
            {todoList}
        </>
    );
}
