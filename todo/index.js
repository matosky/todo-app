const todo = document.getElementById('todo')
const btn = document.getElementById('btn')

const todolist = document.getElementById('todo-list')

const success = document.getElementById('success')
const trash = document.getElementById('trash')



btn.addEventListener('click', add)


function add(e){
    if(todo.value.trim() === ''){
        e.preventDefault();
    } else {
        let li = document.createElement('li')
        let p = document.createElement('p')
            p.textContent = todo.value

        let div = document.createElement('div')
            div.textContent = 'X'
            div.style.fontSize = '24px'
            div.style.padding = '0 10px'
            div.style.background = 'red'
            div.style.color = '#fff'
            div.style.cursor = 'pointer'
        


       div.addEventListener('click', del)
       
       function del(e){
           e.target.parentNode.style.display = 'none'
       }

       li.appendChild(p)
       li.appendChild(div)  

       li.style.display = 'flex'
       li.style.justifyContent = 'space-between';

    //   li.textContent = todo.value;
       
       todolist.appendChild(li)



    }

}

const settings = document.querySelector('.settings')


const  color = document.querySelector('#theme-color')

settings.addEventListener('click', selectBackround)

function selectBackround(){
      const themes = document.querySelector('#themes')

    if(themes.style.display === 'none'){
        themes.style.display = 'block';
        color.style.display = 'flex'
        // color.style.flex-direction = 'column'

    } else{
        themes.style.display = 'none'
    }

    if(e.target === themes){
        e.preventDefault();
    }
}