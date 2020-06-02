
// Toggle navbar in mobile view

const $navbarBurgers = Array.prototype.slice.call(
  document.querySelectorAll('.navbar-burger'),
  0
)

if ($navbarBurgers.length > 0) {

  $navbarBurgers.forEach((el) => {
    el.addEventListener('click', () => {

      const target = el.dataset.target
      const $target = document.getElementById(target)

      el.classList.toggle('is-active')
      $target.classList.toggle('is-active')
    })
  })
}

// Remove flash/alert message 

if (document.querySelector('.delete')) {
  document.querySelector('.delete').addEventListener('click', () => {
    document.querySelector('.message').remove()
  })
}
