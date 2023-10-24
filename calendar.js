// Fetch the events from the JSON file
fetch('events.json')
    .then(response => response.json())
    .then(events => {
        // Get the calendar table
        let calendarTable = document.getElementById('calendar');

        // Create a row for each event
        events.forEach(function(event) {
            let row = document.createElement('tr');
            calendarTable.appendChild(row);

            // Create a cell for the event title and link
            let titleCell = document.createElement('td');
            let link = document.createElement('a');
            link.href = event.link;
            link.textContent = event.title;
            titleCell.appendChild(link);
            row.appendChild(titleCell);
        });
    });