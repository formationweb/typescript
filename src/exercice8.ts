interface EntiteBase {
    id: number
}

class Relation<T extends EntiteBase, U extends EntiteBase> {
    private entiteA: T = {} as T
    private entiteB: U = {} as U

    etablirRelation(entiteA: T, entiteB: U): void {
        this.entiteA = entiteA
        this.entiteB = entiteB
    }
}

let relations = new Relation()
relations.etablirRelation(
    { id: 1, nom: "Alice", age: 30 }, 
    { id: 2, nom: "TechCorp", domaine: "Technologie" }
);