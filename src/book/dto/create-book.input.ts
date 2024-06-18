import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field(() => String, { description: 'Example field (placeholder)', nullable: true })
  id?: string;
  @Field(() => String, { description: 'Example field (placeholder)' })
  title: string;
  @Field(() => String, { description: 'Example field (placeholder)' })
  publishedDate: string;

  @Field(() => [ID], { defaultValue: [] })
  authors: string[];
}
