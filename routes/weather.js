const express = require('express');
const router = express.Router();
const axios = require('axios');

// 获取实时天气数据
router.get('/current', async (req, res) => {
  try {
    const { latitude, longitude } = req.query;
    const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: '获取天气数据失败' });
  }
});

// 获取天气预警数据
router.get('/alerts', async (req, res) => {
  try {
    const { latitude, longitude } = req.query;
    const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&alerts=true`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: '获取天气预警失败' });
  }
});

module.exports = router;