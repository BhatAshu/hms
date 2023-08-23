const express = require("express");
const patientModel = require("../models/patient");
const authenticate = require("../middleware/authentication");
const WebSocket = require("ws");

const router = express.Router();
const server = require("http").createServer();
const wss = new WebSocket.Server({ server });
const clients = new Set();

wss.on("connection", (ws) => {
  clients.add(ws);

  ws.on("close", () => {
    clients.delete(ws);
  });
});
router.put("/:id", authenticate, async (req, res) => {
  try {
    const id = req.params.id;
    const {
      username,
      email,
      age,
      chiefcomplaint,
      bloodgroup,
      sugarlevel,
      bloodpressure,
      testtype,
    } = req.body;

    const updatedData = {
      id: id,
      username: username,
      email: email,
      age: age,
      chiefcomplaint: chiefcomplaint,
      bloodgroup: bloodgroup,
      sugarlevel: sugarlevel,
      bloodpressure: bloodpressure,
      testtype: testtype,
    };

    await patientModel.findByIdAndUpdate(id, updatedData);
    const data = await patientModel.findById(id);
    // Notify connected clients about the data update
    const notification = {
      type: "data_updated",
      patientId: id,
    };

    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(notification));
      }
    });

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error.stack);
  }
});

module.exports = router;
