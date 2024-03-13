package corprate.priya.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import corprate.priya.model.Events;

public interface EventsRepository extends JpaRepository<Events, String> {


}
