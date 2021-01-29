import Db from "../data/db";

class Project {
  constructor(name, description, tasks) {
    this.id = `project-${new Date().getTime()}`;
    this.name = name;
    this.description = description;
    this.tasks = [];
    this.db = new Db();
  }

  save() {
    this.db.saveProject(this);
  }
}

export default Project;