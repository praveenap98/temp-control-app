import React, { useState } from 'react';
import './styles.css'

const App = () => {
    const[count, setCount] = useState(10);
    const[color, setColor] = useState('');
    return (
        <>
        <div className='app-container'>
        <button className='display' style={{backgroundColor : color}} href='#'>{count} <sup>o</sup>C</button>
          <div className='container'>
            <button className='button' onClick={
                () => {
                    if(count+1 > 14)
                    setColor('orange')
                    setCount(count+1)
                }
            }>+</button>
            <button className='button' onClick={
                () => {
                    if(count-1 <= 14)
                    setColor('lightblue')
                    setCount(count-1)
                    
                }
            }>-</button>
          </div>
        </div>  
        </>
    )
}

export default App;