import { uploadToBucket } from '../_utils/uploadBucket.js'

export default async (req, res) => {
  let uploadedFileUrl = await uploadToBucket();
    // res.status(200).send(`Uploaded Url ${req.query.name}!`)
    res.status(200).send(`Uploaded Url ${uploadedFileUrl}!`)
  }
  
  