# pms
Population Management System

### Introduction
This is a Population Management System that contains a list of locations and the total number of residents in each location broken down by gender.

### Technologies
NodeJS, ExpressJS, MongoDB, Mongoose

### How To Use
This can be easily installed locally by following the following steps:
- Clone the repository locally
- Run `npm install` to install node packages
- Add `.env` file from the `.env.sample` specifying your database URL in it
- Run `export MONGODB_URI=your-database-url` to make it temporarily available on the terminal
- Run `mongod` (To start mongodb service, mongodb has to be installed locally, this is not needed if a cloud-based db is used)
- Run `npm start` to start up the application which can be accessed on the specified port (Run `npm test` to run the tests).

### Requirements
To be able to use the application locally, the following are required:
- NodeJS
- Node Package Manager (npm)
- Mongodb

### API Endpoints

<table> 
<tr>
<th> Endpoint </th> <th> Method </th> <th> Action </th> <th> Payload </th>
</tr>
<tr>
<td> /createLocation </td> <td> POST </td> <td> create a new location </td> <td> male_residents(int), female_residents(int), locations(Array of location objects)</td>
</tr>
<tr>
<td> /getLocation/:id </td> <td> GET </td> <td> Return a given location with :id</td> <td> none </td>
</tr>
<tr>
<td> /getAvailableLocations </td> <td> GET </td> <td> Return all locations</td> <td> none </td>
</tr>
<tr>
<td> /updateLocation/:id </td> <td> UPDATE </td> <td> Update a given location with :id</td> <td> male_residents(int), female_residents(int), locations(Array of objects) </td>
</tr>
<tr>
<td> /deleteLocation/:id </td> <td> DELETE </td> <td> Delete a given location with :id</td> <td> none</td>
</tr>
</table>

### How To Contribute
To contribute, fork this repository, make required changes and open a pull request.

### Roadmap
[Project Roadmap](https://trello.com/b/iVWuoI7P/pms)

### Contributors
- [Ethan Nwankwo](https://github.com/andela-cnwankwo)