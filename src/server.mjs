import express from 'express'
import fs from 'fs'


const app = express();

app.use(express.json())

app.post("/notification/pull-request", (request, response) => {

  console.info('GitHub Webhook Requested Review Received:', request.body)
  
  fs.writeFile(Date.now() + '-github-pullrequest-hook-content.json', JSON.stringify(request.body), (err) => {
    if (err) throw err;
    console.log('New GitHub Event Content Wrote to File!');
  });
  
  try {
    response.send()
  } catch(e) {
    throw new Exception(e.message)
  }
})

app.listen(8080, () => {
  console.log("Github Webhook Started!")
})
