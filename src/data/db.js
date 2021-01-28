import Project from '../model/project';

class Db {
  constructor() {
    this.localStorageKey = 'project-tasks';
  }

  getProject(id) {
    return id;
  }

  saveProject({ id, name, description, tasks }) {
    let projects;

    const newProject = {
      id,
      name,
      description,
      tasks,
    };

    if (localStorage.getItem(this.localStorageKey) === null) {
      projects = [];
      projects.push(newProject);
    } else {
      projects = JSON.parse(localStorage.getItem(this.localStorageKey));
      projects.push(newProject);
    }
    localStorage.setItem(this.localStorageKey, JSON.stringify(projects));
  }
}

export default Db;
