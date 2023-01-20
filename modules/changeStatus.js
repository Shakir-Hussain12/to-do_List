export default (check, list) => {
  check.forEach((inp) => {
    const par = inp.parentElement;
    inp.addEventListener('click', () => {
      list.forEach((item) => {
        if (item.description === par.innerText) {
          par.classList.toggle('complete');
          item.completed = !item.completed;
          localStorage.setItem('listData', JSON.stringify(list));
        }
      });
    });
  });
};