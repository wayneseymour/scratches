const fs = require('fs')
const cp = require('child_process')

const cmd = 'ls'

// Pipe is the default, so all three stdio streams will not be null

// Also, { stdio: 'pipe' } == ['pipe', 'pipe', 'pipe']
// const res = cp.execSync('find ./src/dev/code_coverage -maxdepth 1 -ls', { cwd: '/Users/trezworkbox/dev/main', encoding: 'utf8'})
const res = cp.execSync(`dirname /Users/trezworkbox/dev/main`, { cwd: '/Users/trezworkbox/dev/main', encoding: 'utf8'})

console.log(`\n### res: \n  ${res}`)
