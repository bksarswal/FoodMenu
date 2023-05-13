const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static(`${__dirname}/public`));
app.set("view engine", "ejs");

const menu__json = fs.readFileSync(__dirname+'//ejs-menu.json');
const menu = JSON.parse(menu__json);
app.get("/", (req,res)=>{
res.render('ejs-strip', {menu:menu});
});
app.listen(3000);
