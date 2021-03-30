let inputTask = $('#inputTask')
let btnAdd = $('#btnAdd')
let btnClear = $('#btnClear')
let btnReset = $('#btnReset')
let btnSort = $('#btnSort')
let ulTask = $('#ulTask')


inputTask.on('input',()=>{
    if(inputTask.val()!=''){
        toggleButtons(true)
    }
    else toggleButtons(false)
})
btnAdd.click(()=>{
    onClicking()
    toggleButtons(false)
})
inputTask.keypress((e) => {
    if (e.which == 13) {
        onClicking()
    }
})
btnClear.click(() => {
    inputTask.val("")
    toggleButtons(false)
})
btnReset.click(onReset)
btnSort.click(() => {
    $('#ulTask .done').appendTo(ulTask)
})
function toggleButtons(value){
    if(value){
        $('#btnAdd').prop('disabled',false)
        $('#btnClear').prop('disabled',false)
    }
    else{
        $('#btnAdd').prop('disabled',true)
        $('#btnClear').prop('disabled',true) 
    }
}
function onReset() {
    $('#ulTask .done').remove()
}
function onClicking() {
    let taskItem = $('<li>', {
        'class': 'list-group-item',
        text: inputTask.val()
    })
    taskItem.click(() => {
        taskItem.toggleClass('done')
    })
    if(inputTask.val()!="") ulTask.append(taskItem)
    inputTask.val("")
}
