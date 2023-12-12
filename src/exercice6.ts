interface IEmploye {
    nom: string
    poste: string
    afficherInformation(): void
}

abstract class EmployeBase implements IEmploye {
    constructor(public nom: string, public poste: string) { }

    abstract afficherInformation(): void;
}

class Manager extends EmployeBase {
    constructor(nom: string, poste: string, public type: string) {
        super(nom, poste)
    }

    afficherInformation(): void {
        console.log(this.nom, this.poste, this.type)
    }
}

class Developpeur extends EmployeBase {
    constructor(nom: string, poste: string, public type: string) {
        super(nom, poste)
    }

    afficherInformation(): void {
        console.log(this.nom, this.poste, this.type)
    }
}

let manager = new Manager("Alice", "Manager", "Ressources Humaines");
let developpeur = new Developpeur("Bob", "Developpeur", "TypeScript");

manager.afficherInformation(); // Doit afficher des informations spécifiques au manager
developpeur.afficherInformation(); // Doit afficher des informations spécifiques au développeur