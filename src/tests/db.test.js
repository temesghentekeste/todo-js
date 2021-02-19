const { default: Project } = require('../model/project');
const { default: Db } = require('../data/db');

let project;
let db;
const initializeDb = () => {
  db = new Db();
  project = new Project('Project 1', 'Project 1 Description');
  project.save();
};

beforeAll(() => initializeDb());

describe('create', () => {
  it('should save a new project', () => {
    const newProject = new Project('Project II', 'Project II Description');
    db.saveProject(newProject);
    const current = db.getProject(newProject.id);
    expect(newProject.id).toBe(current.id);
  });
});

describe('Read', () => {
  it('should return a project by its id', () => {
    const currentProject = db.getProject(project.id);
    expect(project.id).toBe(currentProject.id);
  });

  it('should return all projects', () => {
    const projects = db.getProjects();
    expect(projects.length).not.toBe(0);
  });
});

describe('Update', () => {
  it('should update the name of a project', () => {
    project.name = 'React Calculator';
    db.updateProject(project);
    const currentProject = db.getProject(project.id);
    expect(project.name).toBe(currentProject.name);
  });
});
