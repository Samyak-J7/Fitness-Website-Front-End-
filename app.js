let nav = document.querySelector(".sidebar");
const shownav = () => {nav.style.display="block";}
const closebar = () => {nav.style.display="none";}
function showDiv(index) {
    document.querySelector("#hoverdiv").style.display = "flex";
    let divs = document.querySelectorAll("#hoverdiv div");
    divs.forEach(element => {
        element.style.display = "none";
    });    
    let div_to_show = document.querySelectorAll(`.${index}`);
    div_to_show.forEach(element => {
        element.style.display = "flex";
    });
}
function hidedivs() {
    let divs = document.querySelectorAll("#hoverdiv div");
    divs.forEach(element => {
        element.style.display = "none";
    });    
    document.querySelector("#hoverdiv").style.display = "none";
}
function showdiv() {
    document.querySelector("#hoverdiv").style.display = "flex";
}
// window.addEventListener('scroll', function() {
//     let navbar = document.querySelector('nav');
//     if (window.scrollY > 0) {
//       navbar.style.height = '10vh'; // Adjust the height you want to shorten to
//     } else {
//       navbar.style.height = '15vh'; // Adjust the original height of the navbar
//     }
//   });
