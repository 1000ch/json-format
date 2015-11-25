const formatJSON = string => JSON.stringify(JSON.parse(string), null, 2);

window.onload = e => {

  const input  = document.querySelector('#format-input');
  const output = document.querySelector('#format-output');

  input.addEventListener('input', e => output.value = formatJSON(input.value));

};

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('service-worker.js', {
    scope: '/json-format/'
  }).catch(error => console.error(error));
}
