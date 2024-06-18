import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class AssignAuthorsToBookInput {
  @Field(() => ID)
  bookId: string;

  @Field(() => [ID])
  authorIds: string[];
}
