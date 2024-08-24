require('dotenv').config();
import { Injectable } from '@nestjs/common';
const cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
})

@Injectable()
export class AppService {
  getHello() {
    return {
      mensagem:"hallow"
    };
  }
  recbePost({request , file}) {
    async function aaa() {
      const results = await cloudinary.uploader.upload('./img/cachorrinho.jpg')
      console.log(results)
    }
    aaa()
    console.log('aqui!')
    return {
      message: 'Recebemos a imagem',
      filename: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      body: request.body,
    };
  }
}

