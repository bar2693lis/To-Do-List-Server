const Task = require('../models/task');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const task = await new Task(req.body).save();
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/', async(req, res) => {
    try{
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:id', async(req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            {_id: req.params.id},
            req.body
        );
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;