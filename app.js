const formatJSON = string => JSON.stringify(JSON.parse(string), null, 2);
const minifyJSON = string => {
  try {
    return JSON.stringify(JSON.parse(string));
  } catch (e) {
    return string;
  }
};

window.onload = e => {

  const formatInput  = document.querySelector('#format-input');
  const formatOutput = document.querySelector('#format-output');
  const minifyInput  = document.querySelector('#minify-input');
  const minifyOutput = document.querySelector('#minify-output');

  formatInput.addEventListener('input', e => formatOutput.value = formatJSON(formatInput.value));
  minifyInput.addEventListener('input', e => minifyOutput.value = minifyJSON(minifyInput.value));

};

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('service-worker.js', {
    scope: '/json-format/'
  }).catch(error => console.error(error));
}
