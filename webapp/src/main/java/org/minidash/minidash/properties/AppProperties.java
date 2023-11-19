package org.minidash.minidash.properties;

import org.minidash.minidash.bookmark.properties.BookmarkProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "app")
public class AppProperties {

    private VacancesProperties vacances;

    private String repertoireDonnees;

    private MeteoProperties meteo;

    private BookmarkProperties bookmark;

    public VacancesProperties getVacances() {
        return vacances;
    }

    public void setVacances(VacancesProperties vacances) {
        this.vacances = vacances;
    }

    public String getRepertoireDonnees() {
        return repertoireDonnees;
    }

    public void setRepertoireDonnees(String repertoireDonnees) {
        this.repertoireDonnees = repertoireDonnees;
    }

    public MeteoProperties getMeteo() {
        return meteo;
    }

    public void setMeteo(MeteoProperties meteo) {
        this.meteo = meteo;
    }

    public BookmarkProperties getBookmark() {
        return bookmark;
    }

    public void setBookmark(BookmarkProperties bookmark) {
        this.bookmark = bookmark;
    }
}
