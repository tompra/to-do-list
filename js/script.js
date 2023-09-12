// Features of the to-do-list

// 1. The user can add a new item to a list of items

// 2. The user can cross out an item form the list of items

// 3. The user can delete an item from the list of items

// 4. The user can change the order of items in the list of items

/////////////////////////////////////////////////////////////////////////

// Logic steps
// 1. Add event listener to the add button
// 2. When clicking this should add a item to the ordered list
// 3. Every item added must have an X, to delete the item
// 4. When clicking twice, the item must have a crossing style, like it was done
// 5. The user can drag the item and change the position of it.

/////////////////////////////////////////////////////////////////////////

//1. Adding event listener to the add buton
$('#addBtn').on("click", () => {
    // 3. Get the value from the input field
    const inputField = $('#input').val()
    // 2. By clicking we add a item to the order list
    const toDo = $(`<li> ${inputField} </li>`)
    $('#list').append($(toDo))
    
    // 4. Every added item should have an 'X'
    const makeAnX = $(`<button>X</button>`)
    $(toDo).append(makeAnX) 

    // 5. Make it disappear 
    makeAnX.on('click', deleteItem)

    function deleteItem(){
        $(toDo).remove()
    }

    // 6. Clicking twice should add class strike
    $(toDo).on('dblclick', () =>{
        $(toDo).toggleClass('strike')
    })

    // 7. Drag and move the item selected
    $('#list').sortable()

})
