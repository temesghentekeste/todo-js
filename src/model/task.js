
class Task {
  constructor(name, description, date, priority, createdAt) {
    this.id = `task-${new Date().getTime()}`;
    this.name = name;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.createdAt = this.createdAt;
  }
}

export default Task;
