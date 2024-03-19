import express, { Request, Response, NextFunction } from 'express';
import { tasksModel } from '../../database/models/taskModel';


async function deleteOfTask(req: Request, res: Response, next: NextFunction) {

  try {
    const taskId = req.params.id;

    await tasksModel.findByIdAndDelete(taskId);

    res.sendStatus(200);
  } catch (error) {
    console.error('Error deleting a task:', error);
    res.status(500).send('Internal Server Error');
  }
}

export { deleteOfTask };
