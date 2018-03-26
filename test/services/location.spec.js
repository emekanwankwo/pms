const expect = require('chai').expect,
  faker = require('../helper'),
  server = require('../../server'),
  request = require('supertest')(server);

let fakeLocation,
  fakeNestedLocation1,
  fakeNestedLocation2,
  locationId,
  fake_location;

describe('Location Service', () => {
  beforeEach((done) => {
    fakeLocation = faker.fakeLocation();
    fakeNestedLocation1 = faker.fakeNestedLocation1();
    fakeNestedLocation2 = faker.fakeNestedLocation2();
    fake_location = faker.fakeLocation();
    request.post('/api/createLocation').send(fake_location)
      .expect(201).then((res) => {
        locationId = res.body._id;
        done();
      });
  });

  describe('Create Locations', () => {
    it('Should create a new location', (done) => {
      request.post('/api/createLocation').send(fakeLocation)
        .expect(201).then(done());
    });

    it('Should not create a new location if data is not specified', (done) => {
      request.post('/api/createLocation').send({})
        .expect(400).then(done());
    });

    it('Should create a new location with nested locations', (done) => {
      fakeLocation.locations.push(fakeNestedLocation1);
      fakeLocation.locations.push(fakeNestedLocation2);
      request.post('/api/createLocation').send(fakeLocation)
        .expect(201).then((res) => {
          expect(res.body.locations.length > 0).to.equal(true);
          done();
        });
    });
  });

  describe('Get Locations', () => {
    it('Should get all available locations', (done) => {
      request.get('/api/getAvailableLocations')
        .expect(200).then(done());
    });

    it('Should get a single location', (done) => {
      request.get(`/api/getLocation/${locationId}`)
        .expect(200).then((res) => {
          expect(res.body[0]._id).to.equal(locationId);
          done();
        });
    });

    it('Should return 404 for a non-existent location', (done) => {
      request.get('/api/getLocation/123')
        .expect(404).then((res) => {
          expect(res.body.message).to.equal('Location not found!');
          done();
        });
    });
  });

  describe('Update and Delete locations', () => {
    it('Should update a location', (done) => {
      const fakeNumber = faker.fakeRandomNumber();
      const updateData = {male_residents: fakeNumber};
      request.put(`/api/updateLocation/${locationId}`).send(updateData)
        .expect(200).then((res) => {
          expect(res.body.male_residents).to.equal(fakeNumber);
          done();
        });
    });

    it('Should delete a location', (done) => {
        request.delete(`/api/deleteLocation/${locationId}`)
          .expect(200).then((res) => {
              expect(res.body.message).to.equal('Location removed!');
              done();
          });
    });
  });
});