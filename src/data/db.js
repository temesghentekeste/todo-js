import Project from '../model/project';
import Task from '../model/task';

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
    let projects = JSON.parse(localStorage.getItem(this.localStorageKey));

    let currentProject;
    if (projects === null) {
      currentProject = {
        currentProject: {
          id: `project-${new Date().getTime()}`,
          name: 'Default Project',
          description: 'Default Project Description',
          tasks: [],
        },
      };
      projects = [];
      projects.push(currentProject);
      projects.push(currentProject.currentProject);
      localStorage.setItem(this.localStorageKey, JSON.stringify(projects));
    } else {
      currentProject = projects[0];
    }

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
    projects.forEach((p, index) => {
      if (p.id === updatedProject.id) {
        projects.splice(index, 1, updatedProject);
      }
    });

    let currentProject = {
      currentProject: updatedProject,
    };
    projects.splice(0, 1, currentProject);
    console.log(projects);
    localStorage.setItem(this.localStorageKey, JSON.stringify(projects));
  }

  deleteProject(deletedProject) {
    const projects = JSON.parse(localStorage.getItem(this.localStorageKey));
    projects.forEach((p, index) => {
      if (p.id === deletedProject.id) {
        projects.splice(index, 1);
      }
    });

    let currentProject = {
      currentProject: {
        id: `project-${new Date().getTime()}`,
        name: 'Default Project',
        description: 'Default Project Description',
        tasks: [],
      },
    };
    projects.splice(0, 1, currentProject);

    if (projects.length === 1) {
      projects.push(currentProject.currentProject);
    }
    localStorage.setItem(this.localStorageKey, JSON.stringify(projects));
  }

  saveTask(task) {
    let currentProject = this.getCurrentProject().currentProject;
    currentProject.tasks.push(task);

    const projects = JSON.parse(localStorage.getItem(this.localStorageKey));
    projects.forEach((p) => {
      if (p.id === currentProject.id) {
        p.tasks.push(task);
      }
    });

    currentProject = {
      currentProject,
    };
    projects.splice(0, 1, currentProject);
    localStorage.setItem(this.localStorageKey, JSON.stringify(projects));
  }

  getCurrentTask(taskId) {
    let task;
    const currentProject = this.getCurrentProject().currentProject;
    task = currentProject.tasks.find((t) => t.id === taskId);
    return task;
  }

  updateTask(id, name, description, priority, date, createdAt) {
    const projects = JSON.parse(localStorage.getItem(this.localStorageKey));
    const updatedProject = this.getCurrentProject().currentProject;

    const updatedTask = new Task(name, description, date, priority, createdAt);
    updatedTask.id = id;

    updatedProject.tasks.forEach((task, index) => {
      if (task.id === updatedTask.id) {
        updatedProject.tasks.splice(index, 1, updatedTask);
      }
    });

    projects.forEach((p, index) => {
      if (p.id === updatedProject.id) {
        projects.splice(index, 1, updatedProject);
      }
    });

    let currentProject = {
      currentProject: updatedProject,
    };
    projects.splice(0, 1, currentProject);
    localStorage.setItem(this.localStorageKey, JSON.stringify(projects));
  }
}

export default Db;
