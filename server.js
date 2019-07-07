const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const API_PORT = process.env.PORT || 3001;
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

let todos = [{ id: 0, task: 'Take out trash', completed: false }];
let currentId = 1;

router.get('/todos', (req, res) => {
  return res.json(todos);
});

router.post('/todos', (req, res) => {
  todos.push({
    id: currentId++,
    task: req.body.task,
    completed: false
  });
  return res.json({ success: true });
});

router.delete('/todos/:id', (req, res) => {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == req.params.id) {
      todos.splice(i, 1);
    }
  }
  return res.json({ success: true });
});

router.put('/todos/:id/toggle', (req, res) => {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == req.params.id) {
      todos[i].completed = !todos[i].completed;
    }
  }
  return res.json({ success: true });
});

app.use('/api', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
