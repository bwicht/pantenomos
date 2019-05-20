Meteor.startup(function() {
  if (Meteor.users.find().count() === 0) {
    // create a date string
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var day = new Date().getDate();
    var date = (month + "/" + day + "/" + year).toString();

      // User 1
      Accounts.createUser({
        username: 'User1',
        email: 'user1@example.com',
        password: 'password',
        profile: {
          noScore: 0,
          yesScore: 0,
        }
      });

      var user1Id = Meteor.users.findOne({username: 'User1'})._id;

      Laws.insert({
        lawsName: "Laws Name 1",
        lawsPost: "Laws Post 1",
        author: "User1",
        date: date,
        createdAt: new Date(),
        noScore: 0,
        yesScore: 0,
        voted: ["User1"],
        userId: user1Id,
      });
      console.log("User1 Created");
      console.log("User1 Laws Created");

      // User 2
      Accounts.createUser({
        username: 'User2',
        email: 'user2@example.com',
        password: 'password',
        profile: {
          noScore: 0,
          yesScore: 0,
        }
      });

      var user2Id = Meteor.users.findOne({username: 'User2'})._id;

      Laws.insert({
        lawsName: "Laws Name 2",
        lawsPost: "Laws Post 2",
        author: "User2",
        date: date,
        createdAt: new Date(),
        noScore: 0,
        yesScore: 0,
        voted: ["User2"],
        userId: user2Id,
      });
      console.log("User2 Created");
      console.log("User2 Laws Created");

      // User 3
      Accounts.createUser({
        username: 'User3',
        email: 'user3@example.com',
        password: 'password',
        profile: {
          noScore: 0,
          yesScore: 0,
        }
      });

      var user3Id = Meteor.users.findOne({username: 'User3'})._id;

      Laws.insert({
        lawsName: "Laws Name 3",
        lawsPost: "Laws Post 3",
        author: "User3",
        date: date,
        createdAt: new Date(),
        noScore: 0,
        yesScore: 0,
        voted: ["User3"],
        userId: user3Id,
      });
      console.log("User3 Created");
      console.log("User3 Laws Created");

      // User 4
      Accounts.createUser({
        username: 'User4',
        email: 'user4@example.com',
        password: 'password',
        profile: {
          noScore: 0,
          yesScore: 0,
        }
      });

      var user4Id = Meteor.users.findOne({username: 'User4'})._id;

      Laws.insert({
        lawsName: "Laws Name 4",
        lawsPost: "Laws Post 4",
        author: "User4",
        date: date,
        createdAt: new Date(),
        noScore: 0,
        yesScore: 0,
        voted: ["User4"],
        userId: user4Id,
      });
      console.log("User4 Created");
      console.log("User4 Laws Created");

      // User 5
      Accounts.createUser({
        username: 'User5',
        email: 'user5@example.com',
        password: 'password',
        profile: {
          noScore: 0,
          yesScore: 0,
        }
      });

      var user5Id = Meteor.users.findOne({username: 'User5'})._id;

      Laws.insert({
        lawsName: "Laws Name 5",
        lawsPost: "Laws Post 5",
        author: "User5",
        date: date,
        createdAt: new Date(),
        noScore: 0,
        yesScore: 0,
        voted: ["User5"],
        userId: user5Id,
      });
      console.log("User5 Created");
      console.log("User5 Laws Created");

      // User 6
      Accounts.createUser({
        username: 'User6',
        email: 'user6@example.com',
        password: 'password',
        profile: {
          noScore: 0,
          yesScore: 0,
        }
      });

      var user6Id = Meteor.users.findOne({username: 'User6'})._id;

      Laws.insert({
        lawsName: "Laws Name 6",
        lawsPost: "Laws Post 6",
        author: "User6",
        date: date,
        createdAt: new Date(),
        noScore: 0,
        yesScore: 0,
        voted: ["User6"],
        userId: user6Id,
      });
      console.log("User6 Created");
      console.log("User6 Laws Created");

      // User 7
      Accounts.createUser({
        username: 'User7',
        email: 'user7@example.com',
        password: 'password',
        profile: {
          noScore: 0,
          yesScore: 0,
        }
      });

      var user7Id = Meteor.users.findOne({username: 'User7'})._id;

      Laws.insert({
        lawsName: "Laws Name 7",
        lawsPost: "Laws Post 7",
        author: "User7",
        date: date,
        createdAt: new Date(),
        noScore: 0,
        yesScore: 0,
        voted: ["User7"],
        userId: user7Id,
      });
      console.log("User7 Created");
      console.log("User7 Laws Created");

      // User 8
      Accounts.createUser({
        username: 'User8',
        email: 'user8@example.com',
        password: 'password',
        profile: {
          noScore: 0,
          yesScore: 0,
        }
      });

      var user8Id = Meteor.users.findOne({username: 'User8'})._id;

      Laws.insert({
        lawsName: "Laws Name 8",
        lawsPost: "Laws Post 8",
        author: "User8",
        date: date,
        createdAt: new Date(),
        noScore: 0,
        yesScore: 0,
        voted: ["User8"],
        userId: user8Id,
      });
      console.log("User8 Created");
      console.log("User8 Laws Created");

      // User 9
      Accounts.createUser({
        username: 'User9',
        email: 'user9@example.com',
        password: 'password',
        profile: {
          noScore: 0,
          yesScore: 0,
        }
      });

      var user9Id = Meteor.users.findOne({username: 'User9'})._id;

      Laws.insert({
        lawsName: "Laws Name 9",
        lawsPost: "Laws Post 9",
        author: "User9",
        date: date,
        createdAt: new Date(),
        noScore: 0,
        yesScore: 0,
        voted: ["User9"],
        userId: user9Id,
      });
      console.log("User9 Created");
      console.log("User9 Laws Created");

      // User 10
      Accounts.createUser({
        username: 'User10',
        email: 'user10@example.com',
        password: 'password',
        profile: {
          noScore: 0,
          yesScore: 0,
        }
      });

      var user10Id = Meteor.users.findOne({username: 'User10'})._id;

      Laws.insert({
        lawsName: "Laws Post 10",
        lawsPost: "Laws Post 10",
        author: "User10",
        date: date,
        createdAt: new Date(),
        noScore: 0,
        yesScore: 0,
        voted: ["User10"],
        userId: user10Id,
      });
      console.log("User10 Created");
      console.log("User10 Laws Created");

      console.log("  ");
      console.log("User Database Seeded! Now get to work! :)");
      console.log("Laws Database Seeded! Now get to work! :)");

  }

});
