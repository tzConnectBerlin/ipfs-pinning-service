const express = require("express");
const router = express.Router();

const pinataSDK = require("@pinata/sdk");
const pinata = pinataSDK(
  process.env.PINATA_API_KEY,
  process.env.PINATA_API_SECRET
);

router.post("/add-json", async (req, res) => {
  const options = req?.body?.pinataMetadataName
    ? {
        pinataMetadata: {
          name: req?.body?.pinataMetadataName,
        },
      }
    : undefined;

  const result = await pinata.pinJSONToIPFS(req.body, options);
  res.json(result);
});

module.exports = router;
