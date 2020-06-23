import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { GraphQLSchemaHost } from '@nestjs/graphql';

import { AppModule } from './app.module';

async function main() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}

main();
