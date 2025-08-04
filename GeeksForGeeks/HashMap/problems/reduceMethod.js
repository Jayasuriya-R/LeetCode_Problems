const num = [1, 2, 4, 4,5,6]
const obj = num.reduce((acc,cur) => cur%2 == 0 ? {even:acc.even +1,odd:acc.odd}:{even:acc.even,odd:acc.odd+1} ,{even:0,odd:0})
console.log(obj); //{ even: 4, odd: 2 }


const arr = [1, -2, 3,  -1,  5];
const count = arr.reduce((acc,cur)=> cur > 0 ? {p:acc.p+1,n:acc.n}:{p:acc.p,n:acc.n+1} , {p:0,n:0})
console.log(count) //{ p: 3, n: 2 }

const str = "ReduceFunction";
const vow = str.toLowerCase().split("").reduce((acc,cur)=>  ['a','e','i','o','u'].includes(cur) ? {v:acc.v+1,c:acc.c}: {v:acc.v,c:acc.c+1},{v:0,c:0})
console.log(vow) // { v: 6, c: 8 }

const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const val = arr.reduce((acc,cur) => cur in acc? {...acc,[cur]:acc[cur]+1}:{...acc,[cur]: 1},{})
console.log(val)// { apple: 3, banana: 2, orange: 1 }

const employees = [
  { name: 'Alice', salary: 30000 },
  { name: 'Bob', salary: 40000 },
  { name: 'Charlie', salary: 25000 }
];
const sum = employees.reduce((acc,cur)=> cur.salary+acc ,0)
console.log(sum) //95000

const words = ['apple', 'banana', 'strawberry', 'kiwi'];
const length = words.reduce((acc,cur)=> cur.length > acc.length ? cur : acc ,'')
console.log(length) //'strawberry'
