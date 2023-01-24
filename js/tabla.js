'use strict'



document.querySelector(".btn-menu").addEventListener("click", toggleMenu);

function toggleMenu() {
    document.querySelector(".ul-nav").classList.toggle("show");
}


let alumnos = [];
const url= 'https://62c096e7d40d6ec55cd356b8.mockapi.io/Escuela'

async function mostrartabla() {
    try {
        let res = await fetch(url);
        let alumnos = await res.json ();
        cuerpotabla.innerHTML=""

        for (let alumno of alumnos){
             cuerpotabla.innerHTML += `
             <tr>
                <td>${alumno.id}</td>
                <td>${alumno.nombre}</td>
                <td>${alumno.dni}</td>
                <td>${alumno.curso}</td>
            
    </tr>
                
    `;
             
        }
    }
    catch (error){
        console.log(error);
    }
}
mostrartabla ()



   document.addEventListener('DOMContentLoaded', mostrartabla)

   


async function enviarDato(){
    let nombre = document.getElementById("nombre1").value;
    let dni = document.getElementById("dni").value;
    let curso = document.getElementById("curso").value;

    let alumno = {
        "nombre": nombre,
        "dni": dni,
        "curso": curso
    }

    try {
        let res = fetch (url, {
            "method": "POST",
            "headers": {"Content-type": "application/json"},
            "body": JSON.stringify(alumno)
        })
        if ((await res).status===201){
            console.log("Anduvo")
        }
    } 
    catch (error){
        console.log(error)
    }
    document.getElementById("nombre1").value = ''
    document.getElementById("dni").value=''
    document.getElementById("curso").value=''
    mostrartabla();
}

document.getElementById("AgregarAl").addEventListener("click", enviarDato);
console.log("");





   async function editar (event){
    event.preventDefault();

    let  id = document.getElementById("id_editar").value;
    parseInt(id);
    let nombre = document.getElementById("inputEditnombre").value;
    let dni = document.getElementById("inputEditdni").value;
    let curso= document.getElementById("inputEditcurso").value;
    
    let alumnoedit = {
        "nombre":nombre,
        "dni":dni,
        "curso":curso
    }




    try {
        let res = await fetch (`${url}/${id}`,{
            "method":"PUT",
            "headers": {"Content-type":"application/json"},
            "body": JSON.stringify(alumnoedit)
        });
        if (res.status ===200){
            console.log("Editado")
            mostrartabla();
        }
    }   catch(error){
        console.log (error);
    }
    document.getElementById("id_editar").value=''
    document.getElementById("inputEditnombre").value=''
    document.getElementById("inputEditdni").value=''
    document.getElementById("inputEditcurso").value=''
    mostrartabla();
}

  



   async function borrar(event){
    event.preventDefault();
    let  id = document.getElementById("id_editar").value;
    parseInt(id);
    try {
        let res = await fetch (`${url}/${id}`, {
            "method": "DELETE"
        });
        if (res.status ===200){
            console.log("Se elimino correctamente")
        }
    }catch (error){
        console.log(error)
    }
    mostrartabla();  
    document.getElementById("id_editar").value='' 
}

   document.getElementById("borrar").addEventListener("click", borrar)


