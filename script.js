//Modificar el primer "¡Hola mundo!" para que diga "Adiós" usando JS
const h1Element = document.getElementById("red");
h1Element.textContent = "Adiós mundo!";
//Cambiar el color de fuente de un encabezado a naranja con JS
h1Element.style.color= "orange"
//Agregar un encabezado clickeable que cambie el color de la fuente a café con JS
h1Element.addEventListener("click", (event)=>{
    h1Element.style.color = "beige";
})
