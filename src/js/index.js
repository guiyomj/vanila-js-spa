

document.querySelector('#pushState').addEventListener('click', function () {
    history.pushState({ data: 'pushpush' }, 'title을 pushState로', '/pushpush')
})

document.querySelector('#replaceState').addEventListener('click', function () {
  history.replaceState({ data: 'replace' }, 'title을 replaceState로', '/replace');
})

window.addEventListener('popstate', function () {
  console.log('popstate', history.state);
  document.querySelector('#state').innerHTML = JSON.stringify(history.state);
})