import { serve } from 'server'
import { Hono } from 'hono'

import Site from './controllers/site.js'
import Post from './controllers/post.js'
import Tag from './controllers/tag.js'

const app = new Hono()

app.get('/', Post.getAll)
app.get('/post/:name', Post.getByName)
app.get('/tag', Tag.getAll)
app.get('/tag/:tag', Tag.getByTag)

app.notFound(Site.notFound)
app.onError(Site.serverError)

serve(app.fetch)
