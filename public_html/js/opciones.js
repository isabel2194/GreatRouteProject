$(document).ready(function () {
    $("#borrar").click(reiniciarComponentes);
    $("#exportar").click(exportarRuta());
    $("#imprimir").click(function () {
        printMaps();
    });

});

/*
 * Print dat maps! \o/
 */
function printMaps() {
    var body = $('body');
    var mapContainer = $('#mapa');
    var mapContainerParent = mapContainer.parent();
    var printContainer = $('<div>');
    var logo = $("#cabecera").find("img");
    var info = $("#informacion");

    printContainer
            .addClass('print-container')
            .css('position', 'relative')
            .height(mapContainer.height())
            .append(logo)
            .append(info)
            .append(mapContainer)
            .prependTo(body);

    var content = body
            .children()
            .not('script')
            .not(printContainer)
            .detach();

    /*
     * Needed for those who use Bootstrap 3.x, because some of
     * its `@media print` styles ain't play nicely when printing.
     */
    var patchedStyle = $('<style>')
            .attr('media', 'print')
            .text('img { max-width: none !important; }' +
                    'a[href]:after { content: ""; }')
            .appendTo('head');

    window.print();

    body.prepend(content);
    mapContainerParent.prepend(mapContainer);
    $("#div_info").prepend(info);
    $("#cabecera").prepend(logo);

    printContainer.remove();
    patchedStyle.remove();
}
/**
 * Reiniciar mapa, borra las rutas, y los campos de origen y destino.
 */
function reiniciarComponentes() {
    $("#origin-input").val('');//elimina el origen de la ruta
    $("#destination-input").val('');//elimina el destino de la ruta
    $("#elevation_chart").html("");//Elimina el grafico de perfil
    directionsDisplay.setMap(null);//Elimina la ruta
    $("#distancia_value").html("0 Km");//Elimina el valor total de distancia
    polyline.setMap(null); //Elimina la line de perfil
}

function exportarRuta() {
    $.post("http://www.gpsvisualizer.com/convert_input?convert_format=gpx", function (response, status) {

    });
}

