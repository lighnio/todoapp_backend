const Task = require('../models/task');
const mongoose = require('mongoose');


exports.getTasks = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 20;
    const offset = (page - 1) * limit;

    try {
        const tasks = await Task.find().skip(offset).limit(limit);  
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las tareas', error });
    }
};

exports.createTask = async (req, res) => {
    try {
        req.body["_id"] = new mongoose.Types.ObjectId();

        const newTask = new Task(req.body);
        
        await newTask.save(); 
        res.status(201).json({ message: 'Tarea creada exitosamente', task: newTask });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la tarea', error });
    }
};

exports.getTaskById = async (req, res) => {
    try {
        const taskId = req.params.id;  
        const task = await Task.findById(taskId);  

        if (!task) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la tarea', error });
    }
};