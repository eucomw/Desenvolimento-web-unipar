console.log("executa direto")

function adicionarTarefa(){
   let valorDigitado = document.querySelector("input").value

   let li = document.createElement("li")
   li.innerHTML = valorDigitado + '<span onclick="deletarTarefa(this)">❌</span'

   document.querySelector("ul").appendChild(li)

   document.querySelector("input").value = ' '

   console.log(li)
}
function deletarTarefa(li){
    li.parentElement.remove()
}

 document.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        const button = document.querySelector("button")
        button.click();
    }
 });

