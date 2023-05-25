const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small></small>
</div>

<div class="key">
  ${event.keyCode}
  <small></small>
</div>

<div class="key">
  ${event.code}
  <small></small>
</div>
  `
})