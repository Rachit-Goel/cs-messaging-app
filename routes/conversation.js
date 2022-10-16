const router = require("express").Router();
const Conversation = require("../models/Conversation");

//new conv

router.post("/", async (req, res) => {
  const newConversation = new Conversation({
    custId: req.body.custId,
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
    console.log("post: conversation/ call success");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get unalloted conv 
router.get("/unalloted", async (req, res) => {
  try {
    const conversation = await Conversation.find({
      agentId: "empty",
    });
    res.status(200).json(conversation);
    console.log("get: conversation/unalloted call success");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get alloted conv of a agent

router.get("/agent/:agentId", async (req, res) => {
  try {
    const conversation = await Conversation.find({
      agentId: req.params.agentId,
    });
    res.status(200).json(conversation);
    console.log("get: conversation/:agentId call success");
  } catch (err) {
    res.status(500).json(err);
  }
});

//allot a conv

router.post("/allot", async (req, res) => {
  try {
    const updatedConversation = await Conversation.findByIdAndUpdate(
      req.body.conversationId,
      {
        agentId: req.body.agentId,
      }
    );
    res.status(200).json(updatedConversation);
    console.log("post: conversation/allot call success");
  } catch (err) {
    res.status(500).json(err);
  }
});

//unallot a conv

router.post("/unallot", async (req, res) => {
  try {
    const updatedConversation = await Conversation.findByIdAndUpdate(
      req.body.conversationId,
      {
        agentId: "empty",
      }
    );
    res.status(200).json(updatedConversation);
    console.log("post: conversation/ call success");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all conv of a customer

router.get("/cust/:custId", async (req, res) => {
  try {
    const conversation = await Conversation.find({
      custId: req.params.custId,
    });
    res.status(200).json(conversation);
    console.log("get: conversation/:custId call success");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;