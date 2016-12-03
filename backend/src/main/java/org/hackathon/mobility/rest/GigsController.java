package org.hackathon.mobility.rest;

import org.hackathon.mobility.domain.gigs.model.Gig;
import org.hackathon.mobility.domain.gigs.model.Location;
import org.hackathon.mobility.domain.gigs.model.Performer;
import org.hackathon.mobility.domain.gigs.model.RoutingStep;
import org.joda.time.DateTime;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class GigsController {

    @GetMapping(path = "/gigs")
    public List<Gig> gigs(){

        final List<Gig> res = givenMockedGigs();
        return res;
    }

    @GetMapping(path = "/gigs/{gigId}")
    public Gig gig(@PathVariable String gigId) {
        final Gig res = givenGigWithRoute();
        return res;
    }

    private Gig givenGigWithRoute() {
        final Gig res = givenMockedGigs().get(0);
        res.setRoutingStep(
            Arrays.asList(
            RoutingStep.builder()
                .name("Görlitzer Bhf")
                .line(RoutingStep.Line.builder().direction("Pankow").name("U2").build())
                .lat(1.2D)
                .lon(1.2D)
                .routingType(RoutingStep.RoutingType.UBAHN)
                .build()
            ));
        return res;
    }


    private List<Gig> givenMockedGigs() {
        final Gig gig = Gig.builder()
            .coming(17)
            .description("Rock meets electronic")
            .genres(Arrays.asList("Rcok", "Electronic"))
            .gigName("Ev Gig")
            .time(DateTime.now().plusDays(3).withTime(20, 15, 0,0))
            .performer(Performer.builder()
                    .name("The Bootstrappers")
                    .about("Berlin local band with absolutely no tradition")
                    .picture("https://images.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Mad88a424c7888df061317a3ed891125aH0%26pid%3D15.1&f=1")
                    .build()
            )
            .location(Location.builder()
                .lat(0D)
                .lon(0D)
                .name("Görlitzer Bahnhof")
                .description("1st Floor")
                .build()
            )
            .build();
        final Gig gig_2 = Gig.builder()
            .coming(46)
            .description("Folks' Favorite")
            .genres(Arrays.asList("Folk"))
            .gigName("Urban Taste")
            .time(DateTime.now().plusDays(3).withTime(20, 15, 0,0))
            .performer(Performer.builder()
                    .name("The BootFolks")
                    .about("Traditional irish singer song writer")
//                    .picture()
                    .build()
            )
            .location(Location.builder()
                .lat(0D)
                .lon(0D)
                .name("Wahrschauer Straße")
                .description("Directly in front of the main entrance")
                .build()
            )
            .build();

        return Arrays.asList(gig, gig_2);
    }
}
