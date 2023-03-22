 // 取数组交集，并集，差集
var a1 = [1,2,3,4,5,6,4,5,6];
var a2 = [4,5,6,7,8,9,7,8,9];

//交集
const combintArr = [...a1, ...a2]

console.log(combintArr.filter((item, index) => combintArr.indexOf(item) === index));

//并集

console.log([...new Set(a1.filter(item => a2.includes(item)))]);

//差集

// a1 have  a2 not
console.log([...new Set(a1.filter(item => !a2.includes(item)))]);

const newArr = a1.filter(item => !a2.includes(item))
console.log('miliya--->', newArr.reduce((total, cur)=> newArr.indexOf(cur) === cur.index ? total: total.concat(cur), []));
// a2 have  a1 not
console.log([...new Set(a2.filter(item => !a1.includes(item)))])
