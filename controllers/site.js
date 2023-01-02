import { readAll } from '../src/reader.js'

export default class {
    static notFound = (c) => c.text('Not Found', 404)

    static serverError = (err, c) => {
        console.error('error: ' + err)
        return c.text('Error', 500)
    }
}
