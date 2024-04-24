import { Map, List } from 'immutable';

export function concatElements(page1, page2) {
  const pageList1 = List(page1);
  const pageList2 = List(page2);

  return pageList1.concat(pageList2);
}

// console.log(concatElements([1, 2, 3, 4, 5, 6, 6, 6], [9, 9, 9, 9]));

export function mergeElements(page1, page2) {
  const pageMap1 = Map(page1);
  const pageMap2 = Map(page2);

  return pageMap1.merge(pageMap2);
}

// console.log(
//   mergeElements(
//     {
//       1: 'simo',
//       2: 'moha',
//     },
//     {
//       3: 'youssef',
//       4: 'ayoub',
//     }
//   ).toJS()
// );
