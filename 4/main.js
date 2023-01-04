const todoListId_1 = '12df-gh67'
const todoListId_2 = '12df-gh68'

const todoLists = [
    {
        id: todoListId_1, //'12df-gh67'
        title: 'What to learn',
    },
    {
        id: todoListId_2,
        title: 'What to buy',
    },
]

const getKey = () => 'name'

const tasks = {
    [todoListId_1]: [                  //'12df-gh67'
        {name: 'HTML', isDone: true},
        {name: 'CSS', isDone: false}
    ],
    [todoListId_2]: [                  //'12df-gh68'
        {name: 'Meat', isDone: false},
        {name: 'Fish', isDone: false}
    ],
    [10 + 30]: [], //40
    [getKey()]: [],  //'name'
    "user address": [],
}

console.log(tasks[todoListId_1])
console.log(tasks[todoListId_1][0])
console.log(tasks[todoListId_1][0].name)

console.log(tasks[todoListId_1].filter((t) => t.name !== 'HTML'))

console.log([...tasks[todoListId_1], {name: 'React', isDone: true}])
console.log(tasks[todoListId_1])
console.log([tasks["user address"]])

//reduce: [1, 2, 3, 4]

const nums = [1, 2, 3, 4]
/*console.log(nums.reduce((acc, el) => {
    return acc + el
}, 0))*/
console.log(nums.reduce((acc, el) => acc + el))

//1, 2 => 3
//3, 3 => 6
//6, 4 => 10
// => 10

//max-min => max
console.log(nums.reduce((acc, el) => acc > el ? acc : el))

let students = [
    {
        id: 1,
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        id: 2,
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89,
    },
    {
        id: 3,
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        id: 4,
        name: 'John',
        age: 26,
        isMarried: false,
        scores: 100,
    },
];

console.log(students.reduce((acc, el) => acc + el.scores, 0))
console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc : el))
console.log(students.reduce((acc, el) => { //filter
    if (el.scores >= 100) {
        acc.push(el)
    }
    return acc
}, []))

// from array to object

const newStudents = {
    '1': {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
    },
    '2': {
        id: 2,
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89,
    },
}

console.log(students.reduce((acc, el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {}))

const reduce = (array, func, startAcc) => {
    let acc = startAcc ? startAcc : array[0]
    for (let i = startAcc ? 0 : 1; i < array.length; i++) {
        acc = func(acc, array[i])
    }
    return acc
}

console.log(reduce(students, (acc, el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {}))









