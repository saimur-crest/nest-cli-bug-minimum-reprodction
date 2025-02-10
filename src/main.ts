import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const documentBuilder = new DocumentBuilder();
  documentBuilder.setTitle('Minimum reproduction');
  documentBuilder.setVersion('1.0');

  const document = SwaggerModule.createDocument(app, documentBuilder.build());

  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
