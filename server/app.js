const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');

var mockData = [
    {
      todoItemId: 0,
      name: 'an item',
      priority: 3,
      completed: false
    },
    {
      todoItemId: 1,
      name: 'another item',
      priority: 2,
      completed: false
    },
    {
      todoItemId: 2,
      name: 'a done item',
      priority: 1,
      completed: true
    }
];
app.use(bodyParser.json());

// add your code here
app.get('/', function(req, res){
    res.status(200).send({ status: 'ok'})
});

app.get('/api/TodoItems', function(req, res){
    res.status(200).json(mockData);
})

app.get('/api/TodoItems/:number', function(req, res){
    var number = req.params.number;
    //console.log('number::',number);
    var getItem;
    for (var i = 0; i < mockData.length; i++){
        if(mockData[i].todoItemId == number) {
            getItem = mockData[i];
        }
    }
    res.status(200).json(getItem);
    })

app.post('/api/TodoItems/',function(req, res){
    
    var postItem = req.body;
    for (var i=0; i < mockData.length; i++){
        if (postItem.todoItemId == mockData[i].todoItemId) {
            mockData[i] = postItem;
            }
            break;
    }
    mockData.push(postItem);
    
    console.log('postMock::', mockData);
    res.status(201).send(postItem);

})

app.delete('/api/TodoItems/:number', function(req, res){
    var deleteItem;
    for(var i=0; i < mockData.length; i++){
        if(mockData[i].todoItemId == req.params.number){
            deleteItem = mockData[i];
            mockData.splice(i,1);
            }
        }
        console.log('deleteMock', mockData);
        res.status(200).send(deleteItem);
})

app.use = (morgan('dev'));
module.exports = app;
