/* 
Warning: Failed prop type: Invalid prop `feedback[1].id` of type `number` supplied to `FeedbackList`, expected `string`.
FeedbackList@http://localhost:3000/static/js/bundle.js:449:7
App@http://localhost:3000/static/js/bundle.js:43:82

Este erro ocorre pois o id do objeto feedback é do tipo string e não number. Para resolver este problema, basta alterar o tipo do id para number no arquivo src\data\FeedbackData.js. Veja o código abaixo:

*/