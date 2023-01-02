import { readAll } from '../src/reader.js'

export default class {
    static getAll = async (c) => {
        const entries = await readAll()

        let tags = []
        for (const entry of entries) {
            if (Array.isArray(entry.data.tags)) {
                for (const tag of entry.data.tags) {
                    if (!tags.includes(tag)) {
                        tags.push(tag)
                    }
                }
            }
        }

        return c.json(tags)
    }

    static getByTag = async (c) => {
        const entries = await readAll()

        let foundEntries = []
        for (const entry of entries) {
            if (Array.isArray(entry.data.tags)) {
                if (entry.data.tags.includes(c.req.param('tag'))) {
                    foundEntries.push(entry)
                }
            }
        }

        return c.json(foundEntries)
    }
}
