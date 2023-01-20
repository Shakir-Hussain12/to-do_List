export default (temp) => {
  if (temp) {
    for (let i = 0; i < temp.length; i += 1) {
      temp[i].index = i + 1;
    }
    localStorage.setItem('listData', JSON.stringify(temp));
  }
};