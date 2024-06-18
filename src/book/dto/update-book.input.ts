import { CreateBookInput } from './create-book.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
  @Field(() => String, { description: 'Example field (placeholder)' })
  id: string;
  @Field(() => String, { description: 'Example field (placeholder)' })
  title: string;
  @Field(() => String, { description: 'Example field (placeholder)' })
  publishedDate: string;
}
