$(document).ready(function() {
    var toggle = $("#toggle");
    var additionalMenuItems = $("#additionalMenuItems");

    toggle.on("click", function() {
        console.log("Clic sur le menu burger");
        additionalMenuItems.slideToggle();
    });
});