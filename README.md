# The Grammar Games :books:  :pencil2:

* Live site: http://the-grammar-games.herokuapp.com/

## Project Description

The Grammar Games is an interactive, game-based website designed to make learning grammar fun for both kids and adults. This objective-driven education app enables users to select the grade level and specific learning standard they would like to practice and watch a short, informative video with explanation and examples of the skill. Having reviewed the specific grammar concept, users then complete a short quiz on the subject. Finally their quiz scores are saved and compared to those of their peers on a leaderboard detailing their current standings. This app intends to make learning and reviewing grammar exciting for users of all ages.

## Technical Description

TGG uses a react-based gaming framework to render the gaming components as the user interacts with the activities on screen. User authentication using Okta’s React authentication framework will allow the user to sign in and possess a sign-in token. The website will allow the user to select a specific learning standard from a dropdown menu or text input field, and the lesson begins. Khan Academy video lectures will be embedded on the next screen related to the topic the user selected. After each video, the user will receive a quiz to further drill their learnings, solidify their understanding. These quizzes will be given via React components that render and correct the user’s mistakes using the NPM packages and APIs listed below. Users will then be scored based on their learning outcomes measured by the quizzes, and scores will be kept tallied using MongoDB for persistence. The website will also allow a leaderboard to pull high scores from other users, integrating a social aspect to TGG.

## Technologies Used

* ReactJS
* NodeJS
* ExpressJS
* PassportJS Google OAuth user authentication
* MongoDB data persistence
* Heroku deployment
* Reactstrap Styling
* Custom CSS Styling
* Axios
* Body and cookie parser



