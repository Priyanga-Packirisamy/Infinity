package corprate.priya.dto.response;

import java.util.List;

import corprate.priya.model.Events;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EventsListResponse {

    private List<Events> events;
}
