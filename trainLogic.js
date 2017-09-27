// /* global firebase moment */
// // Steps to complete:
//
// // 1. Initialize Firebase
// // Initialize Firebase
// var config = {
//     apiKey: "AIzaSyBU4XqE9OhUzkBdQtzqwghU5yph6m8boF0",
//     authDomain: "traintracker-8f239.firebaseapp.com",
//     databaseURL: "https://traintracker-8f239.firebaseio.com",
//     projectId: "traintracker-8f239",
//     storageBucket: "",
//     messagingSenderId: "47518825994"
// };
//
// firebase.initializeApp(config);
// var database = firebase.database();
//
// // 2. Create button for adding new trains - then update the html + update the database
// $("#add-train-btn").on("click", function(){
//
//     event.preventDefault();
//
//
//
//     //grab user input
//     var trName = $("#train-name-input").val().trim();
//     var trDest = $("#destination-input").val().trim();
//     var trTime = $("#first-train-input").val().trim();
//     var trFreq = $("#frequency-input").val().trim();
//
//
//
//     // Creates local "temporary" object for holding employee data
//     var newTrain = {
//         name: trName,
//         dest: trDest,
//         firstTrain: trTime,
//         freq: trFreq
//     };
//
//     // Uploads train data to the database
//     database.ref().push(newTrain);
//
//     //log everything to console
//     // console.log(newTrain.name);
//     // console.log(newTrain.dest);
//     // console.log(newTrain.firstTrain);
//     // console.log(newTrain.freq);
//
//     //Clears all of the text boxes
//     $("#train-name-input").val("");
//     $("#destination-input").val("");
//     $("#first-train-input").val("");
//     $("#frequency-input").val("");
// });
//
// // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
//
// database.ref().on("child_added", function(snapshot, prevChildKey) {
//     // console.log(snapshot.val());
//
//     //Store everything into a variable
//     var trName = snapshot.val().name;
//     var trDest = snapshot.val().dest;
//     var trTime = snapshot.val().firstTrain;
//     var trFreq = snapshot.val().freq;
//
//     // //Train info
//     // console.log(trName);
//     // console.log(trDest);
//     // console.log(trTime);
//     // console.log(trFreq);
//
//
//
//     console.log("this is the schedule", trainSchedule);
//
//     // Then to
//     //figure out the next train time generate time now and compare it to
//     //each element in that schedule list. If time now is < time in schdule
//     //that element is the next arrival. Minutes away is next arrival minus
//     //time now.
//
//     var nextArrival = trTime + trFreq;
//     var nextArrivalPretty = moment(trTime,"HH:mm").format("hh:mm A");
//
//
//     $("#train-table > tbody").append
//
//     ("<tr><td>" + trName + "</td><td>" + trDest + "</td><td>" + trFreq + "</td><td>" + nextArrivalPretty + "</td></tr>");
//
// });




function aTest(){

    event.preventDefault();

    console.log("a test");

    var trTime = $("#first-train-input").val().trim();
    var trFreq = $("#frequency-input").val().trim();

    var tempArray = [];
    var trStartTime = moment(trTime,"HH:mm");
    //tempArray.push(trStartTime.format("HH:mm"));
    var endOfDay = moment("23:59","HH:mm");
    console.log(endOfDay.format("HH:mm d"));

console.log("HII", trStartTime.format("d"), endOfDay.format("d"));

    while (trStartTime.format("d") === endOfDay.format("d")) {
        console.log(trStartTime.format("HH:mm d"));
        tempArray.push(trStartTime.format("HH:mm"));
        trStartTime = trStartTime.add(parseInt(trFreq),"m");
    }

    console.log("Created now",tempArray);

    for (var i = 0; i < tempArray.length; i ++){

        if (trStartTime.format("HH:mm") > tempArray[i]){
            var nextArrival = tempArray[i];
            console.log(nextArrival);
            break
        }
    }
}