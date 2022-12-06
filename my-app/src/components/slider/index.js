import React, { useEffect, useState } from "react";
import '../../../src/App.css';

const Slider = () => {
const [ currIndex, setCurrIndex ] = useState(0)
const [ isActive , setIsActive ] = useState(false)

const images = [
    {   title: 'Rome',
        img: 'https://a.cdn-hotels.com/gdcs/production40/d811/5e89ad90-8f10-11e8-b6b0-0242ac110007.jpg?impolicy=fcrop&w=800&h=533&q=medium'},
    {   title: 'Napoli',
        img: 'https://image.dnevnik.hr/media/images/920x695/Sep2018/61551468.jpg'},
    {   title: 'Venice',
        img: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2022/04/DEC273.my_venice.gettyimages_178512081_credit_istock_getty_images_resized-for-web.jpg'},
]

useEffect(() => {
    let interval = null
    if(isActive)
    {
        interval = setInterval(() => {
        currIndex == images.length - 1 ? setCurrIndex(0) : setCurrIndex(currIndex + 1)
    }, 1000)
    }
    return () => clearInterval(interval)
},[isActive, currIndex])

const left = () => {
    currIndex == 0 ? setCurrIndex(images.length - 1) : setCurrIndex(currIndex - 1)
}
const right = () => {
    currIndex == images.length - 1 ? setCurrIndex(0) : setCurrIndex(currIndex + 1)
}

const start = () => {
setIsActive(true)
}
const stop = () => {
setIsActive(false)
}
    return (
    <div className="container">
        <div className="slider">
        <button onClick={left}>Left</button>
        <img className="img" src={images[currIndex].img}></img>
        <button onClick={right}>Right</button>
        </div>
        <div className="slider">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        </div>
    </div>
    )
}

export default Slider