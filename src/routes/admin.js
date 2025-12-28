const express = require('express');
const router = express.Router();
// GET /admin/info
router.get('/info', (req, res) => {
  res.json({
    message: 'Admin information endpoint',
    version: '1.0.0',
    status: 'active'
  });
});
module.exports = router;