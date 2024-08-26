import { Controller, Get, Post, UseInterceptors, UploadedFile, Req } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('list-img')
  async getImages() {
    return this.appService.listImages();
  }

  @Post('send-img')
  @UseInterceptors(FileInterceptor('file'))
  recbePost(@UploadedFile() file: Express.Multer.File, @Req() request: Request) {
    return this.appService.recbePost({ request, file });
  }
}

