import {
  applyDecorators,
  Controller,
  Get,
  HttpCode,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postHello(): number {
    return 123;
  }

  @applyDecorators(Post('inside-apply-decorators'))
  postHelloInsideApplyDecorators(): number {
    return 123;
  }

  @applyDecorators(
    Post('inside-apply-decorators/even-with-explicit-status-code'),
    HttpCode(201),
  )
  postHelloInsideApplyDecoratorsEvenWithExplicitStatusCode(): number {
    return 123;
  }

  @applyDecorators(
    Post('inside-apply-decorators/status-code-outside-apply-decorators'),
  )
  @HttpCode(201)
  postHelloInsideApplyDecoratorsStatusCodeOutsideApplyDecorators(): number {
    return 123;
  }
}
