// Html elements
const inputTask = document.querySelector('#inputTask');
const list= document.querySelector('ul');
const btn = document.querySelector('#submitTask')
const info = document.querySelector('small');
const completedInfo = document.querySelector('p');

// Variables
let completedCount = 0;

// Array with objects containing Todo items
const todoArray = [];

// Function
btn.addEventListener('click',function() {
  // Fetch input value
  const text = inputTask.value + ' ';

  // Add todo-object to todoArray
  todoArray.push(text);

  // Check that input is not empty
  if(text.length == 0){
    info.innerText = "Input can not be empty";
    return;
  }
  else{
    info.innerText = '';
  }

  // Create a new li-element in ul
  const item = document.createElement('li');
  list.appendChild(item);

  // span-element
  const itemLabel = document.createElement('span');
  itemLabel.innerText = text;
  item.appendChild(itemLabel);

  // Add listener to span and change completedCount
  itemLabel.addEventListener('click',function(){

    // Toggle completed/uncompleted task

    if (item.getAttribute('class') == 'completed'){
      item.setAttribute('class', '');
      completedCount--
    }

    else {
      item.setAttribute('class', 'completed');
      completedCount++
    }

    completedInfo.innerText = `${completedCount} completed`;

  })

  // Add trashcan icon to span element
  const trashcan = document.createElement('span');
  trashcan.setAttribute('class', 'trashcan');
  trashcan.setAttribute('class', 'fa-solid fa-trash-can-arrow-up fa-lg');
  item.appendChild(trashcan);

  // Add listener to span to delete item on click
  trashcan.addEventListener('click', function () {
    item.remove();
  });

  //Empty input field
  inputTask.value = '';
})