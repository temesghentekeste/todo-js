class Project {
  constructor(name, description, tasks) {
    this.name = name;
    this.description = description;
    this.tasks = []
  }

  save(name, description) {
    console.log('called');
    console.log(name, description);
  }
}

export default Project;