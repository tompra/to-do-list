$('#addBtn').on('click', e => {
    e.preventDefault();
    const inputField = $('#input').val();

    const toDo = $(`<li> ${inputField} </li>`);

    inputField === ''
        ? alert('You must enter some value!')
        : $('#list').append($(toDo));

    const makeAnX = $(`<button>X</button>`);
    $(toDo).append(makeAnX);

    makeAnX.on('click', deleteItem);
    function deleteItem() {
        $(toDo).remove();
    }

    $(toDo).on('dblclick', () => {
        $(toDo).toggleClass('strike');
    });

    $('#list').sortable();
});
