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

it('should return a project by its id', () => {
  const currentProject = db.getProject(project.id);
  expect(project.id).toBe(currentProject.id);
});

it('should return all projects', () => {
  const projects = db.getProjects();
  expect(projects.length).toBe(2);
});