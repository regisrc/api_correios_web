$(document).ready(function () {

    switch (queryString("codServico")) {

        case "04014":
            $('#codServico').val("04014 SEDEX à vista");
            break;
        case "04065":
            $('#codServico').val("04065 SEDEX à vista pagamento na entrega");
            break;
        case "04510":
            $('#codServico').val("04510 PAC à vista");
            break;
        case "04707":
            $('#codServico').val("04707 PAC à vista pagamento na entrega");
            break;
        case "40169":
            $('#codServico').val("40169 SEDEX 12 (à vista e a faturar)*");
            break;
        case "40215":
            $('#codServico').val("40215 SEDEX 10 (à vista e a faturar)*");
            break;
        case "40290":
            $('#codServico').val("40290 SEDEX Hoje Varejo*");
            break;


    }

    switch (queryString("entregaDomicilio")) {

    case "S":
        $('#entregaDomicilio').val("Tem entrega a domicílio");
        break;
    case "N":
        $('#entregaDomicilio').val("Não tem entrega a domicílio");
        break;
    }
    switch (queryString("entregaSab")) {

    case "S":
        $('#entregaSab').val("Entrega sábado!");
        break;
    case "N":
        $('#entregaSab').val("Não entrega sábado");
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