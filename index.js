const express = require('express')
const format = require('date-format')
const app = express()

const PORT = 4000 || process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
  });

  app.get("/api/v1/:token", (req, res) => {
    console.log(req.params.token);
    res.status(200).json({
        param: req.params.token
    });
  });

  app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        username: "Adityamuley",
        followers: 66,
        follows: 70,
        date: format.asString("dd[MM] - hh:mm:ss", new Date())
    };

    res.status(200).json(instaSocial);
  });
  app.get("/api/v1/facebook", (req, res) => {
    const instaSocial = {
        username: "AdityamuleyFacebook",
        followers: 88,
        follows: 25,
        date: format.asString("dd-MM-yyyy hh:mm:ss", new Date())
    };

    res.status(200).json(instaSocial);
  });
  app.get("/api/v1/linkedin", (req, res) => {
    const instaSocial = {
        username: "Adityamuleylinkedin",
        followers: 54,
        follows: 23,
        date: Date.now()
    };

    res.status(200).json(instaSocial);
  });

app.listen(PORT,  () => {
    console.log(`server is running at ${PORT}`);
});
