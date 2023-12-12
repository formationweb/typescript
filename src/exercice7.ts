function mapper<T, U>(array: T[], cb: (element: T) => U): U[] {
    return array.map(cb)
}

function filtre<T>(array: T[], cb: (element: T) => boolean): T[] {
    return array.filter(cb)
}

mapper<number, string>([1, 2, 3], (nb) => {
    return 'ss' + nb
})

filtre([1, 2, 3], (nb) => {
    return false
})