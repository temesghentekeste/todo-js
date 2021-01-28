import Project from '../model/project';

class Db {
  constructor() {
    this.localStorageKey = 'project-tasks';
  }

  getProject(id) {
    const projects = JSON.parse(localStorage.getItem(this.localStorageKey));
    let currentProject;
    currentProject = projects.find( p => p.id === parseInt(id));

    return currentProject;
  }

  getProjects() {
    let projects;

    if (localStorage.getItem(this.localStorageKey) === null) {
      projects = [];
    } else {
      projects = JSON.parse(localStorage.getItem(this.localStorageKey));
    }
    return projects;
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