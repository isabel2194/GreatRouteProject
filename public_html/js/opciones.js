$(document).ready(function () {
    $("#borrar").click(reiniciarComponentes);
    $("#exportar").click(exportarRuta());
    
});


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

function exportarRuta(){
    $.post()
}

