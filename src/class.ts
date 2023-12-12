type RoleType = 'admin' | 'member'

class User {
    static url: string = '/api/users'

    constructor(private _name: string,  protected role: RoleType = 'member') { }

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

    deleteUser(user: User): User {
        console.log('supprimer un utilisateur', user.name)
        return user
    }

    override avatar(folder: string | number): string {
        const url = super.avatar(folder as string)
        return url + '.admin'
    }
}

const admin = new Admin('ana')
const user = new User('ben')
admin.deleteUser(user)
console.log(admin.avatar('images'))