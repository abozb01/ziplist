function zipList(list1, list2) {
  const result = [];
  let i; const
    l = Math.min(list1.length, list2.length);

  for (i = 0; i < l; i++) {
    result.push(list1[i], list2[i]);
  }
  result.push(...list1.slice(l), ...list2.slice(l));

  return result;
}
console.log(zipList([1, 2, 3, 4, 5], [6, 7, 8, 9]));


