import {documentReady} from 'https://unpkg.com/html-ready';

documentReady.then(() => {
  const formatInput  = document.querySelector('#format-input');
  const formatOutput = document.querySelector('#format-output');
  const formatError = document.querySelector('#format-error');

  formatInput.addEventListener('input', () => {
    try {
      formatOutput.value = JSON.stringify(JSON.parse(formatInput.value), null, 2);
      formatError.textContent = '';
    } catch (error) {
      formatError.textContent = error.message;
    }
  });

  const minifyInput  = document.querySelector('#minify-input');
  const minifyOutput = document.querySelector('#minify-output');
  const minifyError = document.querySelector('#minify-error');

  minifyInput.addEventListener('input', () => {
    try {
      minifyOutput.value = JSON.stringify(JSON.parse(minifyInput.value));
      minifyError.textContent = '';
    } catch (error) {
      minifyError.textContent = error.message;
    }
  });
});
