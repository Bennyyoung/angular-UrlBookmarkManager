import { Injectable } from '@angular/core';
import { Bookmark } from './../models/Bookmark';

@Injectable({
  providedIn: 'root',
})
export class BookmarksService {
  bookmarks: Bookmark[];
  favourites: Bookmark[];

  constructor() {
    (this.bookmarks = [
      {
        name: '',
        label: '',
        url: '',
      },
    ]),
      (this.favourites = []);
    console.log(this.bookmarks);
  }

  getBookmark(): Bookmark[] {
    return this.bookmarks;
  }

  addBookmark(bookmark: Bookmark) {
    this.bookmarks.unshift(bookmark);
  }

  updateBookmark(bookmark: Bookmark) {
    return this.bookmarks;
  }
}
