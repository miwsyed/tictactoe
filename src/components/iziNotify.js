import 'izitoast/dist/css/iziToast.min.css';
const iziToast = require('izitoast');

export const notify = () => iziToast.success({
  message: 'Players Added Successfully! ',
  position: 'topRight'

});

export const notify2 = () => iziToast.error({
  title: 'Error',
  message: 'Player names should be unique.',
  position: 'topRight'

});
