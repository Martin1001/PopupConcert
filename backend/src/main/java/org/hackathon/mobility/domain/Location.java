package org.hackathon.mobility.domain;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Location {

    String name;
    Double lat;
    Double lon;
    String description;

    String bvgId;
}
