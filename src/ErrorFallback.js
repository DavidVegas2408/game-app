import React from 'react'
import "./ErrorFallback.css"

const ErrorFallback = () => {
    return (
        <div className='wrapper'>
            <div className='box'>
                <h1>500</h1>
                <p>Lo siento, no podemos mostrar el contenido</p>
                <p>&#58;&#40;</p>
                <p><a href="/">Intentalo nuevamente</a></p>
            </div>
        </div>
    )
}

export default ErrorFallback