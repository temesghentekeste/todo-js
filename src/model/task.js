
class Task {
  constructor(name, description, date, priority) {
    this.id = `task-${new Date().getTime()}`;
    this.name = name;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }

}

export default Task;