interface User2 {
    username: string
    email: string
    age: number
    isActive?: boolean,
    id: number
}

const userList2: User2[] = [
    { username: 'ana', email: 'ana@gmail.com', age: 42, isActive: true, id: 1 },
    { username: 'ben', email: 'ben@gmail.com', age: 30, isActive: false, id: 2 },
    { username: 'ana', email: 'jim@gmail.com', age: 42, id: 3 }
]

function findUser(name: string): User2 | undefined;
function findUser(id: number): User2 | undefined;
function findUser(name: string, age: number): User2[]
function findUser(nameOrId: string | number, age?: number): User2[] | User2 | undefined {
    if (age !== undefined) {
        return userList2.filter(user => user.username == nameOrId && user.age == age)
    }
    return userList2.find((user: User2) => {
        if (typeof nameOrId === 'string') {
            return user.username == nameOrId
        }
        else {
            return user.id == nameOrId
        }   
    })
}

console.log(findUser('ana', 42))