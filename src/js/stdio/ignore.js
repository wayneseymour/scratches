const fs = require('fs')
const cp = require('child_process')

const cmd = 'ls'

// All three stdio streams are null
const child = cp.spawn(cmd, ['-a'], { stdio: 'ignore' })

