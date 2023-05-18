const fs = require('fs')
const cp = require('child_process')

const cmd = 'ls'

// Pipe is the default, so all three stdio streams will not be null

// Also, { stdio: 'pipe' } == ['pipe', 'pipe', 'pipe']
const child = cp.spawn(cmd, ['-a'], { stdio: 'pipe' })
