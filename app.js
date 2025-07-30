const amigoList = [];

function agregarAmigo() {
    const amigo = document.getElementById("amigo").value.trim();
    if(amigo===""){
        alert("No se puede cargar el campo vacio.");
    }else{
        addList(amigo);
    }
}

function addList(amigo) {
    amigoList.push(amigo);
    cargaAmigo(amigoList);
    document.getElementById("amigo").value = "";
    resetSorteo();
}

function cargaAmigo(newAmigo) {
    const listaAdd = document.getElementById("listaAmigos");
    listaAdd.textContent = "";

    for (let i = 0; i < newAmigo.length; i++) {
        const li = document.createElement("li");
        li.textContent = newAmigo[i];
        listaAdd.appendChild(li);
    }
}

function sortearAmigo(){
    resetSorteo();
    const amigSec=document.getElementById('resultado');
    const sorteo=document.getElementById('sorteo');
    const li=document.createElement('li');

    if(amigoList.length===0){
        li.textContent="No hay amigos disponibles para sortear";
    }else{
        let result=amigoList[Math.floor(Math.random()*amigoList.length)]
        li.textContent=`El amigo secreto es ${result}`;
        sorteo.disabled=true;
    }
    amigSec.appendChild(li);
}

function resetSorteo(){
    const amigSec=document.getElementById('resultado');
    amigSec.innerHTML="";
}

function resetGame(){
    amigoList.splice(0,amigoList.length);
    resetSorteo()
    const listArray = document.getElementById("listaAmigos");
    document.getElementById('sorteo').disabled=false;
    listArray.innerHTML= "";
}