$(document).ready(function () {

    $('#sCepOrigem').mask("99999-999");
    $('#sCepDestino').mask("99999-999");
    $('#nCdFormato').change(function () {
        switch ($('#nCdFormato').val()) {
            case "1":
                $('#nVlAltura').removeAttr('disabled');
                $('#nVlLargura').removeAttr('disabled');
                $('#nVlDiametro').attr('disabled', 'disabled');
                $('#nVlDiametro').val("0");
                break;

            case "2":
                $('#nVlDiametro').removeAttr('disabled');
                $('#nVlAltura').attr('disabled', 'disabled');
                $('#nVlAltura').val("0");
                $('#nVlLargura').attr('disabled', 'disabled');
                $('#nVlLargura').val("0");
                break;

            case "3":
                $('#nVlAltura').attr('disabled', 'disabled');
                $('#nVlAltura').val("0");
                $('#nVlDiametro').attr('disabled', 'disabled');
                $('#nVlDiametro').val("0");
                $('#nVlLargura').removeAttr('disabled');
                break;
        }
    });
    $('#buttonEnviar').click(function () {

        var obj = {
            nCdEmpresa : "",
            sDsSenha : "",
            nCdServico: $('#nCdServico').val(),
            sCepOrigem: $('#sCepOrigem').val().replace("-",""),
            sCepDestino: $('#sCepDestino').val().replace("-", ""),
            nVlPeso : $('#nVlPeso').val(),
            nCdFormato: $('#nCdFormato').val(),
            nVlComprimento : $('#nVlComprimento').val(),
            nVlAltura : $('#nVlAltura').val(),
            nVlLargura : $('#nVlLargura').val(),
            nVlDiametro: $('#nVlDiametro').val(),
            sCdMaoPropria: $('input[name="maoPropria"]:checked').val(),
            nVlValorDeclarado: $('#nVlValorDeclarado').val(),
            sCdAvisoRecebimento: $('input[name="avisoReceb"]:checked').val()
        }
        $.post("http://usysweb.com.br/api/correiosambev.php?giomar=true", obj, function (data) {
            //alert("Data: " + data);
            var objJson = JSON.parse(data);

            if (objJson.cServico.Erro != "0") {
                alert("Erro " + objJson.cServico.Erro + "\r\nMensagem " + objJson.cServico.MsgErro);
                return;
            }
            passaValor("entregaSab=" + objJson.cServico.EntregaSabado, "prazoEntrega=" + objJson.cServico.PrazoEntrega, "entregaDomicilio=" + objJson.cServico.EntregaDomiciliar, "valor=" + objJson.cServico.Valor, "valorReceb=" + objJson.cServico.ValorAvisoRecebimento, "valorMao=" + objJson.cServico.ValorMaoPropria, "valorSemAdd=" + objJson.cServico.ValorSemAdicionais, "valorDec=" + objJson.cServico.ValorValorDeclarado, "codServico=" + objJson.cServico.Codigo);
        });
    });
});


var passaValor = function (var1,var2,var3,var4,var5,var6,var7,var8,var9) {
    var url = "resultados.html?" + var1 + "&" + var2 + "&" + var3 + "&" + var4 + "&" + var5 + "&" + var6 + "&" + var7 + "&" + var8 + "&" + var9;
    window.location = url;
}

