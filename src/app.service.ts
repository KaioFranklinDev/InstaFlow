import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      mensagem:"hallow"
    };
  }
  recbePost({request , file}) {
    return {
      message: 'Recebemos a imagem',
      filename: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      body: request.body,
    };
  }
}

