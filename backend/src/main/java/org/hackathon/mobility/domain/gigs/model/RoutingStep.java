package org.hackathon.mobility.domain.gigs.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;


@Builder
@Data
@AllArgsConstructor
public class RoutingStep {

    String name;
    Line line;
    Double lat;
    Double lon;
    RoutingType routingType;
    String bvgId;


    @Data
    @Builder
    @AllArgsConstructor
    public static class Line {
        String name;
        String direction;

    }
    public enum RoutingType{
        WALK, UBAHN, SBAHN, BUS
    }
}
