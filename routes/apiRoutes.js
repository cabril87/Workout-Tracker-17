const router = require('express').Router();
const db = require('../models')

    router.get('/api/workouts', (req, res) => {
        db.Workout.aggregate([
            {
                $addFields: {totalDuration: {$sum:'$exercises.duration'}}
            }
        ])
        .then(dbWorkOut => {
            res.json(dbWorkOut)
        })
        .catch(err => {
            res.status(400).json(err);
        });
    })
    
    router.get('/api/workouts/range', (req, res) => {
        db.Workout.aggregate([
            {
                $addFields: {totalDuration: {$sum:'$exercises.duration'}}
            }
        ])
        .limit(7)
        .sort({_id: -1})
        .then(dbWorkOut => {
            res.json(dbWorkOut)
        })
        .catch(err => {
            res.status(400).json(err);
        });
    })

    router.post('/api/workouts/', (req, res) => {
        db.Workout.create({})
        .then(dbWorkOut => {
            res.json(dbWorkOut)
        })
        .catch(err => {
            res.status(400).json(err);
        });
    })

    router.put('/api/workouts/:id', (req, res) => {
        db.Workout.findByIdAndUpdate(
            req.params.id,
            {
                $push: {exercises: req.body}
            },
            {
                new: true, useValidators: true
            }
            )
        .then(dbWorkOut => {
            res.json(dbWorkOut)
        })
        .catch(err => {
            res.status(400).json(err);
        });
    })


    module.exports = router;