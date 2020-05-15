import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BookmarksService } from './../../services/bookmarks.service';
import { Bookmark } from './../../models/Bookmark';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
})
export class BookmarksComponent implements OnInit {
  bookmark: Bookmark = {
    name: '',
    label: '',
    url: '',
  };
  term: any;

  bookmarks: Bookmark[];
  currentBookmark: Bookmark = {
    name: '',
    label: '',
    url: '',
  };

  isEdit: boolean;
  showBookmarkForm: boolean = false;
  showURL: boolean = false;
  viewBookmarks: boolean = true;
  favouriteBookmark: boolean = false;
  @ViewChild('bookmarkForm') form: any;

  constructor(private bookmarkService: BookmarksService, private store: StorageMap) {}

  ngOnInit() {
    this.getUrlPreview('https://node.js');
    this.bookmarkService.getBookmark();
    console.log(this.bookmarks);
  }

  onSubmit({ value, valid }: { value: Bookmark; valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      this.bookmarkService.addBookmark(value);

      this.form.reset();
    }
  }

  // console.log(this.bookmarks)

  editBookmark(bookmark: Bookmark) {
    this.currentBookmark = bookmark;
    this.isEdit = true;
  }

  // addFavourite(bookmark: Bookmark) {
  //   this.bookmarks = this.bookmarks.map(data => {
  //     if (data.name == bookmark.name)
  //     return data;
  //   });
  //   console.log(this.bookmarks);
  //   this.bookmarks
  // }

  updateBookmark(bookmark: Bookmark) {
    this.isEdit = false;
    this.currentBookmark = {
      name: '',
      label: '',
      url: '',
    };
  }
  removeBookmark(event: any) {
    console.log(event);
    this.bookmarks.splice(this.bookmarks.indexOf(event), 1);
  }

  getBookmarks() {
    return this.bookmarks;
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.bookmarks, event.previousIndex, event.currentIndex);
  }

  getUrlPreview(url) {
    fetch(
      `https://unfurl.io/api/v2/preview?api_token=z3zucQrmhcMhCNV0cQ2ZW2Of1AdN5rhSh4yBWV2ArOK5mhuGPZwPeR5lTWTE&url= ${url}`,
      {
        headers: {
          'Content-Type': 'applicaton/json',
          Accept: 'application/json',
        },
        method: 'get',
        mode: 'cors',
      }
    )
      .then((res) => res.json())
      .then((response) => console.log(response));
  }
}
