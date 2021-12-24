import React, { useReducer } from 'react'

export default function Reducer() {
    const initialState = { count : 0, name : 'tommy' };

    function reducer(state, action){
        switch(action.type){
            case 'reset':
                return { initialState };
            case 'increment':
                return { count: state.count + 1, name: 'jimmy' };
            case 'decrement':
                return { count: state.count - 1, name: 'timmy' };
            default:
                throw new Error();
            
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            Count(Reducer) : {state.count}
            name : {state.name}
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
            <button onClick={() => dispatch({type:'increment'})}>+</button>
            <button onClick={() => dispatch({type:'decrement'})}>-</button>
        </>
    );
}
