import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bookmark } from './../../models/Bookmark';
import { BookmarksService } from './../../services/bookmarks.service';

@Component({
  selector: 'app-bookmarkpost',
})
export class BookmarkpostComponent implements OnInit {
  bookmark: Bookmark = {
    name: '',
    label: '',
    url: '',
  };

  @Input() currentBookmark: Bookmark;
  @Input() favouriteCurrentBookmark: Bookmark;

  @Output() updatedBookmark: EventEmitter<Bookmark> = new EventEmitter();
  @Input() isEdit: boolean;

  constructor(private bookmarkService: BookmarksService) {}

  ngOnInit(): void {}
}
