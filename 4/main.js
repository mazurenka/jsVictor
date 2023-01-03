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





