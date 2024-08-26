import { Injectable } from '@nestjs/common';
import * as cloudinary from 'cloudinary';
import { UploadApiResponse } from 'cloudinary';
import * as dotenv from 'dotenv';

dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


@Injectable()
export class AppService {
  getHello() {
    return {
      mensagem: "hallow"
    };
  }

  async listImages() {
    try {
      const result = await cloudinary.v2.api.resources({
        type: 'upload', // Filtra para recursos carregados pelo usuário
        resource_type: 'image', // Filtra para imagens
        max_results: 10 // Número máximo de resultados a serem retornados
      });

      const images = result.resources.map(image => ({
        public_id: image.public_id,
        url: image.secure_url, // URL segura da imagem
        width: image.width,
        height: image.height
      }));

      return images;
    } catch (error) {
      console.error('Erro ao listar imagens:', error);
      throw error;
    }
  }

  async recbePost({ request, file }) {
    const uploadResponse = await this.uploadToCloudinary(file.buffer);

    return {
      message: 'Recebemos a imagem e ela foi enviada ao Cloudinary',
      filename: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      body: request.body,
      cloudinary_url: uploadResponse.url, // URL da imagem no Cloudinary
    };
  }

  private async uploadToCloudinary(buffer: Buffer): Promise<UploadApiResponse> {
    console.log('Cloudinary Config:', {
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    });
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(

        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      // Envia o buffer da imagem para o Cloudinary
      uploadStream.end(buffer);
    });
  }
}
