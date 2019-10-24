$(document).ready(function () {
    (function () {
        'use strict';
        window.addEventListener('load', function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();

    $('#sCepOrigem').mask("99999-999");
    $('#sCepOrigem').blur(function () {
        if ($('#sCepOrigem').val().length != 9) {
            $('#sCepOrigem').addClass('is-invalid');
            $('#sCepOrigem').removeClass('is-valid');
        } else {
            $('#sCepOrigem').addClass('is-valid');
            $('#sCepOrigem').removeClass('is-invalid');
        }
    });

    $('#sCepDestino').mask("99999-999");
    $('#sCepDestino').blur(function () {
        if ($('#sCepDestino').val().length != 9) {
            $('#sCepDestino').addClass('is-invalid');
            $('#sCepDestino').removeClass('is-valid');
        } else {
            $('#sCepDestino').addClass('is-valid');
            $('#sCepDestino').removeClass('is-invalid');
        }
    });

    $('#nVlDiametro').blur(function () {
        if ($('#nVlDiametro').val() == "") {
            $('#nVlDiametro').addClass('is-invalid');
            $('#nVlDiametro').removeClass('is-valid');
        } else {
            $('#nVlDiametro').addClass('is-valid');
            $('#nVlDiametro').removeClass('is-invalid');
        }
    });
    $('#nVlAltura').blur(function () {
        if ($('#nVlAltura').val() == "") {
            $('#nVlAltura').addClass('is-invalid');
            $('#nVlAltura').removeClass('is-valid');
        } else {
            $('#nVlAltura').addClass('is-valid');
            $('#nVlAltura').removeClass('is-invalid');
        }
    });
    $('#nVlLargura').blur(function () {
        if ($('#nVlLargura').val() == "") {
            $('#nVlLargura').addClass('is-invalid');
            $('#nVlLargura').removeClass('is-valid');
        } else {
            $('#nVlLargura').addClass('is-valid');
            $('#nVlLargura').removeClass('is-invalid');
        }
    });
    $('#nVlComprimento').blur(function () {
        if ($('#nVlComprimento').val() == "") {
            $('#nVlComprimento').addClass('is-invalid');
            $('#nVlComprimento').removeClass('is-valid');
        } else {
            $('#nVlComprimento').addClass('is-valid');
            $('#nVlComprimento').removeClass('is-invalid');
        }
    });
    $('#nVlPeso').blur(function () {
        if ($('#nVlPeso').val() == "") {
            $('#nVlPeso').addClass('is-invalid');
            $('#nVlPeso').removeClass('is-valid');
        } else {
            $('#nVlPeso').addClass('is-valid');
            $('#nVlPeso').removeClass('is-invalid');
        }
    });

    $('#nVlValorDeclarado').blur(function () {
        if ($('#nVlValorDeclarado').val() == "") {
            $('#nVlValorDeclarado').addClass('is-invalid');
            $('#nVlValorDeclarado').removeClass('is-valid');
        } else {
            $('#nVlValorDeclarado').addClass('is-valid');
            $('#nVlValorDeclarado').removeClass('is-invalid');
        }
    });

    $('#nCdFormato').change(function () {
        switch ($('#nCdFormato').val()) {
            case "1":
                $('#nCdFormato').addClass('is-valid');
                $('#nCdFormato').removeClass('is-invalid');
                $('#nVlAltura').removeAttr('disabled');
                $('#nVlAltura').addClass('is-invalid');
                $('#nVlAltura').removeClass('is-valid');
                $('#nVlLargura').removeAttr('disabled');
                $('#nVlLargura').addClass('is-invalid');
                $('#nVlLargura').removeClass('is-valid');
                $('#nVlDiametro').attr('disabled', 'disabled');
                $('#nVlDiametro').val("0");
                $('#nVlDiametro').addClass('is-valid');
                $('#nVlDiametro').removeClass('is-invalid');
                break;

            case "2":
                $('#nCdFormato').addClass('is-valid');
                $('#nCdFormato').removeClass('is-invalid');
                $('#nVlDiametro').removeAttr('disabled');
                $('#nVlDiametro').addClass('is-invalid');
                $('#nVlDiametro').removeClass('is-valid');
                $('#nVlAltura').attr('disabled', 'disabled');
                $('#nVlAltura').val("0");
                $('#nVlAltura').addClass('is-valid');
                $('#nVlAltura').removeClass('is-invalid');
                $('#nVlLargura').attr('disabled', 'disabled');
                $('#nVlLargura').val("0");
                $('#nVlLargura').addClass('is-valid');
                $('#nVlLargura').removeClass('is-invalid');
                break;

            case "3":
                $('#nCdFormato').addClass('is-valid');
                $('#nCdFormato').removeClass('is-invalid');
                $('#nVlAltura').attr('disabled', 'disabled');
                $('#nVlAltura').val("0");
                $('#nVlAltura').addClass('is-valid');
                $('#nVlAltura').removeClass('is-invalid');
                $('#nVlDiametro').attr('disabled', 'disabled');
                $('#nVlDiametro').val("0");
                $('#nVlDiametro').addClass('is-valid');
                $('#nVlDiametro').removeClass('is-invalid');
                $('#nVlLargura').removeAttr('disabled');
                $('#nVlLargura').addClass('is-invalid');
                $('#nVlLargura').removeClass('is-valid');
                break;

            default:
                $('#nCdFormato').addClass('is-invalid');
                $('#nCdFormato').removeClass('is-valid');
                break;
        }
    });

    $('#nCdServico').change(function () {
        if ($('#nCdServico').val() === "nulo") {
            $('#nCdServico').addClass('is-invalid');
            $('#nCdServico').removeClass('is-valid');
        } else {
            $('#nCdServico').addClass('is-valid');
            $('#nCdServico').removeClass('is-invalid');
        }
    });

    $('input[name="maoPropria"]').change(function () {
        if ($('input[name="maoPropria"]').val() != 0) {
            $('#sCdMaoPropria1').addClass('is-valid');
            $('#sCdMaoPropria1').removeClass('is-invalid');
            $('#sCdMaoPropria2').addClass('is-valid');
            $('#sCdMaoPropria2').removeClass('is-invalid');
        }
    });
    $('input[name="avisoReceb"]').change(function () {
        if ($('input[name="avisoReceb"]').val() != 0) {
            $('#sCdAvisoRecebimento1').addClass('is-valid');
            $('#sCdAvisoRecebimento1').removeClass('is-invalid');
            $('#sCdAvisoRecebimento2').addClass('is-valid');
            $('#sCdAvisoRecebimento2').removeClass('is-invalid');
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

