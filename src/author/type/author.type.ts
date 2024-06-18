import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class AuthorType {
  @Field(() => ID)
  id?: string;

  @Field()
  name?: string;
}
