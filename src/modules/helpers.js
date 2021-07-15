const setDate = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  today = `${yyyy}-${mm}-${dd}`;
  return today;
};
// eslint-disable-next-line
const Flag = (task) => {
  if (task === '1') return '<i class="fa fa-flag text-danger"></i>';
  if (task === '2') return '<i class="fa fa-flag text-warning"></i>';
  if (task === '3') return '<i class="fa fa-flag text-info"></i>';
  if (task === '4') return '<i class="fa fa-flag text-success"></i>';
};

const Status = (value) => (value ? '<i class="fa fa-check  text-dark statusBTN"></i>' : '<i class="fa fa-spinner text-dark statusBTN"></i>');

const modalStatus = (value) => (value ? 'Finished' : 'Pending');
export {
  setDate, Flag, Status, modalStatus,
};