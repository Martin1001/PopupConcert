package org.hackathon.mobility.domain.gigs.model;

import org.joda.time.DateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

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

        public String getBeautifiedTime(){
                if (this.time == null) {
                        return "";
                }
                if(this.time.isBefore(DateTime.now().millisOfDay().withMaximumValue())){
                        return "Today";
                }
                if(this.time.isBefore(DateTime.now().plusDays(1).millisOfDay().withMaximumValue())){
                        return "Tomorrow";
                }
                return "";
        }

}
