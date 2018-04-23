$('nav#links li').on('click', function (event) {
    hash = $(event.target).attr('for')
    target = $('section#' + hash)
    target.siblings().removeClass('shown')
    target.toggleClass('shown')
})

$('input#event_hints').on('input', function (event) {
    $('input#event_hints_all, input#event_hints_full').attr('disabled', !event.target.checked)
})
