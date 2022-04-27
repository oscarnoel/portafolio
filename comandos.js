
let busqueda = document.querySelector(".css-input")

busqueda.addEventListener("input", onSearchButton)
function onSearchButton(){
       if(busqueda.value == ""){
            document.querySelector('.myButton').style.backgroundColor = 'white';
            document.querySelector('.myButton').style.color = '#666666';
            
       } else {
        document.querySelector('.myButton').style.backgroundColor = 'gray';
        document.querySelector('.myButton').style.color = 'white';
       }
}
