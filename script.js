$("#time").html(moment().format('h:mm:ss'));
setInterval(function() {
    $("#time").html(moment().format('h:mm:ss'));
}, 1000);


$(".card-img-top").on("click", function() {
    event.preventDefault()
    $("#ModalCenterTitle").text($(this).data("name"));
    $(".modal-image").attr("src", $(this).attr("src"));
    $('#portfolio-modal').modal("show")
});

