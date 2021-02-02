class Task {
  constructor(name, description, date, priority, createdAt) {
    this.id = `task-${new Date().getTime()}`;
    this.name = name;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.createdAt = createdAt;
  }

  validate() {
    if (
      this.name.trim().length === 0
      || this.description.trim().length === 0
      || this.date.length === 0
      || this.priority.length === 0
    ) {
      return false;
    }
    return true;
  }
}

export default Task;
