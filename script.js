// document.getElementById("talk").addEventListener("click",()=>{
//    window.alert("Fantastic");
// });
let popu = document.getElementById("popup");
function openpopup() {
   popu.classList.add("open-popup");
};
function closepopup() {
   popu.classList.remove("open-popup");
};


document.getElementById("mail").addEventListener('mouseover', () => {
   mail.innerHTML = 'please click on resume'
});
document.getElementById("mail").addEventListener('mouseout', () => {
   mail.innerHTML = 'Read More'
});


