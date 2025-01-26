import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);


  app.enableCors();


  const frontendDistPath = join(__dirname, '..', '..', '..', 'frontend', 'src', 'app');
  const frontendCSSPath = join(__dirname, '..', '..', '..', 'frontend', 'src', 'app')
  app.useStaticAssets(frontendCSSPath);
  app.setBaseViewsDir(frontendDistPath);


  app.use((req, res) => {
    res.sendFile(join(frontendDistPath, 'app.component.html'));
    res.sendFile(join(frontendCSSPath, 'app.component.css'))
  });

  await app.listen(3000);
  console.log(`Server running in port 3000.`);
}
bootstrap();
