import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/index.html");
})
 
app.get("/create", (req, res) => {
  res.render(__dirname + "/view/create.ejs");
});

app.get("/contact", (req, res) => {
  res.render(__dirname + "/view/contact.ejs");
});

app.get("/openBlog1",(req,res)=>{
  res.render(__dirname+"/view/blog1.ejs");
});

app.get("/openBlog2",(req,res)=>{
  res.render(__dirname+"/view/blog2.ejs");
});

app.get("/openBlog3",(req,res)=>{
  res.render(__dirname+"/view/blog3.ejs");
});

app.get("/openBlog4",(req,res)=>{
  res.render(__dirname+"/view/blog4.ejs");
});

app.post("/post",(req,res)=>{
  const blogTitle=req.body.title;
  const blogContent=req.body.content;
  console.log(blogTitle);
  console.log(blogContent);
  res.render(__dirname + "/view/newBlog.ejs",{
    titleOfBlog:blogTitle,
    contentOfBlog:blogContent
  });
});

app.post("/submit", (req, res) => {
  res.send('Submitted Successfully!');
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
