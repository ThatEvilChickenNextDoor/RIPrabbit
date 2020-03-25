const NodeMediaServer = require('node-media-server');
const express = require('express')
const app = express()
const port = 3000

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    mediaroot: './media',
    allow_origin: '*'
  },
};
 
var nms = new NodeMediaServer(config)
nms.run();

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))