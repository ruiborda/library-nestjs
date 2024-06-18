import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class AuthorData {
  @PrimaryColumn()
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;
}
