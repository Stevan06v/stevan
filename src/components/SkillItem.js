import React from 'react';
import "./css/skillItem.css";

const SkillItem = ({name, borderclr, imgsrc, index}) => {
    console.log(index + ": " +name );

    
    const skillItem = {
        "border":`5px solid ${borderclr};`,
        "width":"1rem;"
    };
    

  return (
    <div>
        <div className="skillItem">
            <img src={imgsrc} ></img>
        </div>
    </div>
  );
}


export default SkillItem;
