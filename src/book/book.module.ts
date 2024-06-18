import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookData } from './data/book.data';
import { AuthorModule } from '../author/author.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookData]),
    AuthorModule,
  ],
  providers: [BookResolver, BookService],
})
export class BookModule {
}
