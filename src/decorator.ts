function log(myClass: Function) {
    myClass.prototype.log = 'toto'
}

@log
class MaClasse {

}

interface MaClasse {
    log: string
}

const myClass = new MaClasse()
console.log(myClass.log)