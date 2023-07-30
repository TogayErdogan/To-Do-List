var input = document.getElementById('input');
var addButton = document.getElementById('addButton');
var list = document.getElementById('taskList');
var clearAll = document.getElementById('clearAll')



window.onload = function() {
  input.select();
};


addButton.addEventListener('click', addTask);
input.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });


function addTask() {

    var inputValue = input.value;
            
    if(!inputValue == ""){
                
        var newListItem = document.createElement('li');
        newListItem.className = 'list-group-item';
        newListItem.innerHTML = `<i class="far fa-square"></i> ${inputValue} <i class="fas fa-trash"></i>`;
                
        list.appendChild(newListItem);
        input.value = "";
        input.select();

        }


}


list.addEventListener('click', (event) => {
    const clickedElement = event.target;

    if (clickedElement.classList.contains('fa-square')) {
        clickedElement.classList.remove('fa-square');
        clickedElement.classList.add('fa-check-square');
        clickedElement.parentElement.classList.add('active');
    } else if (clickedElement.classList.contains('fa-check-square')) {
        clickedElement.classList.remove('fa-check-square');
        clickedElement.classList.add('fa-square');
        clickedElement.parentElement.classList.remove('active');
    }

    if (clickedElement.classList.contains('fa-check-square')) {
        clickedElement.parentElement.style.textDecoration = 'line-through';
     } else if (clickedElement.classList.contains('fa-square')) {
          clickedElement.parentElement.style.textDecoration = 'none';
     }


     if (clickedElement.classList.contains('fa-trash')) {
        clickedElement.parentElement.remove();
     }
})


clearAll.addEventListener('click', () => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
    input.select();
  }
})