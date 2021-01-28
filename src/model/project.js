import Db from "../data/db";

class Project {
  constructor(name, description, tasks) {
    this.id = new Date().getTime();
    this.name = name;
    this.description = description;
    this.tasks = [];
    this.db = new Db();
    this.currentProject = null;
  }

  getCurrentProject() {
    return this.currentProject;
  }

  setCurrentProject() {
    this.currentProject = this;
  }

  save() {
    this.db.saveProject(this);
  }
}

export default Project;