console.log('funguju!')

const skill1 = prompt ("Zadej zkušenosti v HTML:")
const skill2 = prompt ("Zadejte uzkušenosti v CSS:")
const skill3 = prompt ("Zadejte uzkušenosti v JavaScriptu:")

document.getElementById("skill1").querySelector(".skill__value").innerText = skill1 + " / 100";
document.getElementById("skill2").querySelector(".skill__value").innerText = skill2 + " / 100";
document.getElementById("skill3").querySelector(".skill__value").innerText = skill3 + " / 100";
