const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const studentid = req.body.studentid;
  const university = req.body.university;
  const department = req.body.department;
  const password = req.body.password;

  const newExercise = new Exercise({
    firstname,
    lastname,
    email,
    studentid,
    university,
    department,
    password,
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
        exercise.firstname = req.body.firstname;
        exercise.lastname = req.body.lastname;
        exercise.email = req.body.email;
        exercise.studentid = req.body.studentid;
        exercise.university = req.body.university;
        exercise.department = req.body.department;
        exercise.password = req.body.password;

        exercise.save()
          .then(() => res.json('Exercise updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;