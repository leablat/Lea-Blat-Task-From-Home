import { tasksModel } from '../../database/models/taskModel'; 

async function getTasks() {
  try {
    const tasks = await tasksModel.find({});

    if (!tasks || tasks.length === 0) {
      throw new Error('No tasks found in the database.');
    }

    return tasks;
  } catch (error) {
    console.error('Error fetching tasks from the database:', error);
    throw error; 
  }
}

export { getTasks };
