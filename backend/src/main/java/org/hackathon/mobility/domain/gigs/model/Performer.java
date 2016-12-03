package org.hackathon.mobility.domain.gigs.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Performer {

    private String name;
    private String picture;
    private String about;

}
