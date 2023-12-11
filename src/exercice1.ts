const donnees: {
    nom: string
    age: number
    ville: string
}[] = [
    { nom: "Alice", age: 25, ville: "Paris" },
    { nom: "Bob", age: 30, ville: "Paris" },
    { nom: "Charlie", age: 35, ville: "Lyon" }
]

const filtrerParVille = (ville: string) => {
    return donnees.filter(donnee => donnee.ville == ville)
}

const calculerAgeMoyen = () => {
    const somme = donnees.reduce((somme, donnee) => somme + donnee.age, 0)
    return somme / donnees.length
}

console.log(filtrerParVille('Paris'))
console.log(calculerAgeMoyen())