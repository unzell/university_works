import * as repo from "./repositories/office-repo.js"

// const countries = await repo.findAll()
// console.log(countries)

// const countryFind = await repo.findOne(94)
// console.log(countryFind)

// const countryCreate = await repo.create(
//     {country: "Thailand Dan Smile"}
// )
// console.log(countryCreate)

// const countryUpdate = await repo.update(111, {country : "Thailande"})
// console.log(countryUpdate)

const countryDelete = await repo.remove(111)
console.log(countryDelete)