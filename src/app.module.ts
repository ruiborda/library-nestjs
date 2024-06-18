import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookData } from './book/data/book.data';
import { AuthorModule } from './author/author.module';
import { AuthorData } from './author/data/author.data';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://root:password@mongo:27017/',
      synchronize: true,
      entities: [BookData, AuthorData],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    BookModule,
    AuthorModule,
  ],
})
export class AppModule {
}
