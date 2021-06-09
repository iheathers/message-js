const { hash } = window.location;

const form = document.querySelector('form');
const gotoBtn = document.querySelector('.goto');
const input = document.querySelector('#message-input');
const linkInput = document.querySelector('#link-input');
const decodedMsg = document.querySelector('.decoded-msg');
const formContainer = document.querySelector('.form-container');
const linkContainer = document.querySelector('.link-container');
const decodeContainer = document.querySelector('.decode-section');

if (hash) {
  decodeContainer.classList.remove('hide');
  decodedMsg.innerHTML = atob(hash.replace('#', ''));
  linkContainer.classList.add('hide');
  formContainer.classList.add('hide');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  formContainer.classList.add('hide');
  linkContainer.classList.remove('hide');

  const encryptedMsg = btoa(input.value);
  linkInput.value = `${window.location}#${encryptedMsg}`;
});

const copyLink = () => {
  linkInput.select();
  document.execCommand('copy');
};

const copyBtn = document.querySelector('.copy-btn');
copyBtn.addEventListener('click', copyLink);

// gotoBtn.addEventListener('click', () => {
//   document.location = linkInput.value;

//   if (hash) {
//     decodeContainer.classList.remove('hide');
//     decodedMsg.innerHTML = atob(hash.replace('#', ''));
//     linkContainer.classList.add('hide');
//   }
// });
