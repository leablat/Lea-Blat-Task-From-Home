
import express, { Request, Response, NextFunction } from 'express';
import { getTasks } from './handlers/getAllTasks';
import { createTask } from './handlers/creatTask'; 
import { updateTask } from './handlers/editTask';
import { deleteOfTask } from './handlers/deletetask';

const tasksRouter = express.Router();
tasksRouter.get('/', getAllTasks); 
tasksRouter.post('/', addTask); 
tasksRouter.put('/:id', editTask);
tasksRouter.delete('/:id', deleteTask);

async function getAllTasks(req: Request, res: Response, next: NextFunction) {
  try {
    const tasks = await getTasks();
    res.json(tasks);
  } catch (error) {
    console.error('Error get all tasks',error);
  }
}

async function addTask(req: Request, res: Response, next: NextFunction) {
    try {
        const { Description, Date, Status } = req.body;

        await createTask(req, res, next);

    } catch (error) {
        console.error('Error adding a task:', error);
    }
}


async function editTask(req: Request, res: Response, next: NextFunction){
  try {
    const taskId = req.params.id;
    const update = req.body; 
await updateTask (req, res, next)

} catch (error) {
  console.error('Error update a task:', error);
}
 
}

async function deleteTask(req: Request, res: Response, next: NextFunction){
  try {
    const taskId = req.params.id;

    await deleteOfTask (req, res, next)


   
  } catch (error) {
    console.error('Error deleting a task:', error);
  }
}



export { tasksRouter };




