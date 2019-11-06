// mobile navbar

function navCollapse() {
    const nav = document.getElementById('navbar');
    if (nav.className === 'nav') {
      nav.className += ' responsive';
    } else {
      nav.className = 'nav';
    }
}

$('a[href*="#"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    250,
    'linear'
  )
})