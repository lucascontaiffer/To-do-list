const input = document.querySelector('.inpt')
const button = document.querySelector('.inpt-btn')
const myListHtml = document.querySelector('.lista-lista')

let myListArray = [];

function actions(){
    if (input.value == '') {
        alert('insira alguma coisa!');
        return;
    }
    const valorDoInput = input.value
    const checarDuplicado = myListArray.some((elemento) => elemento.task === valorDoInput)
    if(checarDuplicado){ //se == true. ele ira dar o alert
        alert('item duplicado!')
    }else{ // se não for duplicado ou else == false. executara o código normalmente
        myListArray.push({
            task: valorDoInput,
            checking: false
        })   
        input.value = ''  
        newTask()
    }    
}

function newTask(){
    let novaLi = ''
    myListArray.forEach((item, position) =>{
        novaLi +=`
            <ul class="ul-lista ${item.checking && "done"}">
                <li><img class="checkbox" src="img/checkmark.jpg" alt="" onclick="checkedTask(${position})"></li>
                <li><h1 class="ul-lista-h1">${item.task}</h1></li>
                <li><img class="lixeira" src="img/lixeira.png" alt="lixo" onclick="deleteTask(${position})"></li> 
            </ul>
        `
    })
    myListHtml.innerHTML = novaLi
}

function checkedTask(position){
    myListArray[position].checking = !myListArray[position].checking
    newTask()
}

function deleteTask(position){
    myListArray.splice(position, 1)
    newTask()
}

button.addEventListener('click', actions)

