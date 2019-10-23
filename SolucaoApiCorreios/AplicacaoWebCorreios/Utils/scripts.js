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
            alert("Data: " + data);
            var objJson = JSON.parse(data);

            if (objJson.cServico.Erro != "0") {
                alert("Erro " + objJson.cServico.Erro + "\r\nMensagem " + objJson.cServico.MsgErro);
                return;
            }

            $('#codigo').val(objJson.cServico.Codigo)

            switch (objJson.cServico.EntregaDomiciliar) {

                case "S":
                    $('#entregaDomi').val("Tem entrega domiciliar");
                    break;
                case "N":
                    $('#entregaDomi').val("Nao tem entrega domiciliar");
                    break;
            }
            switch (objJson.cServico.EntregaSabado) {

                case "S":
                    $('#entregaSab').val("Entrega sabado!");
                    break;
                case "N":
                    $('#entregaSab').val("Nao entrega sabado");
                    break;
            }

           // $('#entregaDomi').val(objJson.cServico.EntregaDomiciliar);
           // $('#entregaSab').val(objJson.cServico.EntregaSabado);
           // $('#idErro').val(objJson.cServico.Erro);
           // $('#msgErro').val(objJson.cServico.MsgErro);
            $('#prazoEntrega').val(objJson.cServico.PrazoEntrega);
            $('#valor').val(objJson.cServico.Valor);
            $('#valorReceb').val(objJson.cServico.ValorAvisoRecebimento);
            $('#valorMao').val(objJson.cServico.ValorMaoPropria);
            $('#valorSemAdd').val(objJson.cServico.ValorSemAdicionais);
            $('#valorDec').val(objJson.cServico.ValorValorDeclarado);
        });
    });
});



