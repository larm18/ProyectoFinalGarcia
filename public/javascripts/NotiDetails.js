/**
 * Created by oscar on 14/07/16.
 */
$(document).ready(function () {
    refresh_state();
});

var refresh_state = function () {
    $.get('/notification/shownoti/'+ status)
        .done(function (data) {
            console.log(data);

            $("#notifications").html(function () {
                $("#notifications").empty();
            data.forEach(function (key) {
                $("#notifications").append("<a href='../../notification/getNoti/"+ key+ "'>"+ key + "</a>")

                if (status == 'Activas') {
                    $("#notifications").append("<a href='../../notification/change/" + status + "/Proceso/"+key+"'> Proceso</a>")
                    $("#notifications").append("<a href='../../notification/change/" + status + "/Concluidas/"+key+"'> Concluidas</a></br>")
                }
                if (status == 'Proceso') {
                    $("#notifications").append("<a href='../../notification/change/" + status + "/Activas/"+key+"'> Activas</a>")
                    $("#notifications").append("<a href='../../notification/change/" + status + "/Concluidas/"+key+"'> Concluidas</a></br>")
                }
                if (status == 'Concluidas') {
                    $("#notifications").append("<a href='../../notification/change/" + status + "/Activas/"+key+"'> Activas</a>")
                    $("#notifications").append("<a href='../../notification/change/" + status + "/Proceso/"+key+"'> Proceso</a></br>")
                }



            })

            });
        });
}