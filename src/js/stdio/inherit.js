const fs = require('fs')
const cp = require('child_process')

const cmd = 'ls'

// Inherit makes sure all three stdio streams get inherited from the parent

// No need to try to "listen" for the data event, as "stdout" is null.

// Inherits means we are not using the stdio streams of the child,
// instead we will use the parent's streams
const child = cp.spawn(cmd, ['-a'], { stdio: 'inherit' })

console.log(`\n### child: \n  ${child}`)
