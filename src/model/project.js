import Db from "../data/db";

class Project {
  constructor(name, description, tasks) {
    this.id = `project-${new Date().getTime()}`;
    this.name = name;
    this.description = description;
    this.tasks = [];
    this.db = new Db();
    this.currentProject = null;
  }

  getCurrentProject() {
    this.currentProject = this.currentProject
      ? this.currentProject
      : this.db.getCurrentProject().currentProject;
    return this.currentProject;
  }

  setCurrentProject() {
    console.log(this);
    this.db.setCurrentProject(this);
    this.currentProject = this.db.getCurrentProject().currentProject;
  }

  save() {
    this.db.saveProject(this);
  }
}

export default Project;