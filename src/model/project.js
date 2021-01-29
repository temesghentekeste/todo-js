import Db from "../data/db";

class Project {
  constructor(name, description, tasks) {
    this.id = `project-${new Date().getTime()}`;
    this.name = name;
    this.description = description;
    this.tasks = [];
    this.db = new Db();
  }

  getCurrentProject() {
    let currentProject = this.db.getCurrentProject();
    currentProject = currentProject.currentProject;
    return currentProject;
  }

  setCurrentProject() {
    this.currentProject = this.db.setCurrentProject(this);
  }

  save() {
    this.db.saveProject(this);
  }
}

export default Project;