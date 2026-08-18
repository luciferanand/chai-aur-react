import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import Chai from './chai.jsx'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <a href="https://google.com"></a>
        </div>
    )
}

const anotherElement=(
    <a href="https://google.com" target='_blank'>visit google</a>
)

const reactElement=React.createElement(
    'a',
    {href:"https://google.com",target:'_blank'},
    'click me to visit google'
)

createRoot(document.getElementById('root')).render(
  
    <App/>

)
