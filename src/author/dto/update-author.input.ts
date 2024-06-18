import { CreateAuthorInput } from './create-author.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAuthorInput extends PartialType(CreateAuthorInput) {
  @Field(() => String, { description: 'Example field (placeholder)', nullable: true })
  id: string;
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;
}
