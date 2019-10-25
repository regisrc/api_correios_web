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

        var obj = $("#form_principal").serializeArray();
        console.log(obj)
        for (let index = 0; index < obj.length; index++)
            if (obj[index].name == "sCepOrigem" || obj[index].name == "sCepDestino")
                obj[index].value = obj[index].value.replace("-", "")

        obj.push({
            name: "nCdEmpresa",
            value: ""
        }, {
            name: "sDsSenha",
            value: ""
        })

        $.post("http://usysweb.com.br/api/correiosambev.php?giomar=true", obj, function (data) {
            //alert("Data: " + data);
            var objJson = JSON.parse(data);
            
            if (objJson.cServico.Erro != "0") {
                alert("Erro " + objJson.cServico.Erro + "\r\nMensagem " + objJson.cServico.MsgErro);
                return;
            }

            var urlElements = `resultados.html?`;
            $.each(objJson.cServico, function (key, value) {
                urlElements += `${key}=${value}&`
            });
            console.log(urlElements)
            window.location = urlElements;
        });
    });
});