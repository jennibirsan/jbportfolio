var firebaseConfig = {
    apiKey: "AIzaSyARlvMHvGRm39z9wmY5zq0Ix2MVU8_liPU",
    authDomain: "coderbay-26249.firebaseapp.com",
    databaseURL: "https://coderbay-26249.firebaseio.com",
    projectId: "coderbay-26249",
    storageBucket: "",
    messagingSenderId: "83337563836",
    appId: "1:83337563836:web:4db5fc38ea7972d2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database()


   // 2. Button for adding subscribers
  $(".btn").on("click", function(event) {
    event.preventDefault();
  
     // Grabs user input
    var firstName = $("#first_name2").val().trim();
    var lastName = $("#last_name2").val().trim();
    var newPhone = $("#first_phone2").val().trim();
    var newEmail = $("#last_email2").val().trim();
    var newComments = $("#first_comments2").val().trim();
    // var fromReferral = $("#test1").val().trim();
    // var socialMedia = $("#test2").val().trim();
    // var online = $("#test3").val().trim();
    
    // Creates local "temporary" object for holding subscriber data
    var newContact = {
      fname: firstName,
      lname: lastName,
      phone: newPhone,
      email: newEmail,
      comments: newComments,
      // referral: fromReferral,
      // socialmedia: socialMedia,
      // onlinebrowsing: online,
    };
    
    // Uploads data to the database
    database.ref().push(newContact);
    
    // Logs everything to console
    console.log(newContact.fname);
    console.log(newContact.lname);
    console.log(newContact.phone);
    console.log(newContact.email);
    console.log(newContact.comments);
    // console.log(newContact.referral);
    // console.log(newContact.socialmedia);
    // console.log(newContact.onlinebrowsing);
     alert("Thank you for contacting me!");
     
     // Clears all of the text-boxes
    $("#first_name2").val("");
    $("#last_name2").val("");
    $("#first_phone2").val("");
    $("#last_email2").val("");
    $("#first_comments2").val("");
    // $("#test1").val("");
    // $("#test2").val("");
    // $("#test3").val("");
  });
