import express, { Request, Response, NextFunction } from 'express';
import { tasksModel } from '../../database/models/taskModel';
import Joi from 'joi';

const taskSchema = Joi.object({
    Description: Joi.string().required(),
    Date: Joi.date().iso().required(),
    Status: Joi.boolean()
});

async function createTask(req: Request, res: Response, next: NextFunction) {
   
try{
const { Description, Date, Status } = req.body;

    const newTask = new tasksModel({
        Description,
        Date,
        Status,
    });

    const savedTask = await newTask.save();

    res.status(201).json(savedTask);
}
       
     catch (error) {
        console.error('Error creating a task:', error);
        next(error);
    }
}

export { createTask };
