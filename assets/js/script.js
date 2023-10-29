//sticky navigation bar
$(document).on('scroll', function(){
    if ($(document).scrollTop() > 80) {
        $('.navbar').addClass('nav-shrink');
    }
    else {
        $('.navbar').removeClass('nav-shrink')
    }
})