const { default: Project } = require('../model/project');


test('it should create a new project', () => {
  const project = new Project('project 1', 'project 1 desc');
  expect(project.name).toBe('project 1');
});
