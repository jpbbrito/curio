import express from 'express'
import cors from 'cors'

import routes from './routes/index.js'

const app = express()

app.use(cors())
app.use(express.json({ limit: '5120kb' }))
app.use('/api/v1', routes)

export default app
