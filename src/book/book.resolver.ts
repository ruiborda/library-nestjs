import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { BookService } from './book.service';
import { BookType } from './types/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { BookConverter } from './converter/book.converter';
import { AssignAuthorsToBookInput } from './dto/assign-authors-to-book-input';
import { AuthorService } from '../author/author.service';
import { AuthorConverter } from '../author/converter/author.converter';

@Resolver(() => BookType)
export class BookResolver {
  constructor(
    private readonly bookService: BookService,
    private readonly authorService: AuthorService,
  ) {
  }

  @Mutation(() => BookType)
  async createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
    return this.bookService.create(createBookInput).then(BookConverter.toBookType);
  }

  @Query(() => [BookType], { name: 'books' })
  findAll() {
    return this.bookService.findAll().then(BookConverter.toBookTypes);
  }

  @Query(() => BookType, { name: 'book' })
  async findOne(@Args('id', { type: () => String }) id: string): Promise<BookType> {
    return this.bookService.findOne(id).then(BookConverter.toBookType);
  }

  @Mutation(() => BookType)
  updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
    return this.bookService.update(updateBookInput.id, updateBookInput).then(BookConverter.toBookType);
  }

  @Mutation(() => BookType)
  removeBook(@Args('id', { type: () => String }) id: string) {
    return this.bookService.remove(id).then(BookConverter.toBookType);
  }

  @Mutation(() => BookType)
  asignAuthorstoBook(@Args('assignAuthorsToBookInput') assignAuthorsToBookInput: AssignAuthorsToBookInput) {
    const { bookId, authorIds } = assignAuthorsToBookInput;
    return this.bookService.assignAuthorsToBook(bookId, authorIds).then(BookConverter.toBookType);
  }

  @ResolveField()
  async authors(@Parent() book: BookType) {
    const result = await this.authorService.getManyAuthors(book.authors).then(AuthorConverter.toAuthorTypes)
    console.log(result);
    return result;
  }
}
