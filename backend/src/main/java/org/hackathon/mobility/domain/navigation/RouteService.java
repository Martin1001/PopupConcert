package org.hackathon.mobility.domain.navigation;

import org.hackathon.mobility.domain.gigs.GigService;
import org.hackathon.mobility.domain.gigs.model.Gig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RouteService {

    @Autowired
    private GigService gigService;

    @Autowired
    private BvgApiClient bvgApiClient;

    public GigRoute routeToGig(String gigId, Double fromLat, Double fromLon) {
        Gig gig = gigService.gigById(gigId);
        return bvgApiClient.fetchRoute(gig.getLocation().getBvgId(), fromLat, fromLon);
    }

}
