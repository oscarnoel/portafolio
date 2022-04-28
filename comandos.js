
let busqueda = document.querySelector(".css-input")

let lista = [
     { nombre: 'Oscar', valor: 'xd'},
     { nombre: 'Zeger', valor: 432}]




function onSearchButton(){
     const texto = busqueda.value.toLowerCase()

     //let result = busqueda.value.toLowerCase().includes()
     for(let listas of lista){
          let trabajo = listas.nombre.toLowerCase()
          if(trabajo.indexOf(texto) !== -1){
                    alert(listas.valor)
          }    
     }
     
}

busqueda.addEventListener("keyup", onSearchButton)
