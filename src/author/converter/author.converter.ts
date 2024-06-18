import { AuthorType } from '../type/author.type';
import { AuthorData } from '../data/author.data';

export class AuthorConverter {
  public static toAuthorType(AuthorData: AuthorData): AuthorType {
    if (!AuthorData) {
      return {
        id: '',
        name: '',
      };
    }
    return {
      id: AuthorData._id ? AuthorData._id.toString() : '',
      name: AuthorData.name,
    };
  }

  public static toAuthorTypes(AuthorDatas: AuthorData[]): AuthorType[] {
    return AuthorDatas.map((AuthorData) => AuthorConverter.toAuthorType(AuthorData));
  }
}
