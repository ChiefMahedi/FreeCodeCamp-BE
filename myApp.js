require('dotenv').config();
const mongoose = require('mongoose');
const dbLink = process.env.MONGO_URI;
mongoose.connect(dbLink, { useNewUrlParser: true, useUnifiedTopology: true });
const personSchema = new mongoose.Schema(
{
  name:{
    type : String,
    required: true
  },
  age:{
    type: Number
  },
  favoriteFoods:{
    type: [String]
  }
}
);
let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  const newPerson = new Person(
    {
      name: 'Mahedi',
      age: 24,
      favoriteFoods: ['Biriyani','Chicken']
    }
  )
  newPerson.save(function(err, data){
    if(err) console.log(err);
    else console.log(data);
    done(null ,data);
  });

};
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople)
  .then((data)=>{
    done(null , data);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(err, data){
    done(null , data);
  })

};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: {$in :[food]}} ,function(err, data){
    done(null , data);
  })
};

const findPersonById = (personId, done) => {
  Person.findById({_id: personId} ,function(err, data){
    done(null , data);
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
