import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: (arg0: null, arg1: string) => void) => {
    cb(null, path.join(__dirname, '../../public/images'))
  },
  filename: (req: any, file: { originalname: any }, cb: (arg0: null, arg1: any) => void) => {
    cb(null, file.originalname)
  },
})

const fileUpload = multer({ storage }).single('avatar')

export default fileUpload
