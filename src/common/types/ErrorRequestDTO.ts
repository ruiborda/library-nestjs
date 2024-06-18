import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ErrorRequestDTO {
  @Field()
  message: string;
  field: string;
  tag: string;
  value: never;
  param: string;
}
