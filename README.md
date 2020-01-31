# My Favorite Movie

### Motivation
I wanted to create this App because I recently visited a friend's house and he had a collection of movie posters framed in his basement and I thought it was really cool. After doing some research I learned the IMDB replica API was both reliable and fairly easy to use so I decided to use it for my project.

### Goal
Create an APP that allows users to look up the posters to their favorite movies. If the user creates a profile, they will be able to add their favorite movies to their saved movies from the external API or add the movie manually so they can view a complete list of their movies. In addition they will be able to view and update their profile information.

### Technologies Used
- Java
- Spring Boot
- React
- Postgres SQL
- OMDB API
- Reactstrap
- Styled Components
- Material Design React

### Dependencies
Spring Initializer
https://start.spring.io

- Spring Web
- Rest Repositories
- Spring Data JPA
- PostgresSQL Driver
- Spring Boot Dev Tools
- Spring Data JDBC

React
- React
- npm create-react-app
- npm install reactstrap
- npm style-components
- npm install --save react-router-dom
- npm add react-material-design
- npm install axios

### Approach
I started by first planning out my backend relational database and outlining the business logic so I could have a visual representation of how I wanted the App to work. Then I moved on to working on the backend in Java so that when I moved on to the front end, I would be able to have working end points for both the OMDB API and the API I built. After I completed my backend, I tested endpoints in Postman and made sure that they were all working correctly. Next I moved on to the front end in React. I decided to use Reactstrap because a lot of enterprise and start up companies use the Bootstrap library and I wanted to get some practice implementing components. I decided to first fetch data from the OMDB API and render it on to my page and then moved on to getting and posting data to my API. Lastly I tested out different styling edits.

### Project Hurdles
- My biggest project hurdle was figuring out the logic for how the external API data on the front end would save to my backend. Once I allowed users to manually add movies to their saved movies, I was able to have better visual understanding of how to grab the data from the OMDB API.
