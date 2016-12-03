package org.hackathon.mobility.domain;

import lombok.Builder;
import lombok.Data;
import org.joda.time.DateTime;

import java.util.List;

@Data
@Builder
public class Gig {

        private String id;
        private Performer performer;
        private String gigName;
        private Location location;
        private DateTime time;
        private List<String> genres;
        private String description;
        private Integer coming;

}
