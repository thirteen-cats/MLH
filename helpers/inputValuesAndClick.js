const sel = require('../data/selectors.json')

function inpuyValues4 (name, gender, age, storyType){
  $(sel.name).setValue(name);
  $$(sel.gender)[gender].click();
  $(sel.age).setValue(age);
  $(sel.story).click();
  $$(sel.storyType)[storyType].click();
  
}

module.exports = inpuyValues4;