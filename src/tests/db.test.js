const { default: Project } = require('../model/project');
const { default: Db } = require('../data/db');


let project;
const createProject = () => {
    project = new Project('Project 1', 'Project 1 Description');
    project.save();
};

beforeAll(() => createProject());

it('should return a project by its id', () => {
  const db = new Db();
  const currentProject = db.getProject(project.id)
  expect(project.id).toBe(currentProject.id)
})