import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorData } from './data/author.data';
import { ObjectId } from 'mongodb';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorData)
    private readonly authorDataRepository: Repository<AuthorData>,
  ) {
  }

  async create(createAuthorInput: CreateAuthorInput): Promise<AuthorData> {
    const newAuthorData = this.authorDataRepository.create({
      ...createAuthorInput,
    });
    return this.authorDataRepository.save(newAuthorData);
  }

  findAll() {
    return this.authorDataRepository.find();
  }

  findOne(id: string) {
    return this.authorDataRepository.findOne({
      where: { _id: new ObjectId(id) },
    });
  }

  update(id: string, updateAuthorInput: UpdateAuthorInput) {
    const response = this.authorDataRepository.update(
      { _id: new ObjectId(id) },
      {
        ...updateAuthorInput,
      },
    );
    return response.then((res) => {
      console.log(res);
      return this.authorDataRepository.findOne({
        where: { _id: new ObjectId(id) },
      });
    });
  }

  async remove(id: string): Promise<AuthorData> {
    const findAuthor = await this.authorDataRepository.findOne({
      where: { _id: new ObjectId(id) },
    });

    if (!findAuthor) {
      return null;
    }

    await this.authorDataRepository.delete({ _id: new ObjectId(id) });
    return findAuthor;
  }

  async getManyAuthors(ids: string[]): Promise<AuthorData[]> {
    const objectIds = ids.map((id) => new ObjectId(id));

    return this.authorDataRepository.find({
      where: {
        _id: {
          // @ts-ignore
          $in: objectIds,
        },
      },
    });
  }
}
