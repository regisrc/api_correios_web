$(document).ready(function () {
    $('#buttonEnviar').click(function () {

        var obj = {
            nCdEmpresa : "",
            sDsSenha : "",
            nCdServico : $('#nCdServico').val(),
            sCepOrigem : $('#sCepOrigem').val(),
            sCepDestino : $('#sCepDestino').val(),
            nVlPeso : $('#nVlPeso').val(),
            nCdFormato : 1,
            nVlComprimento : $('#nVlComprimento').val(),
            nVlAltura : $('#nVlAltura').val(),
            nVlLargura : $('#nVlLargura').val(),
            nVlDiametro : $('#nVlDiametro').val(),
            sCdMaoPropria : "n",
            nVlValorDeclarado : 0,
            sCdAvisoRecebimento : "n"
        }
        $.post("http://usysweb.com.br/api/correiosambev.php?giomar=true", obj, function (data) {
            alert("Data: " + data);
        });
    });
});



