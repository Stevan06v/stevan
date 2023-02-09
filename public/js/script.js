/*
========================================================
                    ASYNC-FUNCTIONS
========================================================
In JavaScript, an asynchronous function is a function that runs in the background, 
separate from the main execution thread, 
allowing other code to continue to run while the function is executing.
*/

let skillCircle = document.getElementById('skillCircle')

genrateSkillCircle();

function genrateSkillCircle() {
    // data received -> load content 
    getSkills().then(skillset =>{
        let html = "";

        for (let i = 0; i < 8; i++) {
            html += `
            <div class="skill">
                <img class="skillImage" src="${skillset.skills[i].path}" alt="${skillset.skills[i].name}" onclick="selectSkill(${i})">
            </div>
            `; 
        }
        skillCircle.innerHTML = html;
        rotateSkills();
        })
    }


/* skill-functions start*/
// get data first
async function getSkills() {
    const response = await fetch('/skills');
    const data = await response.json();
    return data;
}

function rotateSkills() {
    let skillCount = document.getElementsByClassName('skill').length
    console.log(skillCount);
    let skill = "";

    for (let i = 0; i < skillCount; i++) {
        skill = document.getElementsByClassName('skill')[i];
        skill.style.rotate = (360/skillCount) * i + "deg";
    }
    backrotateSkillImages();
}

function backrotateSkillImages() {
    let skillCount = document.getElementsByClassName('skillImage').length;
    console.log(skillCount);
    let skill = "";

    for (let i = 0; i < skillCount; i++) {
        skill = document.getElementsByClassName('skillImage')[i];
        skill.style.rotate = -(360/skillCount)*i + "deg";
    }
}

function selectSkill(index) {
    let skillBox = document.getElementById('skillBox');

    getSkills().then( data => {
        console.log(data.skills[index].name);
    });
}
/* skill-functions end*/




