const { default: Task } = require('../model/task');

let task;
const createTask = () => {
  task = new Task(
    'Task 1',
    'Project 1 Description',
    new Date(),
    'Low',
    new Date()
  );
};

beforeAll(() => createTask());

test('it should create a new project', () => {
  expect(task.name).toBe('Task 1');
});
