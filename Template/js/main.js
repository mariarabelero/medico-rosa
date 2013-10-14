$(document).ready(function() {

    // FADE OVER ELEMENTS ------------- */
    $('body').hide().delay(400).fadeIn(1000);

    // SHINING BUTTONS ------------- */
    $('.btn').prepend('<div class="light"></div>').addClass("inner");

    // offcanvas ------------- */
    $('[data-toggle=offcanvas]').click(function() {
        $('.row-offcanvas').toggleClass('active');
    });

    // tabs ------------- */
    $(function() {
        $('#myTab a:last').tab('show')
    });

    //DAtepicker
    $(function() {
        $("#datepicker").datepicker($.datepicker.regional[ "es" ]);
        $("#locale").change(function() {
            $("#datepicker").datepicker("option",
                    $.datepicker.regional[ $(this).val() ]);
        });
    });

    $(function() {
        $("#datepicker").datepicker();
    });

});
