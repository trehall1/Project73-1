/*
const parentChildPairs = [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [9, 11]]
           
1   2    4   
 \ /   / | \ 
  3   5  8  9
   \ / \     \
    6   7     11

- the people who have zero parents: 1, 2, 4
- the people who have one parent only: 5, 7, 8, 9, 11
*/

// const parentChildPairs = [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [9, 11]]

// function parentAnalysis (list) {
//     const oneParentOnlyMap = {};
//     const zeroParentsArray = [];

//     const parents = parentChildPairs.map(([parent, child]) => parent);
//     const children = parentChildPairs.map([parent, child]) => child);
//     const zeroParentsArray = parents.filter(parent => children.every(child => child !== parent);

//     // loop through to count how many times a node is a child
//   list.forEach(pair => {
//       if (!oneParentOnlyMap[pair[1]]) {
//     oneParentOnlyMap[pair[1]] = 1;
//       } else {
//         oneParentOnlyMap[pair[1]] += 1;
//       }
//   });

//     for (const prop in oneParentOnlyMap) {
//         if (oneParentOnlyMap[prop] === 1) {
//             oneParentOnlyArray.push(prop)
//         }
//     }
//     console.log(oneParentOnlyArray);
//     console.log(zeroParentArray);
//     return { oneParentOnlyArray,zeroParentArray };
// }

// parentAnalysis(parentChildPairs);

const parentChildPairs1 = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [9, 11],
  [14, 4],
  [13, 12],
  [12, 9],
];

//          14  13
//          |   |
// 1   2    4   12
//  \ /   / | \ /
//   3   5  8  9
//    \ / \     \
//     6   7     11

// hasCommonAncestor(parentChildPairs1, 3, 8) => false
// hasCommonAncestor(parentChildPairs1, 5, 8) => true
// hasCommonAncestor(parentChildPairs1, 6, 8) => true
// hasCommonAncestor(parentChildPairs1, 6, 9) => true
// hasCommonAncestor(parentChildPairs1, 1, 3) => false
// hasCommonAncestor(parentChildPairs1, 3, 1) => false
// hasCommonAncestor(parentChildPairs1, 7, 11) => true
// hasCommonAncestor(parentChildPairs1, 6, 5) => true
// hasCommonAncestor(parentChildPairs1, 5, 6) => true

// Additional example: In this diagram, 4 and 12 have a common ancestor of 11.

//         11
//        /  \
//       10   12
//      /  \
// 1   2    5
//  \ /    / \
//   3    6   7
//    \        \
//     4        8

const parentChildPairs2 = [
  [11, 10],
  [11, 12],
  [2, 3],
  [10, 2],
  [10, 5],
  [1, 3],
  [3, 4],
  [5, 6],
  [5, 7],
  [7, 8],
];

// hasCommonAncestor(parentChildPairs2, 4, 12) => true
// hasCommonAncestor(parentChildPairs2, 1, 6) => false
// hasCommonAncestor(parentChildPairs2, 1, 12) => false

function hasCommonAncestor(list, node1, node2) {
  const ancestorMap = {};
  list.forEach(([parent, child]) => {
    if (!ancestorMap[child]) {
      ancestorMap[child] = [];
    }
    ancestorMap[child].push(parent);
  });


  if (!ancestorMap[node1] || !ancestorMap[node2]) {
    return false;
  }

  const allPosisbleNode1Ancestors = ancestorMap[node1];
  const allPosisbleNode2Ancestors = ancestorMap[node2];

  for (const ancestor of allPosisbleNode1Ancestors) {
    if (ancestorMap[ancestor]) {
      allPosisbleNode1Ancestors.push(...ancestorMap[ancestor]);
    }
  }

  for (const ancestor of allPosisbleNode2Ancestors) {
    if (ancestorMap[ancestor]) {
      allPosisbleNode2Ancestors.push(...ancestorMap[ancestor]);
    }
  }


  return allPosisbleNode1Ancestors.some((ancestor) =>
    allPosisbleNode2Ancestors.includes(ancestor)
  );
}

console.log(hasCommonAncestor(parentChildPairs1, 3, 8));
console.log(hasCommonAncestor(parentChildPairs1, 5, 8));
console.log(hasCommonAncestor(parentChildPairs1, 6, 8));
console.log(hasCommonAncestor(parentChildPairs1, 6, 9));
console.log(hasCommonAncestor(parentChildPairs1, 1, 3))
console.log(hasCommonAncestor(parentChildPairs1, 3, 1));
console.log(hasCommonAncestor(parentChildPairs1, 7, 11));
console.log(hasCommonAncestor(parentChildPairs1, 6, 5));
console.log(hasCommonAncestor(parentChildPairs1, 5, 6));

console.log(hasCommonAncestor(parentChildPairs2, 4, 12));
console.log(hasCommonAncestor(parentChildPairs2, 1, 6));
console.log(hasCommonAncestor(parentChildPairs2, 1, 12));

