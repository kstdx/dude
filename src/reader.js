import { Marked } from 'marked'

export const readAll = async () => {
    let entries = []
    if (sessionStorage.getItem('entries') === null) {
        for await (const entry of Deno.readDir('./posts')) {
            if (entry.isFile) {
                const raw = await Deno.readTextFile(`./posts/${entry.name}`)
                const md = Marked.parse(raw)
                entries.push({
                    name: entry.name.slice(0, -3),
                    raw,
                    html: md.content,
                    data: md.meta
                })
            }
        }

        sessionStorage.setItem('entries', JSON.stringify(entries))
    } else {
        entries = JSON.parse(sessionStorage.getItem('entries'))
    }

    return entries
}

export const read = async (name) => {
    let foundEntry = {}

    for (const entry of await readAll()) {
        if (entry.name === name) {
            foundEntry = entry
        }
    }

    return foundEntry
}
