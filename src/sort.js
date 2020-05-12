// returns array of index order 
function sortAplhDec(data) {
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