import React, { useState } from 'react'
import { useCount } from '../hooks/useCount'

function Counter() {

    let { count, handleRestar, handleSumar, handleReset } = useCount(1, 1, 10);

    return (
        <div>
            {count}
            <button onClick={handleRestar}> - </button>
            <button onClick={handleSumar}> + </button>
            <button onClick={handleReset}>Restablecer</button>
        </div>
    )
}

export default Counter
