const faker = require('faker');

module.exports.fakeLocation = () => {
  const fakeLocation = {
    male_residents: faker.random.number(),
    female_residents: faker.random.number(),
    locations: [],
    created_at: new Date(),
    updated_at: new Date()
  };
  return fakeLocation;
};

module.exports.fakeNestedLocation1 = () => {
    const fakeNestedLocation1 = {
      male_residents: faker.random.number(),
      female_residents: faker.random.number(),
      created_at: new Date(),
      updated_at: new Date()
    };
    return fakeNestedLocation1;
  };

  module.exports.fakeNestedLocation2 = () => {
    const fakeNestedLocation2 = {
      male_residents: faker.random.number(),
      female_residents: faker.random.number(),
      created_at: new Date(),
      updated_at: new Date()
    };
    return fakeNestedLocation2;
  };

  module.exports.fakeRandomNumber = () => {
      return faker.random.number();
  }
