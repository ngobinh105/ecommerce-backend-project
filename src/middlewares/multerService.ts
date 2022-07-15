import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/images'))
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const fileUpload = multer({ storage }).single('avatar')

export default fileUpload
