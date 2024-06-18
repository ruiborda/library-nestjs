import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { InjectRepository } from '@nestjs/typeorm';
import { BookData } from './data/book.data';
import { Repository, UpdateResult } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookData)
    private bookDataRepository: Repository<BookData>,
  ) {
  }

  async create(createBookInput: CreateBookInput): Promise<BookData> {
    const newBookData = this.bookDataRepository.create({
      ...createBookInput,
    });
    return this.bookDataRepository.save(newBookData);
  }

  findAll() {
    return this.bookDataRepository.find();
  }

  async findOne(id: string): Promise<BookData> {
    return this.bookDataRepository.findOne({
      where: { _id: new ObjectId(id) },
    });
  }

  async update(id: string, updateBookInput: UpdateBookInput): Promise<BookData> {
    const response = this.bookDataRepository.update(
      { _id: new ObjectId(id) },
      {
        ...updateBookInput,
      },
    );
    return response.then((res) => {
      return this.bookDataRepository.findOne({
        where: { _id: new ObjectId(id) },
      });
    });
  }

  async remove(id: string) {
    const findBook = await this.bookDataRepository.findOne({
      where: { _id: new ObjectId(id) },
    });

    console.log(findBook)

    if (!findBook) {
      return null;
    }

    await this.bookDataRepository.delete({ _id: new ObjectId(id) });
    return findBook;
  }

  async assignAuthorsToBook(bookId: string, authorIds: string[]): Promise<BookData> {
    const book = await this.bookDataRepository.findOne({
      where: { _id: new ObjectId(bookId) },
    });

    book.authors = [...book.authors, ...authorIds];
    return this.bookDataRepository.save(book);
  }
}
