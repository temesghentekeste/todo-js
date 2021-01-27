const getDefaultProject =  () => {
    return {
      id: 1,
      name: 'Default Project',
      tasks: [
        {
          id: Date.now().toString(),
          name: 'Task 1',
          date: Date.now(),
          description: 'Some Description',
          priority: 1,
          note: 'Some note',
          complete: false,
        },
      ],
    }
  }

const getAllProjects = () => []
export {
  getDefaultProject,
  getAllProjects
};
