import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorData } from './data/author.data';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorData])],
  providers: [AuthorResolver, AuthorService],
  exports: [AuthorService],
})
export class AuthorModule {}
