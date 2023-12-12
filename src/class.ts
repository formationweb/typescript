type RoleType = 'admin' | 'member'

interface IUserAge {
    age: number
    setAge(newAge: number): void
}

interface IUserEmail {
    email: string
}

interface IUserEmail {
    setEmail(newEmail: string): void
}

interface IUser extends IUserAge, IUserEmail {
    company?: string
}

abstract class User implements IUser {
    static url: string = '/api/users'
    age: number = 18
    email: string = 'test'

    constructor(private _name: string,  protected role: RoleType = 'member') { }

    abstract setRole(): void;
    
    setAge(newAge: number): void {
        this.age = newAge
    }

    setEmail(newEmail: string): void {
        this.email = newEmail
    }

    avatar(id: number): string
    avatar(folder: string): string
    avatar(folderOrId: string | number): string {
        return '/' + folderOrId + '/' + this._name + '.png'
    }

    // changeUrl(id: number) {
    //     User.url += '/' + id
    // }

    get name(): string {
        return this._name
    }

    set name(val: string) {
        if (val.length >= 10) {
            val = val.substring(0, 10)
        }
        this._name = val
    }
}

class Admin extends User {

    constructor(name: string) {
        super(name, 'admin')
    }

    setRole(): void {
        this.role = 'admin'
    }

    deleteUser(user: User): User {
        console.log('supprimer un utilisateur', user.name)
        return user
    }

    override avatar(folder: string | number): string {
        const url = super.avatar(folder as string)
        return url + '.admin'
    }
}

class Member extends User {
    setRole(): void {
        this.role = 'member'
    }
}

const admin = new Admin('ana')
const member = new Member('ben')
member.setRole()
admin.deleteUser(member)
console.log(admin.avatar('images'))