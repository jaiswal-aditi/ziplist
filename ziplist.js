function zipList(listA, listB) {
  const c = [];
  for (let i = 0; i < listA.length; i++) {
    c.push(listA[i], listB[i]);
  }
  return c;
}

function zipListTheSimpleWay(listA, listB) {
  return _.flatten(_.zip(listA, listB));
}

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];
console.log(zipList(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));
