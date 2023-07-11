const DarkMode = () => {
    let darkMode=false;

return (
<button class="darkbtn" id="darkMode" onClick={() => {
    if(!darkMode) {
    document.body.classList.toggle("dark-mode");
   
}
    else{
    document.body.classList.toggle("dark-mode");
}
}}  >D/L</button>
);
}

export default DarkMode;