package org.hackathon.mobility.domain.navigation;


import org.junit.Test;


public class BvgApiClientTest {

    private BvgApiClient client = new BvgApiClient();

    @Test
    public void fetchRoute() {
        final GigRoute res = client.fetchRoute("009013102", 52.500868D, 13.436392);

        System.out.println("Res is: " + res);

    }

}