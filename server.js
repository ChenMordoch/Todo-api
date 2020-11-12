var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;
var todos = [{
  id: 1,
  description: 'Meet mom for lunch',
  completed: false
},
{
  id: 2,
  description: 'Go to market',
  completed: false
},
{
  id: 3,
  description: 'Shopping',
  completed: false
},
]

app.get('/', function(req, res) {
  res.send('Welcome!');
});

// GET /todos
app.get('/todos', function(req, res){
  res.json(todos); // can only pass text and .json is common for this case
});

// GET /todos/:id
app.get('/todos/:id', function(req, res){

  var todoId = req.params.id;
  //res.send('asking for todo with id of ' + todoId);

  var todo;
  todos.forEach(function(todoItem) {
    if (todoItem.id.toString() === todoId) {
      todo = todoItem;
    }
  });
  if(todo) {
    res.json(todo);
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, function() {
  console.log('Express server started on port ' + PORT);
});