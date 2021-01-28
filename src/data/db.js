import Project from '../model/project';

class Db {
  constructor() {
    this.localStorageKey = 'project-tasks';
  }

  getProject(id) {
    const projects = JSON.parse(localStorage.getItem(this.localStorageKey));
    let project;
    project = projects.find((p) => p.id === id);

    return project;
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

    let currentProject = {
      currentProject: newProject,
    };

    if (localStorage.getItem(this.localStorageKey) === null) {
      projects = [];
      projects.push(currentProject, newProject);
    } else {
      projects = JSON.parse(localStorage.getItem(this.localStorageKey));
      projects.splice(0, 1, currentProject);
      projects.push(newProject);
    }

    localStorage.setItem(this.localStorageKey, JSON.stringify(projects));
  }

  getCurrentProject() {
    const projects = JSON.parse(localStorage.getItem(this.localStorageKey));
    let currentProject = projects[0];

    return currentProject;
  }

  setCurrentProject(project) {
    const projects = JSON.parse(localStorage.getItem(this.localStorageKey));
    let currentProject = {
      currentProject: project,
    };
    projects.splice(0, 1, currentProject);

    localStorage.setItem(this.localStorageKey, JSON.stringify(projects));
  }

  updateProject(updatedProject) {
    const projects = JSON.parse(localStorage.getItem(this.localStorageKey));
    projects.forEach( (p, index) => {
      if(p.id === updatedProject.id) {
        projects.splice(index, 1, updatedProject);
      }
    })

     let currentProject = {
       currentProject: updatedProject,
     };
     projects.splice(0, 1, currentProject);
     console.log(projects);
     localStorage.setItem(this.localStorageKey, JSON.stringify(projects));
  }
}

export default Db;
