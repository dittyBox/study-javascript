
function draggable(obj,title){
  let draggableItem = document.createElement('div');
  draggableItem.classList.add('draggable');
  draggableItem.innerText = `${title}`;
  draggableItem.setAttribute('id',`${title}`);
  draggableItem.setAttribute('draggable','true');
  draggableItem.setAttribute('ondragstart','onDragStart(event);');

  obj.appendChild(draggableItem);
}

function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);

  event
    .currentTarget
    .style
    .backgroundColor = 'yellow';
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  
  let copyItemLength = document.querySelectorAll('copyDiv');
  
  let nodeCopy = draggableElement.cloneNode(true);
  nodeCopy.id = "newId" + copyItemLength.length;
  nodeCopy.classList.add('copyDiv');
  dropzone.appendChild(nodeCopy);
  
  event
    .dataTransfer
    .clearData();
}


let rootDiv = document.getElementById("root");
rootDiv.classList.add('root-parent');

let origin = document.createElement('div');
origin.classList.add('origin');

let dropZone = document.createElement('div');
dropZone.classList.add('dropzone');
dropZone.setAttribute('ondragover','onDragOver(event);');
dropZone.setAttribute('ondrop','onDrop(event);');

draggable(rootDiv,'item1');
draggable(rootDiv,'item2');
draggable(rootDiv,'item3');

dropZone.innerText = 'DropZone';

rootDiv.appendChild(origin);
rootDiv.appendChild(dropZone);

