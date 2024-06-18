import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class BookData {
  @PrimaryColumn()
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  title: string;

  @Column()
  publishedDate: string;

  @Column()
  authors: string[];
}
