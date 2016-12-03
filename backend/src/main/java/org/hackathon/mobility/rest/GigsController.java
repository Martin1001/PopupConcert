package org.hackathon.mobility.rest;

import org.hackathon.mobility.domain.gigs.GigService;
import org.hackathon.mobility.domain.gigs.model.Gig;
import org.hackathon.mobility.domain.gigs.model.Location;
import org.hackathon.mobility.domain.gigs.model.Performer;
import org.hackathon.mobility.domain.gigs.model.RoutingStep;
import org.hackathon.mobility.domain.navigation.GigRoute;
import org.hackathon.mobility.domain.navigation.RouteService;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class GigsController {

    @Autowired
    private GigService gigService;

    @Autowired
    private RouteService routeService;

    @GetMapping(path = "/gigs")
    public List<Gig> gigs(){

        return gigService.allGigs();
    }

    @GetMapping(path = "/gigs/route/{gigId}")
    public GigRoute gig(@PathVariable String gigId,
                        @RequestParam("fromLat") Double fromLat,
                        @RequestParam("fromLon") Double fromLon) {

        return routeService.routeToGig(gigId, fromLat, fromLon);

    }
}
