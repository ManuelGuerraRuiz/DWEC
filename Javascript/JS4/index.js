const buscarPokemon = document.getElementById("buscarPokemon");
const boton = document.getElementById("boton");
var nombre = document.getElementById("nombre");
var altura = document.getElementById("altura");
var peso = document.getElementById("peso");
var sprite = document.getElementById("sprite");
var tipo = document.getElementById("tipo");
var version = document.getElementById("version");
var id = document.getElementById("id");

function reqListener() {

    if(this.responseText !== "Not Found")
    {
        var obj = JSON.parse(this.responseText);

        nombre.innerHTML = "";
        nombre.innerHTML += `${obj.name}`;
    
        altura.innerHTML = "";
        altura.innerHTML += `${obj.height}`;
    
        peso.innerHTML = "";
        peso.innerHTML += `${obj.weight}`;
    
        sprite.innerHTML = "";
        sprite.innerHTML += `<img src="${obj.sprites.front_default}">`;
        tipo.innerHTML = "";
    
        for (let i = 0; i < obj.types.length; i++) {
            const element = obj.types[i];
            console.log(`Tipo:${element.type.name}`);
            tipo.innerHTML += `
                    ${element.type.name} /`;
        }
        version.innerHTML = "";
        for (let j = 0; j < obj.game_indices.length; j++) {
            const elemento = obj.game_indices[j]
            console.log(`Version:${elemento.version.name}`);
    
            version.innerHTML +=
                `{${elemento.version.name}}<br>`;
        }
        console.log(obj);
    }
    else
    {
        nombre.innerHTML = "No existe";
    
        altura.innerHTML = "No existe";
    
        peso.innerHTML = "No existe";
    
        sprite.innerHTML = "No existe";

        tipo.innerHTML = "No existe";
        
        version.innerHTML = "No existe";
    }

}

const llamarApi = () => {
    let nombre = buscarPokemon.value.toString().toLowerCase();
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", `https://pokeapi.co/api/v2/pokemon/${nombre}`, true);
    oReq.send();
};

boton.addEventListener("click", llamarApi);