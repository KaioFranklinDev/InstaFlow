import { Controller, Get, Post, UseInterceptors, UploadedFile, Req } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('abacatinho')
  getHello() {
    return this.appService.getHello();
  }

  @Post('abacatinho')
  @UseInterceptors(FileInterceptor('file'))
  recbePost(@UploadedFile() file: Express.Multer.File, @Req() request: Request) {
    return this.appService.recbePost({ request, file });
  }
}
