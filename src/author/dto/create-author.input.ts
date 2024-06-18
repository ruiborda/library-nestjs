import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
  @Field(() => String, { description: 'Example field (placeholder)', nullable: true })
  id?: string;
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;
}
