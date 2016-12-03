package org.hackathon.mobility.domain.gigs.model;

import lombok.Builder;
import lombok.Data;


@Builder
@Data
public class RoutingStep {

    String name;
    Line line;
    Double lat;
    Double lon;
    RoutingType routingType;

    @Data
    @Builder
    public static class Line {
        String name;
        String direction;
    }
    public enum RoutingType{
        WALK, UBAHN, SBAHN, BUS
    }
}
