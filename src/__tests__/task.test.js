const { default: Task } = require('../model/task');

let task;
const createTask = () => {
  task = new Task(
    'Task 1',
    'Project 1 Description',
    new Date(),
    'Low',
    new Date(),
  );
};

beforeAll(() => createTask());

test('it should create a new project', () => {
  expect(task.name).toBe('Task 1');
});

describe('Test task validation', () => {
  test('it should return false for invalid task', () => {
    task.name = '';

    const isValid = task.validate();

    expect(isValid).not.toBe(true);
  });

  test('it should return true for valid task', () => {
    task.name = 'Task 1';
    const isValid = task.validate();

    expect(isValid).toBe(true);
  });
});
