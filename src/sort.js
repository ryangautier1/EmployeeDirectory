// takes in array of items to sort, returns array of index order 
function sortAlphDec(data) {
  let lettersUnsorted= [];
  let lettersSorted= [];
  data.forEach(item => {
    lettersUnsorted.push(item.split("")[0]);
    lettersSorted.push(item.split("")[0]);
  })
  lettersSorted.sort();
  let order=[];
  lettersSorted.forEach(letter => {
    order.push(lettersUnsorted.indexOf(letter));
  })
  return order;
}

function sortAlphInc(data) {
  let order = sortAlphDec(data);
  return order.reverse();
}

function sortNumDec(data) {
  let numsUnsorted= data;
  let numsSorted= data;
  numsSorted.sort();
  let order=[];
  numsSorted.forEach(num => {
    order.push(numsUnsorted.indexOf(num));
  })
  return order;
}

function sortNumInc(data) {
  let order = sortNumDec(data);
  return order.reverse();
}

const sortItems = {
  sortAlphDec,
  sortAlphInc,
  sortNumDec,
  sortNumInc
}

export default sortItems;