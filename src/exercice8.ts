interface EntiteBase {
    id: number
    nom: string
}

interface Personne extends EntiteBase {
    age: number
}

interface Organisation extends EntiteBase {
    domaine: string
}

class Relation<T extends EntiteBase, U extends EntiteBase> {
    private entiteA: T = {} as T
    private entiteB: U = {} as U

    etablirRelation(entiteA: T, entiteB: U): void {
        this.entiteA = entiteA
        this.entiteB = entiteB
    }

    obtenirDetailsRelation(id: number): T | U | null {
        if (this.entiteA.id == id) {
            return this.entiteA
        }
        if (this.entiteB.id == id) {
            return this.entiteB
        }
        return null
    }

    obtenirNomEntite(id: number): Pick<T | U, 'nom'> | null {
        const entite = this.obtenirDetailsRelation(id) 
        if (entite) {
            return {
                nom: entite.nom
            }
        }
        return null
    }
}

let relations = new Relation<Personne, Organisation>()
relations.etablirRelation(
    { id: 1, nom: "Alice", age: 30 }, 
    { id: 2, nom: "TechCorp", domaine: "Technologie" }
);
console.log(relations.obtenirDetailsRelation(1)); // Doit retourner les détails de "Alice"
console.log(relations.obtenirDetailsRelation(2)); // Doit retourner les détails de "TechCorp"

console.log(relations.obtenirNomEntite(1)); // Doit retourner { nom: "Alice" }