interface User {
    username: string
    email: string
    age: number
    isActive?: boolean
}

const userList: User[] = [
    { username: 'ana', email: 'ana@gmail.com', age: 42, isActive: true },
    { username: 'ben', email: 'ben@gmail.com', age: 30, isActive: false },
    { username: 'jim', email: 'jim@gmail.com', age: 42 }
]

const displayUsers = (): void => {
    for (let user of userList) {
        const { username, email, age, isActive } = user
        console.log(`Username: ${username}, Email: ${email}, Age: ${age}, ${isActive ? 'active' : 'non active'}`)
    }
}

const findUserByUsername = (name: string): User | undefined => {
    return userList.find((user: User) => user.username == name)
}

const toggleUserActiveStatus = (name: string): void => {
    const user = findUserByUsername(name)
    user!.isActive = !user!.isActive
    /*if (user?.isActive !== undefined) {
        user.isActive = !user.isActive
    }
    else if (user) {
        user.isActive = true
    }*/
}

displayUsers()
console.log(findUserByUsername('jim'))
console.log(toggleUserActiveStatus('fffeef'))