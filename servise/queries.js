import { promises as fs } from 'fs'


const path = "../data/report.json"

export async function insert(obj) {
    const data = await fs.readFile(path, "utf8")
    const arr = await JSON.parse(data)
    obj["tyme"] = new Date()
    arr.push(obj)
    await fs.writeFile(path, JSON.stringify(arr))
}

export async function getAll() {
    const data = await fs.readFile(path, "utf8")
    const arr = await JSON.parse(data)
    return arr
}

export async function sortByTyme() {
    const data = await fs.readFile(path, "utf8")
    const arr = await JSON.parse(data)
    arr.sort((a, b) => a.tyme - b.tyme)
    await fs.writeFile(path, JSON.stringify(arr))
}

export async function sortByTarget() {
    const data = await fs.readFile(path, "utf8")
    const arr = await JSON.parse(data)
    arr.sort((a,b) => a.target - b.target)
    await fs.writeFile(path, JSON.stringify(arr))
}


