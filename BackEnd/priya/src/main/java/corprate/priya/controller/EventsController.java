package corprate.priya.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import corprate.priya.dto.request.EventsRequest;
import corprate.priya.dto.response.EventsListResponse;
import corprate.priya.dto.response.EventsResponse;
import corprate.priya.service.EventsService;
import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/events")
@PreAuthorize("hasAnyRole('ADMIN','USER')")
@RequiredArgsConstructor
public class EventsController {

    private final EventsService eventsservice;

    @PreAuthorize("hasAuthority('admin:create')")
    @PostMapping("/add")
    public ResponseEntity<?> createEvents(@RequestBody EventsRequest eventsrequest){
        EventsResponse response = new EventsResponse();

        try{
            response = eventsservice.createEvents(eventsrequest);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllEvents(){

        EventsListResponse eventsListResponse = new EventsListResponse();

        try{
            eventsListResponse = eventsservice.getAllEvents();
            return new ResponseEntity<>(eventsListResponse, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(eventsListResponse, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PreAuthorize("hasAuthority('admin:create')")
    @PutMapping("/put")
    public ResponseEntity<EventsResponse> updateEvents(@RequestParam String eventsid, @RequestBody EventsRequest request) {
        EventsResponse response = new EventsResponse();
        try {
            response = eventsservice.updateEvents(eventsid, request);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.setMessage("Failed to update addon");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PreAuthorize("hasAuthority('admin:create')")
    @DeleteMapping("/delete")
    public ResponseEntity<EventsResponse> deleteEvents(@RequestParam String eventid){

        EventsResponse response = new EventsResponse();

        try{
            response = eventsservice.deleteEvents(eventid);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        catch(Exception e){
            response.setMessage("Failed to delete event: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

}
