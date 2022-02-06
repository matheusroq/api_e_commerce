import multer from 'multer';
import { extname, resolve, basename } from 'path';
import fs from 'fs';

const multerConfig: multer.Options = {
  fileFilter: (req, file, cb) => {
    const acceptedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    if (!acceptedTypes.includes(file.mimetype)) {
      return cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE'))
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = resolve(__dirname, '..', '..', 'uploads')
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
      }
      cb(null, uploadDir)
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now}${extname(file.originalname)}`)
    }
  })
};

export { multerConfig }