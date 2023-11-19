package org.minidash.minidash.bookmark.service;

import jakarta.annotation.PostConstruct;
import org.minidash.minidash.bookmark.dto.BookmarkDto;
import org.minidash.minidash.bookmark.dto.ListBookmarkDto;
import org.minidash.minidash.bookmark.model.ListBookmarkModel;
import org.minidash.minidash.bookmark.properties.BookmarkProperties;
import org.minidash.minidash.properties.AppProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class BookmarkService {

//    @Autowired
    private final BookmarkProperties bookmarkProperties;

    private ListBookmarkModel listBookmarkModel;

    public BookmarkService(AppProperties appProperties) {
        this.bookmarkProperties = Objects.requireNonNull(appProperties.getBookmark());
    }

    @PostConstruct
    public void init() {
        ListBookmarkModel listBookmarkModel = new ListBookmarkModel();
        listBookmarkModel.setListe(List.copyOf(bookmarkProperties.getListUrl()));
        this.listBookmarkModel = listBookmarkModel;
    }

    public ListBookmarkModel getBookmark() {
        return this.listBookmarkModel;
    }

    public ListBookmarkDto getBookmarkDto() {
        ListBookmarkModel bookmarkModel = getBookmark();
        ListBookmarkDto listBookmarkDto = new ListBookmarkDto();
        if (!CollectionUtils.isEmpty(bookmarkModel.getListe())) {
            listBookmarkDto.setListe(new ArrayList<>());
            for (var bookmark : bookmarkModel.getListe()) {
                BookmarkDto bookmarkDto = new BookmarkDto();
                bookmarkDto.setTitre(bookmark.getTitre());
                bookmarkDto.setUrl(bookmark.getUrl());
                listBookmarkDto.getListe().add(bookmarkDto);
            }
        }
        return listBookmarkDto;
    }

}
