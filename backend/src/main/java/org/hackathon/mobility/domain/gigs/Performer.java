package org.hackathon.mobility.domain.gigs;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Performer {

    private String name;
    private String picture;
    private String about;

}
