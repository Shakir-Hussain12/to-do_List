export default (check, list) => {
  check.forEach((inp) => {
    const par = inp.parentElement;
    const iElem = Number(par.querySelector('.no').innerText);
    inp.addEventListener('click', () => {
      list.forEach((item) => {
        if (item.description === par.innerText && item.index === iElem) {
          par.classList.toggle('complete');
          item.completed = !item.completed;
          localStorage.setItem('listData', JSON.stringify(list));
        }
      });
    });
  });
};