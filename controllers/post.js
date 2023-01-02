import { readAll, read } from '../src/reader.js'

export default class {
    static getAll = async (c) => c.json(await readAll())

    static getByName = async (c) => c.json(await read(c.req.param('name')))
}
