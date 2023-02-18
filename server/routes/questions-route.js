const express = require('express')
const router = express.Router()
const axios = require('axios');
const { fetch } = require('.././utils/data-utils.js');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");


const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
  region: process.env.BUCKET_REGION
});


const addPhotosToS3 = async (req) => {
  var imageName = `${req.file.originalname}${req.params.question_id}`
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: imageName,
    Body: req.file.buffer,
    ContentType: req.file.mimetype
  };
  const command = new PutObjectCommand(params);

  return s3.send(command)
}

const getPhotoUrl = async (photos=[]) => {
  var photoUrls = [];

  for (const photo of photos) {
    //basic filtering for photos not inputted by me
    if (photo.url.includes('https://')) {
      photoUrls.push(photo);
      continue;
    }

    console.log('PHOTO URL', photo.url);

    const getObjectParams = {
      Bucket: process.env.BUCKET_NAME,
      Key: photo.url,
    }
    const command = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(s3, command, { expiresIn: 900 });
    if (url) {
      photo.url = url;
      photoUrls.push(photo);
      console.log('PICTURE', url)
    }
  }

  return photoUrls;
}


var sortList = (array, key) => {
  return (
    array.sort((a, b) => {
      return b[key] - a[key]
    })
  )
}

const sortAList = (aList) => {
  return aList.sort((a, b) => {
    return b.answerer_name.toLowerCase().indexOf('seller') - a.answerer_name.toLowerCase().indexOf('seller');
  })
}

router.get('/questions', (req, res) => {
  fetch(`qa${req.url}`, (err, payload) => {
    if (err) {
      throw err;
    } else {
      res.send(sortList(payload.data.results, 'question_helpfulness'));
    }
  })
})

router.post('/questions', (req, res) => {
  try {
    axios({
      method: 'POST',
      url: process.env.API_URL + `/qa/questions`,
      headers: { "Authorization": `${process.env.API_KEY}` },
      data: req.body
    })
      .then((response) => {
        console.log(response)
        res.status(201).json(response.data);
      })
  } catch (error) {
    console.log(error);
    res.status(400).json('error');
  }
})



router.get('/questions/:question_id/answers', (req, res) => {
  fetch(`qa${req.url}`, (err, payload) => {
    if (err) {
      throw err;
    } else {
      var newArray = payload.data.results.map(async (answer) => {
        answer.photos = await getPhotoUrl(answer.photos);
        return answer
      })
      Promise.all(newArray)
      .then((result) => {
        res.send(sortAList(sortList(result, 'helpfulness')));
      })
      .catch((err) => {
        console.log(err);
      })
    }
  })
})

router.post('/questions/:question_id/answers', upload.single('photos'), async (req, res) => {
  console.log('reqbody', req.body, 'reqfile', req.file, req.params.question_id);
  if (!!req.file.originalname) {
    var imageArray = [`${req.file.originalname}${req.params.question_id}`];
    req.body.photos = imageArray;
    await addPhotosToS3(req);
  } else {
    req.body.photos = [];
  }


  try {
    axios({
      method: 'POST',
      url: process.env.API_URL + `/qa${req.url}`,
      headers: { "Authorization": `${process.env.API_KEY}` },
      data: req.body
    })
      .then((response) => {
        console.log(response.body);
        res.status(201).json(response.data);
      })
  } catch (error) {
    console.log(error);
    res.status(400).json('error');
  }

  res.status(201);
})

router.put('/questions/:question_id/report', (req, res) => {
  axios({
    method: 'PUT',
    url: process.env.API_URL + `/qa${req.url}`,
    headers: { "Authorization": `${process.env.API_KEY}` },
  })
    .then((response) => {
      console.log(response)
      res.status(204).json(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json('error');
    });
})

router.put('/answers/:answer_id/report', (req, res) => {
  axios({
    method: 'PUT',
    url: process.env.API_URL + `/qa${req.url}`,
    headers: { "Authorization": `${process.env.API_KEY}` },
  })
    .then((response) => {
      console.log(response)
      res.status(204).json(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json('error');
    });
})

router.put('/questions/:question_id/helpful', (req, res) => {
  console.log('req.url', req.url)
  axios({
    method: 'PUT',
    url: process.env.API_URL + `/qa${req.url}`,
    headers: { "Authorization": `${process.env.API_KEY}` },
  })
    .then((response) => {
      console.log(response)
      res.status(204).json(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json('error');
    });
})

router.put('/answers/:answer_id/helpful', (req, res) => {
  axios({
    method: 'PUT',
    url: process.env.API_URL + `/qa${req.url}`,
    headers: { "Authorization": `${process.env.API_KEY}` },
  })
    .then((response) => {
      console.log(response)
      res.status(204).json(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json('error');
    });
})



module.exports = router;