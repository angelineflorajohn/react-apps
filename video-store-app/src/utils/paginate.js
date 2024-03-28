import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
  //   _.slice(items, startIndex); // will slice the items starting at startIndex
  //   _.take(); // all the items that we need to take from the array
}
