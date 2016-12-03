package org.hackathon.mobility.domain.gigs;


import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.hackathon.mobility.domain.NotFoundException;
import org.hackathon.mobility.domain.gigs.model.Gig;
import org.joda.time.DateTimeComparator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class GigService {

    private static final Logger log = LoggerFactory.getLogger(GigService.class);

    @Value("data.json")
    private ClassPathResource gigsFile;

    @Autowired
    private ObjectMapper objectMapper;

    private List<Gig> gigs = new ArrayList<>();


    @PostConstruct
    private void readGigs(){
        try {
            this.gigs = objectMapper.readValue( gigsFile.getInputStream(), new TypeReference<List<Gig>>() {});
            Collections.sort(gigs, (a,b) -> DateTimeComparator.getInstance().compare(a.getTime(), b.getTime()));
        } catch (IOException e) {
            log.error("IO Exception occured while parsing fixtures file from classpath location {}", gigsFile.getPath(), e);
            throw new IllegalStateException(e);
        }
    }

    /**
     * All Gigs available - sorted
     * @return
     */
    public List<Gig> allGigs(){
        return gigs;
    }

    public Gig gigById(String gigId) {
        return this.gigs.stream().filter(g -> g.getId().equals(gigId)).findFirst()
            .orElseThrow(() -> new NotFoundException("Gig couldn't be found with id: " + gigId));
    }
}
