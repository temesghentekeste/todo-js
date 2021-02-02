import Db from '../data/db';

class Project {
  constructor(name, description) {
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
    this.db.setCurrentProject(this);
    this.currentProject = this.db.getCurrentProject().currentProject;
  }

  validate() {
    if (this.name.trim().length === 0 || this.description.trim().length === 0) {
      return false;
    }
    return true;
  }

  save() {
    this.db.saveProject(this);
  }
}

export default Project;