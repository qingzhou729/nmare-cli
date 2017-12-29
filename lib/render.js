
/**
 * @description  Render a user-defined template
 * @author yuki.yang
 */

const fs = require('fs');
const Path = require('path');
const Xtemplate = require('xtemplate');
const exists = require('fs').existsSync;

class Render {
    constructor(src, dist, answers){
        this.answers = answers;
        this.renderFile(src, dist);
    }
    
    renderFile(src, dist){
        fs.readdirSync(src).forEach((item) => {
            const _src = src + '/' + item;
            const _dist = dist + '/' + item;
            let stat = fs.statSync(_src);
            if(stat.isFile()){
                let content = this.renderXtpl(this.getTemplateStr(_src), this.answers);
                this.output(item, content, dist);
            } else if (stat.isDirectory()){
                this.renderFile(_src, _dist);
            }
        })
    }
    
    renderXtpl(page, data) {
        const tplStr = new Xtemplate(page).render(data);
        return tplStr;
    }

    output( p, content, path) {
        if(!exists(path)){
             fs.mkdirSync(path);
        }
        // Solve the problem , .gitignore will be ignored by npm
        if(p === 'gitignore'){
            p = `.${p}`;
        }
        fs.writeFileSync(`${path}/${p}`, content, {
            flag: 'w+',
            encoding: 'utf8'
        }, (err) => {
            if (err) {
                return console.log(err);
            }
            return null;
        });   
    }

    getTemplateStr(src) {
        const xtplPath = Path.resolve(require.main.filename, src);
        return fs.readFileSync(xtplPath).toString();
    }
}

module.exports = (src, dist, answers) => new Render(src, dist, answers);

