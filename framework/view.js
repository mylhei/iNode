exports = module.exports = View;

function View(engineName, option) {
    var Engine = require("./views/" + engineName + "wrapper");
    this.engine = new Engine();
    this.option = option || {cache: true};
    if (this.option.cache) {
        this.setCache(true);
    }
    this.templatePath = '';
}

View.prototype.setPath = function(path) {
    this.templatePath = path;
    return this;
};

View.prototype.setCache = function(isCache) {
    this.engine.setCache(isCache);
    return this;
};

View.prototype.assign = function(attr, value) {
    this.engine.assign(attr, value);
    return this;
};

View.prototype.render = function(template) {
    return this.engine.render(this.templatePath + '/' + template);
};