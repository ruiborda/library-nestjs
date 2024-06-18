import { ObjectType, Field, ID } from '@nestjs/graphql';
import { AuthorType } from '../../author/type/author.type';

@ObjectType()
export class BookType {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  publishedDate: string;

  @Field(() => [AuthorType])
  authors: string[];
}
