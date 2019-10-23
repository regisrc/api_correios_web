$(document).ready(function () {
    $('#buttonEnviar').click(function () {

        var url = "http://usysweb.com.br/api/correiosambev.php?" + `nCdEmpresa=&sDsSenha=&nCdServico=${$('#nCdServico').val()}&sCepOrigem=${$('#sCepOrigem').val()}&sCepDestino=${$('#sCepDestino').val()}&nVlPeso=${$('#nVlPeso').val()}&nCdFormato=1&nVlComprimento=${$('#nVlComprimento').val()}&nVlAltura=${$('#nVlAltura').val()}&nVlLargura=${$('#nVlLargura').val()}&nVlDiametro=${$('#nVlDiametro').val()}&sCdMaoPropria=s&nVlValorDeclarado=20&sCdAvisoRecebimento=n`;
        $.get((url), function (data) {
            alert("Data: " + data);
        });
    });
});



