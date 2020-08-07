
var assert = require('assert');
//update
var data = [
  {id: 1, name: 'Coles Rewards MasterCard', number: '*******347748482', type:'Visa', availiableLimit: 3244.32, maxIncreaseAmount: 10000.44},
  {id: 2, name: 'Coles Rewards MasterCard1', number: '*******348277484', type:'Visa', availiableLimit: 6564.32, maxIncreaseAmount: 42342.44},
  {id: 3, name: 'Coles Rewards MasterCard2', number: '*******347482748', type:'Visa', availiableLimit: 13403.32, maxIncreaseAmount: 16070.44}
]
var find = function(fn){
    
    fn( data ? data : []);
}

//update
var update = function(req,selector,fn){
    console.log(req.body, selector)
    data.map((card, i)=>{
      if(card.id === selector){
        data.splice(i,1)
      }
    })
    data.push(req.body)
    fn();


}
var methodType = {
  get:find,
  update:update
}
module.exports = methodType;
