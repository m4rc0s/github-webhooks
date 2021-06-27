import express from 'express'

const app = express();

app.use(express.json())

app.post("/review-requested", (request, response) => {

  console.info('GitHub Webhook Requested Review Received', request.body)
  
  try {
    response.send()
  } catch(e) {
    throw new Exception(e.message)
  }
})

app.listen(4545, () => {
  console.log("Github Webhook Started!")
})

