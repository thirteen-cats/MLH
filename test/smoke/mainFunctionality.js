const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const inputValues4AndClick = require('../../helpers/inputValuesAndClick');

describe('Checking the main functionality', function () {
  
  describe('Happy path', function () {
    it('TC-021=1 Create button is clickable after 1-4 are filled in', function () {
      browser.url('');
      const inputName = $(sel.name).setValue(data.name);
      const inputGender = $$(sel.gender)[data.gender.she].click();
      const inputAge = $(sel.age).setValue(data.age);
      const click = $(sel.storyClick).click();
      const inputStory = $$(sel.storyType)[data.storyType].click();
      const create = $(sel.create).isEnabled();
      browser.pause(3000);
      expect(create).toEqual(true);
    });
  
    it('TC-021-2 Create button is clickable after 1-4 are filled in', function () {
      browser.url('');
      
      inputValues4(data.name, data.gender.she, data. age, data.storyType);
      
      const create = $(sel.create).isEnabled();
      browser.pause(3000);
      expect(create).toEqual(true);
    });
  });
  
  describe('Other paths', function () {

    
    it('TC-022 ', function () {
      browser.url('');
      
      inputValues4AndClick(data.name, data.gender.she, data. age, data.storyType);
      browser.pause(2000);
      const btn = $(sel.tryAgain).isDisplayed();
      browser.pause(2000);
      expect(btn).toEqual(true);
    });
  });
});