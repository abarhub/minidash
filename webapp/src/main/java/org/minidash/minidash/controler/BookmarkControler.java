package org.minidash.minidash.controler;

import org.minidash.minidash.bookmark.dto.ListBookmarkDto;
import org.minidash.minidash.bookmark.service.BookmarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookmarkControler {

    @Autowired
    private BookmarkService bookmarkService;

    @GetMapping("/api/bookmark")
    public ListBookmarkDto getBookmark() {
        return bookmarkService.getBookmarkDto();
    }

}
