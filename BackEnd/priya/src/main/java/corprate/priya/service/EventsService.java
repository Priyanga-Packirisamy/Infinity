package corprate.priya.service;

import corprate.priya.dto.request.EventsRequest;
import corprate.priya.dto.response.EventsListResponse;
import corprate.priya.dto.response.EventsResponse;


public interface EventsService {

    EventsResponse createEvents(EventsRequest event);

    EventsListResponse getAllEvents();

    EventsResponse updateEvents(String eventid, EventsRequest request);

    EventsResponse deleteEvents(String eventid);
}
