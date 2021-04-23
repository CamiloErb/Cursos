export default function getSuperHeroes() {
    const apiURL = "https://superheroapi.com/api/10216562552770816"
    return fetch(apiURL)
    .then(res => res.json)
    .then(response => {
        const {data} = response
        const superHeroes = data.map(heroe => heroe.id)
        console.log(superHeroes)
    })  


}