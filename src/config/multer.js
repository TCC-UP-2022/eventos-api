import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import path from "path";
import crypto from "crypto";
const __dirname = path.resolve();

/**SUBISTITUIR PARA VARIAVEL DE AMBIENTE**/

const bucketName = process.env.BUCKET_NAME;
const storage = process.env.STORAGE_TYPE;

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "src", "temp", "uploads"));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const fileName = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, fileName);
      });
    },
  }),
  s3: multerS3({
    s3: new aws.S3(),
    bucket: `uploadfotoseventos`,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const fileName = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, fileName);
      });
    },
  }),
};

const multerConfig = {
  dest: path.resolve(__dirname, "src", "temp", "uploads"),
  storage: storageTypes["s3"],
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  },
};

export default multerConfig;
