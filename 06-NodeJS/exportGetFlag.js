function getFlag(flag){
    const position = process.argv.indexOf(flag)
    const value = process.argv[position + 1]
    return value
}

module.exports = getFlag;