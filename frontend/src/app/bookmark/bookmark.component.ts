import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {ListeBookmarkModel} from "../model/listeBookmark.model";

@Component({
    selector: 'app-bookmark',
    templateUrl: './bookmark.component.html',
    styleUrls: ['./bookmark.component.scss'],
    standalone: false
})
export class BookmarkComponent implements OnInit {

  listeBookmark: ListeBookmarkModel | null = null;

  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
    this.http.get<ListeBookmarkModel>('api/bookmark').subscribe(data => {
      console.log("data bookmark", data);
      this.listeBookmark = data;
    });

  }

}
