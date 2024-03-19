/* Seleccion de los elementos*/ 

const btnEncriptar = document.querySelector(".btn-encriptar");
const textEncriptar= document.querySelector(".Encriptar");
const aviso = document.querySelector(".texto-aviso");
const reply = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedora");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnLinkedin = document.querySelector(".LinkedIn");
const btnGit = document.querySelector(".Git");


/*Boton de encryptar*/
btnEncriptar.addEventListener("click",e=>{
    e.preventDefault()
    let texto=textEncriptar.value;
    let txt = texto.normalize("NFD").replace( /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    //console.log(texto);

    if(texto==""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontweight = "800";
        aviso.textContent = "el campo de texto no debe estar vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);
        }

        else if(texto!==txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontweight = "800";
        aviso.textContent = "No debe tener acentos ni caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);

    }

    else if(texto!==texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontweight = "800";
        aviso.textContent = "El texto debe contener solo minusculas"
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);

    }

    else{
        texto = texto.replace(/i/mg, "imes")
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        reply.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();


    }
    console.log(texto)
})

/*Boton de desencryptar*/

btnDesencriptar.addEventListener("click",e=>{
    e.preventDefault()
    let texto=textEncriptar.value;
    let txt = texto.normalize("NFD").replace( /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    //console.log(texto);

    if(texto==""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontweight = "800";
        aviso.textContent = "el campo de texto no debe estar vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);
        }

        else if(texto!==txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontweight = "800";
        aviso.textContent = "No debe tener acentos ni caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);

    }

    else if(texto!==texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontweight = "800";
        aviso.textContent = "El texto debe contener Solo minusculas"
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);

    }

    else{
        texto = texto.replace(/enter/mg,"e");
        texto = texto.replace(/imes/mg,"i");
        texto = texto.replace(/ai/mg,"a");
        texto = texto.replace(/ober/mg,"o");
        texto = texto.replace(/ufat/mg,"u");

        reply.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();

    }
})
/*Boton de copiar*/

btnCopiar.addEventListener("click",e=>{
    e.preventDefault()
    let copiar = reply;
    copiar.select();
    document.execCommand("copy");
})

btnCopiar.addEventListener("click",e=>{
    e.preventDefault()
         
})



