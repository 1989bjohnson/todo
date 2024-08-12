const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.post('/', async (req, res) => {
    const {title, description, status} = req.body;

    const newTask = new Task({title, description, status});

    await newTask.save();
    res.json(newTask);
});

router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const updatedTask = await Task.findByIdAndUpdate(id, {status: 'completed'}, {new: true});
        
        if (!updatedTask) {
            return res.status(404).json({message: 'Task not found'});
        }

        res.json(updatedTask);
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({message: 'Task not found'});
        }

        res.json(task);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = router;