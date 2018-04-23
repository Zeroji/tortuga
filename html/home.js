$('nav#links li').on('click', function (event) {
    hash = $(event.target).attr('for')
    target = $('section#' + hash)
    target.siblings().removeClass('shown')
    target.toggleClass('shown')
})
