package org.hackathon.mobility.domain.gigs.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.joda.time.DateTime;

import java.util.List;

@Data
@AllArgsConstructor
@Builder
public class Gig {

        private String id;
        private Performer performer;
        private String gigName;
        private Location location;
        private DateTime time;
        private String genre;
        private String description;
        private Integer coming;
        private String youtubeId;

}
