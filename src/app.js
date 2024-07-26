 
  const express = require ("express")

  const app = express()
   
  const port = process.env.port || 3000


  
  const path = require("path")
  
  const publicDirectory = (path.join(__dirname ,'../public'))
  app.use(express.static(publicDirectory))
 

  app.set('view engine' , 'hbs');


  app.set('view engine', 'hbs');

  const viewsDirectory = path.join (__dirname , '../temp1/views')
  app.set('views', viewsDirectory);
 
  


  app.get('/' , (req , res) => {
    res.render('index',{
      title : "HOME",
      desc : "this home page",
      img:"images/1.jpg"
    })
  })


  app.get('/service' , (req , res) => {
    res.render('service',{
      title : "HOME",
      name : "malika",
      city : "qena",
      age : 5,
      img1 : "images/service.jpg"
    })
  })



  app.get('/team' , (req , res) => {
    res.render('team',{
      title : "TEAM",
      name : "zain",
      city : "qena",
      age : 3,
      img2 : "images/team.jpeg"
    })
  })


  app.get('/head' , (req , res) => {
    res.render('head',{
      title : "HEAD",
      name : "alaa",
      city : "qena",
      age : 23,
      img3 : "images/1.jpg"
    })
  })


  app.get('/main' , (req , res) => {
    res.render('main',{
      title : "MAIN",
      name : "yasmeen",
      city : "luxor",
      age : 23,
      img4 : "images/1.jpg"
    })
  })

  app.listen(port, () => {
    console.log(`app is listeing on port  ${port}`)
})

var hbs = require('hbs');
const partialsPath = path.join(__dirname , "../temp1/partials")
hbs.registerPartials(partialsPath)
  

