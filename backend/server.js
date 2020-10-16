const express = require("express");
// const redis = require("redis");
// const {nanoid} = require("nanoid")
const port = 3000

const app = express()

// app.get('/', function (req, res) {
//     const client = redis.createClient({ detect_buffers: true });
//     client.on("error", function(error) {
//         console.error(error);
//       });
//     client.on("ready", function() {
//         const id1 = nanoid()
//     const id2 = nanoid()
//     client.set(id1, id2, function(err, reply){
//         if (err){
//             console.log(err)
//             client.quit();
//             return res.send(err)
//         }
//         client.get(id1, function(err, reply){
//             client.quit();
//             return res.send(reply)
//         })
//     })
//     })
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})