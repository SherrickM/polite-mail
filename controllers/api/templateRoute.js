const router = require('express').Router();
const { Template } = require('../../models');


router.post('/generate', async (req, res) => {
    try {
      const newTemplate = await Template.create({
        recipient_name: req.body.recipient_name,
        message: req.body.message,
        subject: req.body.subject,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newTemplate);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;