const { Router } = require("express");
const router = Router();
const { Rekognition } = require("aws-sdk");

const rekognition = new Rekognition({
  region: "us-east-2",
});

router.post("/", async function (req, res) {
  await rekognition.detectFaces({
  Image: {
    S3Object:{
      Bucket: "face-detect-photos",
      Name: "face5.png"
    }
  },
  Attributes: ['ALL']
  },
  function (err, data) {
    if (err) console.log(err, err.stack);
    else {
      console.log(data);
      res.send(data);
    };
  });
});

module.exports = router;
