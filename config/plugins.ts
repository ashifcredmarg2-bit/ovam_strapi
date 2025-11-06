 module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: '@strapi/provider-upload-aws-s3',
      providerOptions: {
        s3Options: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'), // 👈 matches your .env
          region: env('AWS_REGION'),
          params: {
            Bucket: env('AWS_BUCKET'),
          },
        },
        baseKeyPrefix: 'ovam_strapi_blog_utils/',
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});



// Aws.config.update({
//   accessKeyId: process.env.S3_ACCESS_KEY_ID,
//   secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
//   region: process.env.S3_REGION,
// });

// const s3 = new Aws.S3();



// router.post("/upload-image", upload.single("image"), async (req, res) => {
//   try {
//     if (!req.file) {
//       logger.info("Please attach an image file");
//       return res.status(400).json({
//         success: false,
//         status: 400,
//         msg: "Please attach an image file",
//       });
//     }

//     const params = {
//       Bucket: "astroping-utils",
//       Key: `chat/${Date.now()}_${req.file.originalname}`,
//       Body: req.file.buffer,
//       ContentType: req.file.mimetype,
//     };

//     const s3Response = await s3.upload(params).promise();
//     const imageUrl = s3Response?.Location;
//     return res.status(200).json({
//       success: true,
//       status: 200,
//       imageUrl: imageUrl,
//     });
//   } catch (error) {
//     logger.error("upload image API has an error: ", error);
//     return res.status(500).json({
//       success: false,
//       status: 500,
//       msg: "Internal server error",
//     });
//   }
// });