import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { AuthorType } from './type/author.type';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { AuthorConverter } from './converter/author.converter';

@Resolver(() => AuthorType)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Mutation(() => AuthorType)
  createAuthor(@Args('createAuthorInput') createAuthorInput: CreateAuthorInput) {
    return this.authorService.create(createAuthorInput).then(AuthorConverter.toAuthorType);
  }

  @Query(() => [AuthorType], { name: 'authors' })
  findAll() {
    return this.authorService.findAll().then(AuthorConverter.toAuthorTypes);
  }

  @Query(() => AuthorType, { name: 'author' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.authorService.findOne(id).then(AuthorConverter.toAuthorType);
  }

  @Mutation(() => AuthorType)
  updateAuthor(@Args('updateAuthorInput') updateAuthorInput: UpdateAuthorInput) {
    return this.authorService.update(updateAuthorInput.id, updateAuthorInput).then(AuthorConverter.toAuthorType);
  }

  @Mutation(() => AuthorType)
  removeAuthor(@Args('id', { type: () => String }) id: string) {
    return this.authorService.remove(id).then(AuthorConverter.toAuthorType);
  }
}
