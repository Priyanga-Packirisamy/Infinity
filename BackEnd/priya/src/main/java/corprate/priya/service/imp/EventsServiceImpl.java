package corprate.priya.service.imp;

import corprate.priya.dto.request.EventsRequest;
import corprate.priya.dto.response.EventsListResponse;
import corprate.priya.dto.response.EventsResponse;
import corprate.priya.model.Events;
import corprate.priya.repository.EventsRepository;
import corprate.priya.service.EventsService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventsServiceImpl implements EventsService {

    @Autowired
    private EventsRepository eventsRepository;

    @Override
    public EventsResponse createEvents(EventsRequest event) {

        var eve = Events.builder()
                        .eventname(event.getEventname())
                        .description(event.getDescription())
                        .count(event.getCount())
                        .charge(event.getCharge())
                        .address(event.getAddress())
                        .city(event.getCity())
                        .pincode(event.getPincode())
                        .facility(event.getFacility())
                        .build();

        eventsRepository.save(eve);

        return EventsResponse.builder().message("Events added successfully").build();
    }

    @Override
    public EventsListResponse getAllEvents(){

        List<Events> event = eventsRepository.findAll();
        return EventsListResponse.builder()
            .events(event)
            .build();
    }

    @Override
    public EventsResponse updateEvents(String eventsid, EventsRequest EventsRequest) {
        EventsResponse response = new EventsResponse();
        Optional<Events> EventsOptional = eventsRepository.findById(eventsid);
        if (EventsOptional.isPresent()) {
            Events events = EventsOptional.get();
            // Update Events properties from the request
            events.setEventname(EventsRequest.getEventname());
            events.setDescription(EventsRequest.getDescription());
            events.setCount(EventsRequest.getCount());
            events.setCharge(EventsRequest.getCharge());
            events.setAddress(EventsRequest.getAddress());
            events.setCity(EventsRequest.getCity());
            events.setPincode(EventsRequest.getPincode());
            events.setFacility(EventsRequest.getFacility());
            // Save the updated Events
            eventsRepository.save(events);
            response.setMessage("Events updated successfully");
        } else {
            response.setMessage("Events not found");
        }
        return response;
    }

    @Override
    public EventsResponse deleteEvents(String eventid){
        Optional<Events> eventsOptional = eventsRepository.findById(eventid);

        if(!eventsOptional.isPresent()){
            return EventsResponse.builder().message("Event not found").build();
        }

        eventsRepository.deleteById(eventid);

        return EventsResponse.builder().message("Events deleted").build();
    }

    // Other CRUD methods can be implemented similarly
}

