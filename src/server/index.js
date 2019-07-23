import express from 'express'
import { render } from './utils'

const app = express()
app.use(express.static('public'))
const data = [
    {
        "id": 0,
        "content": "111"
    },
    {
        "id": 1,
        "content": "222"
    },
    {
        "id": 2,
        "content": "333"
    },
    {
        "id": 3,
        "content": "444"
    },
    {
        "id": 4,
        "content": "555"
    }
]

app.get('*', (req, res) => {
    if (req.url === '/api') {
        res.json(
            data
        )
        return
    }
    render(req,res)
})

const server = app.listen(80)