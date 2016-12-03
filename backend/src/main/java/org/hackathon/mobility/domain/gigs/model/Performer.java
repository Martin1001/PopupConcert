package org.hackathon.mobility.domain.gigs.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class Performer {

    private String name;
    private String picture;
    private String about;

}
