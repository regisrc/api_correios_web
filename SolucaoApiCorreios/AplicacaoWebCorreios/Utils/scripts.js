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
            nVlDiametro : 0,
            sCdMaoPropria : "n",
            nVlValorDeclarado : 0,
            sCdAvisoRecebimento : "n"
        }
        $.post("http://usysweb.com.br/api/correiosambev.php?giomar=true", obj, function (data) {
            //alert("Data: " + data);
            var objJson = JSON.parse(data);

            if (objJson.cServico.Erro != "0") {
                alert("Erro " + objJson.cServico.Erro + "\r\nMensagem " + objJson.cServico.MsgErro);
                return;
            }
            passaValor("entregaSab=" + objJson.cServico.EntregaSabado, "prazoEntrega=" + objJson.cServico.PrazoEntrega, "entregaDomicilio=" + objJson.cServico.EntregaDomiciliar, "valor=" + objJson.cServico.Valor, "valorReceb=" + objJson.cServico.ValorAvisoRecebimento, "valorMao=" + objJson.cServico.ValorMaoPropria, "valorSemAdd=" + objJson.cServico.ValorSemAdicionais, "valorDec="+objJson.cServico.ValorValorDeclarado);
        });
    });
});


var passaValor = function (var1,var2,var3,var4,var5,var6,var7,var8) {
    var url = "resultados.html?" + var1 + "&" + var2 + "&" + var3 + "&" + var4 + "&" + var5 + "&" + var6 + "&" + var7 + "&" + var8;
    window.location = url;
}

