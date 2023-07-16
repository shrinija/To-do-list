const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); // we have module called date and we are requiring it here which binds all of the exportd to thid constant called date

//.....................................

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
//...............................................................................................

const myItemList = ["wakeup", "walk", "read"];  // read js let,const,var, see how it workd in case of array
const workItemList = [];
// const worklist = "my work";

//...............................................................................................

app.get("/", function (req, res) {
  let day = date.mygetDate();
  res.render("list", {
    listTitle: day,
    newAddedItems: myItemList,
  });
});

app.get("/work", function (req, res) {
  res.render("list", {
    listTitle: "my work",
    newAddedItems: workItemList,
  });
});

app.get("/about", function (req, res) {
  res.render("about");
});

//..........................................................................................................

app.post("/", function (req, res) {
  let newItem = req.body.newItem;

  if (req.body.list == "my work") {
    workItemList.push(newItem);
    res.redirect("/work");
  } else {
    myItemList.push(newItem);
    res.redirect("/");
  }
});

app.post("/work", function (req, res) {
  let newItem = req.body.newItem;
  workItemList.push(newItem);
  res.redirect("/work");
});

//.........................................................................................................
app.listen(3000, function () {
  console.log("server has started on port 3000");
});





















// javascript object, method , function , when to add () and when to not






//............................................................................................................
// <div class="box" id="heading">

// <h1><%= listTitle %></h1>
// </div>

// <div class="box">

// <%for(var i=0;i<newAddedItems.length;i++){ %>
//  <div class="item">
//   <input type="checkbox">
//   <p> <%= newAddedItems[i] %> </p></div>
// <%} %>

// <form class="item" action="/" method="post">

// <input type="text" name="newItem" placeholder="New Item" autocomplete="off">

// <button type="submit" name="list" value="<%=listTitle%>">+</button>

// </form>

//..............................................................................................................

// let myItemList = ["wakeup" ,"walk", "read"];
// let workItemList = [];
// const worklist="my work";

// //....................................................

// app.get("/", function (req, res) {

//   var today = new Date();
//   var options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//   };

//   var day = today.toLocaleDateString("hi-IN", options);

//   res.render("list", {
//     listTitle: day,
//     newAddedItems: myItemList,
//   });
// });

// app.get("/work", function (req, res) {

//   var today = new Date();
//   var options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//   };

//   var day = today.toLocaleDateString("hi-IN", options);

//   res.render("list", {
//     listTitle: worklist,
//     newAddedItems: workItemList,
//   });
// });

// //.....................................................

// app.post("/", function (req, res) {

//   let newItem = req.body.newItem;

//   if(req.body.list=="my work")
//   {

//     workItemList.push(newItem);
//     res.redirect("/work");
//   }

//   myItemList.push(newItem);
//   res.redirect("/");
// });

// app.post("/work", function (req, res) {
//    let newItem = req.body.newItem;
//   workItemList.push(newItem);
//   res.redirect("/work");
// });
