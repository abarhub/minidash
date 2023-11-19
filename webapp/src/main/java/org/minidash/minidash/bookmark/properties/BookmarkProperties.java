package org.minidash.minidash.bookmark.properties;

import org.minidash.minidash.bookmark.model.BookmarkModel;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

//@Component
//@ConfigurationProperties(prefix = "bookmark")
public class BookmarkProperties {

    private List<BookmarkModel> listUrl;

    public List<BookmarkModel> getListUrl() {
        return listUrl;
    }

    public void setListUrl(List<BookmarkModel> listUrl) {
        this.listUrl = listUrl;
    }
}
