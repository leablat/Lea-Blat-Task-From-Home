import express, { Request, Response, NextFunction } from 'express';
import { tasksModel } from '../../database/models/taskModel';
import Joi from 'joi';

const taskSchema = Joi.object({
    Description: Joi.string().required(),
    Date: Joi.date().iso().required(),
    Status: Joi.boolean()
});

async function updateTask(req: Request, res: Response, next: NextFunction) {
   
    try {
        const taskId = req.params.id;
        const update = req.body;

       await tasksModel.findByIdAndUpdate(taskId, update);

    res.sendStatus(200); 
  } catch (error) {
    console.error('Error editing a task:', error);
    res.status(500).send('Internal Server Error'); 
  }
}

export { updateTask };
