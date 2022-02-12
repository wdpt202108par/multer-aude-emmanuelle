const express = require('express')
const multer = require('multer')

const app = express()

const upload = multer({dest: '/tmp'})

// app.get('/', (req, res, next) => res.send('coucou'))

app.post('/up', upload.single('csv'), (req, res, next) => {
    console.log('req.file=', req.file)

    res.json(req.file)
})

app.listen(5007, () => console.log('Listening on 5007'))