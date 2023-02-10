$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa=$('#tarefa').val()
        const novoItem=$(`<li><div class="">${novaTarefa}</div></li>`)
        $(`${novaTarefa}`).appendTo(novoItem)
        $(novoItem).appendTo('ul');
        $('#tarefa').val('');
    })

    $('ul').on('click','li',function(){
        $(this).addClass('atividade-realizada');
    })

})
