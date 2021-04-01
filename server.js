const express = require('express');
// const bodyParser = require('body-parser')
// const path = require('path');
const app = express();
const data = require('./src/server/data.json')
const PAGE_SIZE=20;


var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.get('/api/', function (req, res) {
  const PAGE_NUMBER = Number(req.query.page) || 1
  const startIndex= (PAGE_NUMBER-1)*PAGE_SIZE;
  const endIndex = PAGE_NUMBER*PAGE_SIZE
  const numOfPages = data.length%PAGE_SIZE === 0? data.length/PAGE_SIZE : data.length/ PAGE_SIZE +1
  const results = {};
  
  results['numOfPage'] = {
    startPage: 1,
    lastPage: numOfPages,
    currentPage: PAGE_NUMBER>-1 && PAGE_NUMBER<=numOfPages? PAGE_NUMBER: PAGE_NUMBER===0? 1: numOfPages
  }

  results['next']={
    page: endIndex<data.length? PAGE_NUMBER+1 : PAGE_NUMBER,
    PAGE_SIZE:PAGE_SIZE
  }

  results['prev']={
    page: startIndex>0? PAGE_NUMBER-1: PAGE_NUMBER,
    PAGE_SIZE:PAGE_SIZE
  }

  results['data'] =data.slice(startIndex,endIndex);
  
  return res.send(results)ßßß
});

app.get('/api/search', function (req, res) {
  let filteredData = data.filter(el=>{
    return el.title.includes(req.query.label) || el.content.includes(req.query.label);
  })
  return res.send(filteredData);
});

app.listen(process.env.PORT || 3232);
console.log(`Listening to port 3232`)