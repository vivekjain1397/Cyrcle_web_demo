function initMap() {
      var APPLICATION_ID = 'IYRGCR7MUA';
      var SEARCH_ONLY_API_KEY = 'd4e02a36563c6739e4ff189f9bacb8d8';
      var INDEX_NAME = 'dev_POST_WEBDEV';
      var PARAMS = {hitsPerPage: 60};

      // Client + Helper initialization
      var algolia = algoliasearch(APPLICATION_ID, SEARCH_ONLY_API_KEY);
      var algoliaHelper = algoliasearchHelper(algolia, INDEX_NAME, PARAMS);

        console.log('random');

        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.7749, lng: -122.4194},
          zoom: 13
        });
        var input = (document.getElementById('pac-input'));

        
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        

        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);
        //markers with algolia
        var markers = [];
        algoliaHelper.on('result', function(content, state) {

          var i;
          for(i = 0; i < content.hits.length; ++i){

            var hit = content.hits[i];
            //console.log(hit.postLocation.lat);
            var marker = new google.maps.Marker({
              position: {lat: hit.postLocation.lat, lng: hit.postLocation.lng},
              map: map
             });
            markers.push(marker);
          }
          
          console.log('passed for loop');
        });


        autocomplete.addListener('place_changed', function() {
         // infowindow.close();
          
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
          
          
          

        // Sets a listener on a radio button to change the filter type on Places
        // Autocomplete.
        
      });
        algoliaHelper.search();
}
