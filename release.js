const fs = require('fs')
const getBuildTime = () => {
  const date = new Date()
  const yaer = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return `${yaer}-${month}-${day} ${hour}:${minute}:${second}`
}

let release = {
  buildTime: getBuildTime()
}

try {
  // ref: refs/heads/develop
  const gitHEAD = fs.readFileSync('.git/HEAD', 'utf-8').trim()
  try {
    // refs/heads/develop
    const ref = gitHEAD.split(': ')[1]
    const branch = gitHEAD.split('/')[2]
    const commitId = fs.readFileSync(`.git/${ref}`, 'utf8').trim()
    // `${branch}_${commitId.substring(0, 7)}_${getBuildTime()}`
    release = Object.assign(release, {
      branch: branch,
      commitId: commitId.substring(0, 7)
    })
  } catch (error) {
    release = Object.assign(release, {
      branch: 'head',
      commitId: gitHEAD.substring(0, 7)
    })
  }
} catch (error) {
  console.error(error)
}

module.exports = release
