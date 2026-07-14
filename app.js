const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb://LakshmiKrishna:lakshmikrishna@ac-hpvbi7o-shard-00-00.fgcxtxc.mongodb.net:27017,ac-hpvbi7o-shard-00-01.fgcxtxc.mongodb.net:27017,ac-hpvbi7o-shard-00-02.fgcxtxc.mongodb.net:27017/teamdb?ssl=true&replicaSet=atlas-14be5c-shard-0&authSource=admin&appName=Cluster0"
)
.then(() => {
    console.log("MongoDB Connected");
   
    })

.catch((err) => {
    console.log(err);
});
const course  = mongoose.model("hackethons", new mongoose.Schema(
    {
        teamId: String,
        teamName: String,
        teamLeader: String,
        leaderEmail: String,
        leaderPhone: String,
        collegeName: String,
        NumberOfMembers: String,
        projectTitle: String,
        problemStatementTrack: String,
        technologyStack: String,
        mentorName: String,
        registrationDate: String, 
        table: String
    }
))

app.post("/add-hackathon", async (request, response) => {
    await course.create(request.body)
    response.json({"status":"success"})
})
app.get("/view-hackathon", async (request, response) => {
    const data = await course.find();
    response.json(data);
});
 app.listen(2000, () => {
        console.log("Server Started on Port 2000");
 })