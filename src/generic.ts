function identity<T, U = number>(val: T[]): U[] {
    return val as any
}

const test1 = identity<string>(['ana', 'ben'])

type CalcFunction<T> = (first: T, second: T) => T

const add: CalcFunction<number> = (a: number, b: number): number => {
    return a + b
}

const concatStr: CalcFunction<string> = (a: string, b: string): string => {
    return a + b
}

type User = {
    name: string
    age: number
    email: string
}

type UpdateFunction<T> = (obj: T, updateObj: Partial<T>) => T

const user: User = {
    name: 'ana',
    age: 30,
    email: 'ana@gmail.com'
}

function updateObject<T>(obj: T, updateObj: Partial<T>) {
    return {
        ...obj,
        ...updateObj
    }
}

const updateUser: UpdateFunction<User> = updateObject

type Article = {
    title: string
}

const updateArticle: UpdateFunction<Article> = updateObject

const userModified = updateUser(user, {
    age: 34
})

console.log(userModified)

/// ---

interface Reponse<T = string> {
    status: number
    message: T
}

const reponse1: Reponse = {
    status: 200,
    message: 'OK'
}

const reponse2: Reponse<{ data: string }> = {
    status: 200,
    message: { data: 'Données' }
}

// 

class Pile<T> {
    private elements: T[] = []

    push<U>(element: T, options: U) {
        this.elements.push(element)
    }

    pop(): T | undefined {
        return this.elements.pop()
    }
}

const pile = new Pile<number>()
pile.push(12, 'grgr')