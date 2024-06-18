import { BookType } from '../types/book.entity';
import { BookData } from '../data/book.data';

export class BookConverter {
  public static toBookType(BookData: BookData): BookType {
    if (!BookData) {
      return {
        id: '',
        title: '',
        authors: [],
        publishedDate: '',
      };
    }
    return {
      id: BookData._id ? BookData._id.toString() : '',
      title: BookData.title,
      authors: BookData.authors,
      publishedDate: BookData.publishedDate,
    };
  }

  public static toBookTypes(BookDatas: BookData[]): BookType[] {
    return BookDatas.map((BookData) => BookConverter.toBookType(BookData));
  }
}
