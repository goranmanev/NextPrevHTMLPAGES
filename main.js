let h1 = document.getElementById('h1');
const h1value = parseInt(h1.innerHTML);
const extension = 'html';
const nextbutton = document.getElementById('nextbutton');
const previousbutton = document.getElementById('previousbutton');
console.log('Current HTML is: ' + h1value + '.' + extension);

nextbutton.addEventListener(`click`, Next);
previousbutton.addEventListener(`click`, Previous);

function Next(e) {
  e.preventDefault();
  if (h1value != 7) {
    window.location.href = h1value + 1 + '.' + extension;
  }
}
if (h1value === 7) {
  nextbutton.style.visibility = 'hidden';
}

function Previous(e) {
  e.preventDefault();
  if (h1value != 1) {
    window.location.href = h1value - 1 + '.' + extension;
  }
}
if (h1value === 1) {
  previousbutton.style.visibility = 'hidden';
}
