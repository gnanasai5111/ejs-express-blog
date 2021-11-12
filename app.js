// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const  _ =require("lodash");
const app = express();
var posts=[];
const homePageContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus maximus sem at sollicitudin. Nullam vitae ipsum sit amet nulla tempor eleifend. Sed tincidunt dapibus est vel condimentum. Maecenas sollicitudin urna id massa posuere, quis dictum mauris elementum. Suspendisse finibus risus ut orci pellentesque, eu volutpat lectus pretium. Sed sodales magna non odio vehicula, nec porttitor tortor ultricies. Cras dignissim tellus eu scelerisque posuere. Maecenas ac justo sed felis vehicula placerat non in erat. Nullam et dignissim augue. Curabitur id ullamcorper lorem. Etiam eros ante, rhoncus eget facilisis mollis, consequat id lectus. Proin tempor arcu vel ex varius, vitae vulputate mi elementum. Maecenas id lorem ullamcorper, suscipit turpis at, suscipit ex. Aenean nisl ex, fermentum id elit at, volutpat vulputate orci.";
const contactPageContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus maximus sem at sollicitudin. Nullam vitae ipsum sit amet nulla tempor eleifend. Sed tincidunt dapibus est vel condimentum. Maecenas sollicitudin urna id massa posuere, quis dictum mauris elementum. Suspendisse finibus risus ut orci pellentesque, eu volutpat lectus pretium. Sed sodales magna non odio vehicula, nec porttitor tortor ultricies. Cras dignissim tellus eu scelerisque posuere. Maecenas ac justo sed felis vehicula placerat non in erat. Nullam et dignissim augue. Curabitur id ullamcorper lorem. Etiam eros ante, rhoncus eget facilisis mollis, consequat id lectus. Proin tempor arcu vel ex varius, vitae vulputate mi elementum. Maecenas id lorem ullamcorper, suscipit turpis at, suscipit ex. Aenean nisl ex, fermentum id elit at, volutpat vulputate orci.";
const aboutPageContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus maximus sem at sollicitudin. Nullam vitae ipsum sit amet nulla tempor eleifend. Sed tincidunt dapibus est vel condimentum. Maecenas sollicitudin urna id massa posuere, quis dictum mauris elementum. Suspendisse finibus risus ut orci pellentesque, eu volutpat lectus pretium. Sed sodales magna non odio vehicula, nec porttitor tortor ultricies. Cras dignissim tellus eu scelerisque posuere. Maecenas ac justo sed felis vehicula placerat non in erat. Nullam et dignissim augue. Curabitur id ullamcorper lorem. Etiam eros ante, rhoncus eget facilisis mollis, consequat id lectus. Proin tempor arcu vel ex varius, vitae vulputate mi elementum. Maecenas id lorem ullamcorper, suscipit turpis at, suscipit ex. Aenean nisl ex, fermentum id elit at, volutpat vulputate orci.";
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render('home', {
    homeContent: homePageContent,
    posts:posts
  });
});
app.get("/contact", (req, res) => {
  res.render('contact', {
    contactContent: contactPageContent
  });
});
app.get("/about", (req, res) => {
  res.render('about', {
    aboutContent: aboutPageContent
  });
});
app.get("/compose", (req, res) => {
  res.render('compose');
});
app.post("/compose", (req, res) => {
  var post = {
    title: req.body.postTitle,
    content: req.body.postArea
  };
  posts.push(post);
  // console.log(posts);
  res.redirect("/");
});

app.get("/posts/:postName",(req,res)=>{
  const requestedTitle=_.lowerCase(req.params.postName);

  posts.forEach(function(post){
    const storedTitle=_.lowerCase(post.title);
    if(requestedTitle==storedTitle){
    res.render('post',{
      title:post.title,
      content:post.content

    });
    }

  });

});
app.listen(8000, (req, res) => {
  console.log("server is running at port 8000");
});
