import { join } from 'path';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { PageModule } from '@nestjs-hexagonal/editor';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: 'mongodb+srv://storefront:1234@test.b2ksz.mongodb.net/storefront-test?retryWrites=true&w=majority',
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: false,
      introspection: true,
      cache: 'bounded',
      definitions: {
        path: join(process.cwd(), 'libs/editor/src/lib/generated.ts'),
        emitTypenameField: true,
        outputAs: 'class',
        defaultScalarType: 'unknown',
      },
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      formatError: ({ message, path, extensions }) => {
        return {
          message,
          path,
          code: extensions && extensions.code,
        };
      },
    }),
    PageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
