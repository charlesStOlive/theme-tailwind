let path = require('path'),
    fs = require('fs'),
    themeRegex = /\{\{[\s?]*["|'|`](.*[\.[png|jpe?g|gif|ico])["|'|`][\s?]*\|[\s?]*theme[\s?]*\}\}/g;

module.exports = function (content, map, meta) {
    console.log("------debut de verif--------")
    while ((m = themeRegex.exec(content)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === content.lastIndex) {
            content.lastIndex++;
        }
        let assetToSend = m[1];
        fromFullPath = path.join(this.rootContext, 'src/', assetToSend)
        file = fs.readFileSync(fromFullPath)
        fromRelativePath = path.relative(this.context, fromFullPath)
        this.emitFile(assetToSend, file)
    }


    return 'module.exports = [\n' +
        JSON.stringify(content) +
        '\n].join();'
}
