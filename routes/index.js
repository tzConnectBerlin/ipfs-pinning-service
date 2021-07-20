const express = require("express");
const router = express.Router();

const pinataSDK = require("@pinata/sdk");
const pinata = pinataSDK(
  process.env.PINATA_API_KEY,
  process.env.PINATA_API_SECRET
);

router.post("/add-json", async (req, res) => {
  const result = await pinata.pinJSONToIPFS(req.body, {
    pinataMetadata: {
      name: req?.body?.pinataMetadataName,
    },
  });
  res.json(result);
});

module.exports = router;
