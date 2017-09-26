/* global firebase moment */
// Steps to complete:

// 1. Initialize Firebase
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBU4XqE9OhUzkBdQtzqwghU5yph6m8boF0",
    authDomain: "traintracker-8f239.firebaseapp.com",
    databaseURL: "https://traintracker-8f239.firebaseio.com",
    projectId: "traintracker-8f239",
    storageBucket: "",
    messagingSenderId: "47518825994"
};

firebase.initializeApp(config);
var database = firebase.database();

// 2. Create button for adding new trains - then update the html + update the database
$("#add-train-btn").on("click", function(){

    event.preventDefault();

    //grab user input
    var trName = $("#train-name-input").val().trim();
    var trDest = $("#destination-input").val().trim();
    var trTime = $("#first-train-time").val().trim();
    var trFreq = $("#frequency-input").val().trim();

    // Creates local "temporary" object for holding employee data
    var newTrain = {
        name: trName,
        dest: trDest,
        firstTrain: trTime,
        freq: trFreq
    };

    // Uploads train data to the database
    database.ref().push(newTrain);

    //log everything to console
    console.log(newTrain.name);
    console.log(newTrain.dest);
    console.log(newTrain.firstTrain);
    console.log(newTrain.freq);

    //Clears all of the text boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-train-time").val("");
    $("#frequency-input").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry