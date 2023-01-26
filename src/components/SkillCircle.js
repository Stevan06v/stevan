import React from 'react';
import SkillItem from './SkillItem';
import './css/skillCircle.css';
import IMAGES from './img/skillImages';

const skillProps = [
    {
        "name":"js",
        "borderclr":"#F0DB4F", 
        "imgsrc":IMAGES.js
    },
    {
        "name":"nodejs",
        "borderclr":"#68A063",
        "imgsrc":IMAGES.nodejs
    },
    { 
        "name":"sql",
        "borderclr":"#00758F",
        "imgsrc":IMAGES.sql
    },
    {
        "name":"html5",
        "borderclr":"tomato",
        "imgsrc":IMAGES.html5
    },
    {
        "name":"css3",
        "borderclr":"#2965f1",
        "imgsrc":IMAGES.css3
    },
    {
        "name":"react",
        "borderclr":"#61DBFB",
        "imgsrc":IMAGES.react
    },{
        "name":"java",
        "borderclr":"#1FBED6",
        "imgsrc":IMAGES.java
    },
    {
        "name":"php",
        "borderclr":"#8993be",
        "imgsrc":IMAGES.php
    }
]



const SkillCircle = () => {
  return (
    <div>
        <div className='skillCircle'>
    {
        skillProps.map((iterator, index)=>{
        return <SkillItem name={iterator.name} borderclr={iterator.borderclr} imgsrc = {iterator.imgsrc} index={index} ></SkillItem> 
        })
    }
    </div>
    </div>
  );
}


export default SkillCircle;