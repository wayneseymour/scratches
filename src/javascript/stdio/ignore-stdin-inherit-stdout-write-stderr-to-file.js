const fs = require('fs')
const cp = require('child_process')

const cmd = 'ls'
const err = fs.openSync('./logs/err.txt', 'a')
// const child = cp.spawn(cmd, ['-a', 'does-not-exist'], { stdio: ['ignore', 'inherit', err ] })
const child = cp.spawn(cmd, ['-a', 'does-not-exist'], { stdio: ['ignore', 'inherit', err ] })
