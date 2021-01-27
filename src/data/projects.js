const getDefaultProject =  () => {
    return {
      id: 1,
      name: 'Default Project',
      description: 'Default Project Description',
      tasks: [
        {
          id: Date.now().toString(),
          name: 'Task 1',
          date: Date.now(),
          description: 'Some Description',
          priority: 1,
          note: 'Some note',
          completed: false,
        },
        {
          id: Date.now().toString(),
          name: 'Task 2',
          date: Date.now(),
          description: 'Some Description',
          priority: 1,
          note: 'Some note',
          completed: false,
        },
        {
          id: Date.now().toString(),
          name: 'Task 3',
          date: Date.now(),
          description: 'Some Description',
          priority: 1,
          note: 'Some note',
          completed: false,
        },
      ],
    };
  }

const getAllProjects = () => []
export {
  getDefaultProject,
  getAllProjects
};
