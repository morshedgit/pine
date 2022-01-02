import express from 'express'

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

const server = app.listen(PORT, () =>
console.log(`
🚀 Server ready at: http://localhost:${PORT}`),
)