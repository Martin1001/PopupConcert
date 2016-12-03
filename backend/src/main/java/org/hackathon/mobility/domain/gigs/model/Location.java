package org.hackathon.mobility.domain.gigs.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
public class Location {

    String name;
    Double lat;
    Double lon;
    String description;

    String bvgId;

}
