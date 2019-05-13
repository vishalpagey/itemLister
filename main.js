var form= document.getElementById('addForm');
var itemList = document.getElementById('items');

var filter = document.getElementById('filter');



// form submit event

form.addEventListener('submit',addItem);

//Delete event
itemList.addEventListener('click',removeItem);

filter.addEventListener('keyup',filterItems);




//add item

function addItem(e){
    e.preventDefault();

   // get input value

   var newItem = document.getElementById('item').value;
   //create new Li element

   var li = document.createElement('li');
   // add class
   li.className = 'list-group-item';
   
   li.appendChild(document.createTextNode(newItem));
    

//create del button element 
    var deleteButton = document.createElement('button');
    //add classes to delete button

    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    deleteButton.appendChild(document.createTextNode('X'));
    // append button to li
    li.appendChild(deleteButton);

   itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        
            var li =e.target.parentElement;
            itemList.removeChild(li); 
        
    }
}

function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display = 'block';

        }else{
            item.style.display = 'none';
        }
    })

}