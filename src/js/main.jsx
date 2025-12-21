import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

const reactRender = ReactDOM.createRoot(document.getElementById('root'))

let s1 = 0;
let s2 = 0;
let m1 = 0;
let m2 = 0;
let h1 = 0;
let h2 = 0;
 
setInterval(() => {
  reactRender.render(
  <React.StrictMode>
    <Home s1={s1} s2={s2} m1={m1} m2={m2} h1={h1} h2={h2}/>
  </React.StrictMode>,
)
    s1++
    if (s1 === 10) {
        s1 = 0
        s2++
    }
    if (s2 === 6) {
        s2 = 0
        m1++
    }
    if (m1 === 10) {
        m1 = 0
        m2++
    }
    if (m2 === 6) {
        m2 = 0
        h1++
    }
    if (h1 === 10){
        h1 = 0
        h2++
    }
    return
       
}, 1000)


 




