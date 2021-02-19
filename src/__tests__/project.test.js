const { default: Project } = require('../model/project');

let project;
const createProject = () => {
  project = new Project('Project 1', 'Project 1 Description');
};

beforeAll(() => createProject());

test('it should create a new project', () => {
  expect(project.name).toBe('Project 1');
});

test('it should set the current project', () => {
  project.save();

  const currentProject = project.getCurrentProject();
  expect(project.name).toBe(currentProject.name);
});

describe('Test project validation', () => {
  test('it should return false for invalid project', () => {
    project.description = '';

    const isValid = project.validate();

    expect(isValid).not.toBe(true);
  });

  test('it should return true for valid project', () => {
    project.description = 'Some descriptoin';
    const isValid = project.validate();

    expect(isValid).toBe(true);
  });
});
