function initMap() {
        console.log('random');
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.7749, lng: -122.4194},
          zoom: 13
        });
        var input = (
            document.getElementById('pac-input'));

        
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        

        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);

        var marker = new google.maps.Marker({
          map: map,
        });

        autocomplete.addListener('place_changed', function() {
         // infowindow.close();
          marker.setVisible(false);
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
          }

          // If the place has a geometry, then present it on a map.
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
          }
          
          marker.setPosition(place.geometry.location);
          marker.setVisible(true);

        });

        // Sets a listener on a radio button to change the filter type on Places
        // Autocomplete.
        
      }
