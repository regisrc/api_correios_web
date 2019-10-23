$(document).ready(function () {


    switch (queryString("entregaDomicilio")) {

    case "S":
        $('#entregaDomicilio').val("Tem entrega a domicilio");
        break;
    case "N":
        $('#entregaDomicilio').val("Nao tem entrega a domicilio");
        break;
    }
    switch (queryString("entregaSab")) {

    case "S":
        $('#entregaSab').val("Entrega sabado!");
        break;
    case "N":
        $('#entregaSab').val("Nao entrega sabado");
        break;
    }

    $('#prazoEntrega').val(queryString("prazoEntrega"));
    $('#valor').val(queryString("valor"));
    $('#valorReceb').val(queryString("valorReceb"));
    $('#valorMao').val(queryString("valorMao"));
    $('#valorSemAdd').val(queryString("valorSemAdd"));
    $('#valorDec').val(queryString("valorDec"));

});

function queryString(parameter) {
    var loc = location.search.substring(1, location.search.length);
    var param_value = false;
    var params = loc.split("&");
    for (i = 0; i < params.length; i++) {
        param_name = params[i].substring(0, params[i].indexOf('='));
        if (param_name == parameter) {
            param_value = params[i].substring(params[i].indexOf('=') + 1)
        }
    }
    if (param_value) {
        return param_value;
    }
    else {
        return undefined;
    }
}