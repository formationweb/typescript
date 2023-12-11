const age: number = 44
const nom: string = 'ana'
const isActive: boolean = true
const neant: null = null
let tel: string | null = '0620134580'

tel = null

let nimporte: any = 12
let inconnu: unknown = 'ben'

inconnu = 42

if (typeof inconnu == 'string') {
    inconnu.toLowerCase()
}

const userName: string[] = ['ana', 'ben', 'jim']
const values: (number | string)[] = ['ana', 42]
// const userName: Array<string> = ['ana', 'ben', 'jim']

const position: [number, number] = [0, 10]
// const x = position[0]
// const y = position[1]
const [x, y] = position

//console.log(x, y)

const user: {
    nom: string
    age: number
    adresse: {
        ville: string
    },
    email?: string
} = {
    nom: 'Alice',
    age: 25,
    adresse: {
        ville: 'Paris'
    },
    //email: 'fzfz@gamil.com'
}

const players: {
    [id: string]: {
        name: string
    }
} = {
    ehzefef: {
        name: 'test'
    },
    fejkfezz: {
        name: 'ana'
    }
}

const id = 'ehzefef'
players[id].name

const dict: {
    [wordId: string]: {
        fr: string
        en: string
    }
} = {
    REMOVE: {
        fr: 'Supprimer',
        en: 'Delete'
    }
}

dict['REMOVE'].fr

const city: 'paris' | 'lyon' | 'marseille' | number | true = 'paris'

enum Direction {
    Bottom = 'down',
    Up = 'up',
    Right = 'right',
    Left = 'left'
}

const direction = Direction.Bottom
console.log(direction)

// function setPosition(x: number, y: number): number {
//     return x + y
// }

const setPosition = (x: number, y: number): number => x + y

setPosition(10, 50)

const user2: {
    nom: string
    age: number
    adresse: {
        ville: string
    },
    email?: string
} = {} as any

user2.nom = 'ana'

type Point = {
    x: number
    y: number
}

type Point3D = Point & { z: number }

type PositionTuple = [number, number]
type City = 'paris' | 'lyon' | boolean | PositionTuple

const point: Point = {
    x: 0,
    y: 10
}

const position2: PositionTuple = [10, 34]