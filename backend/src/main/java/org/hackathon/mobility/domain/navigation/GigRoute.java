package org.hackathon.mobility.domain.navigation;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.hackathon.mobility.domain.gigs.model.RoutingStep;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
public class GigRoute {

    private String totalPrice;
    private List<RoutingStep> routingSteps;

}
