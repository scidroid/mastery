import uvicorn
from fastapi import FastAPI, Form, Response
import os
from twilio.twiml.messaging_response import MessagingResponse
from deta import Deta

deta = Deta(os.environ['KEY'])

db = deta.Base("tasks")

app = FastAPI()

@app.post("/")
def bot(Body:str = Form(...)):
    Body = Body.lower()
    resp = MessagingResponse()
    msg = resp.message()
    if "hello" in Body:
        msg.body("\N{smiling face with smiling eyes} *Hi, nice to meet you!* Welcome to *Mastery* Whastapp client.")
    elif "tasks" in Body:
        tasks = db.fetch()
        msg.body("\N{smiling face with smiling eyes} These are your first *task* " + str(tasks._items[0]))
    elif "submit" in Body:
      msg.body("*Great!* your answer was submited!")
    else:
      msg.body("I can't understand you :(")
    resp= str(resp)
    return Response(content=resp, media_type="application/xml")

uvicorn.run(app, host="0.0.0.0",port="8080")