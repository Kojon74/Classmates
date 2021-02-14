const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const enteredEmail = req.body.EnteredEmail;
  const studentId = req.body.studentId;
  const university = req.body.university;
  const department = req.body.department;
  const enteredPassword = req.body.enteredPassword;

  const newExercise = new Exercise({
    firstName,
    lastName,
    enteredEmail,
    studentId,
    university,
    department,
    enteredPassword,
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
      .then(exercise => res.json(exercise))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
      .then(() => res.json('Exercise deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
      .then(exercise => {
        exercise.firstName = req.body.firstName;
        exercise.lastName = req.body.lastName;
        exercise.enteredEmail = req.body.eneterdEmail;
        exercise.studentId = req.body.studentId;
        exercise.university = req.body.university;
        exercise.department = req.body.department;
        exercise.enteredPassword = req.body.enteredPassword;

        exercise.save()
          .then(() => res.json('Exercise updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;