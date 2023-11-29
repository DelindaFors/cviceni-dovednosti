/*console.log('funguju!')*/

function updateSkill(skillId, value) {
    const skill = document.querySelector(`#${skillId}`);
    const progressBar = skill.querySelector('.skill__progress');
    const valueElement = skill.querySelector('.skill__value');

progressBar.style.width = `${value}%`;
valueElement.textContent = `${value} / 100`;
}

function setskills() {
    const htmlSkill = prompt ("Zadej zkušenosti v HTML:"); 
    const cssSkill = prompt ("Zadej zkušenosti v CSS:");
    const jsSkill = prompt ("Zadej zkušenosti v JavaScriptu:");

updateSkill('skill1', htmlSkill);
updateSkill('skill2', cssSkill);
updateSkill('skill3', jsSkill);
}

setskills();