function projects() {
    //get all projects
    this.getAllProjects = 'https://todo.ly/api/projects.json';
//Create New Project
    this.createNewProject = 'https://todo.ly/api/projects.json';
//Get Project By Id
    this.getProjectById = 'https://todo.ly/api/projects/{0}.json';
//Delete Project By Id
    this.deleteProjectById = 'https://todo.ly/api/projects/{0}.json';
    // Get Items of a Project
    this.getItemOfProject = 'https://todo.ly/api/projects/{0}/items.json';
// Create Items
    this.createItem = 'https://todo.ly/api/items.json';
    //Update Item
    this.udateItem='https://todo.ly/api/items/{0}.json';

    String.prototype.format = function () {
        var content = this;
        for (var i = 0; i < arguments.length; i++) {
            var replacement = '{' + i + '}';
            content = content.replace(replacement, arguments[i]);
        }
        return content;
    };
}
module.exports = new projects();