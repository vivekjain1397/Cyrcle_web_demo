
      /*$(document).ready(function () {
  // INITIALIZATION
  // ==============
      var APPLICATION_ID = 'IYRGCR7MUA';
      var SEARCH_ONLY_API_KEY = 'd4e02a36563c6739e4ff189f9bacb8d8';
      var INDEX_NAME = 'dev_POST_WEBDEV';
      var PARAMS = {hitsPerPage: 60};

      // Client + Helper initialization
      var algolia = algoliasearch(APPLICATION_ID, SEARCH_ONLY_API_KEY);
      var algoliaHelper = algoliasearchHelper(algolia, INDEX_NAME, PARAMS);
      
      // Map initialization
      var map = new google.maps.Map($map.get(0), {
        streetViewControl: false,
        mapTypeControl: false,
        zoom: 4,
        minZoom: 3,
        maxZoom: 12,
        styles: [{stylers: [{hue: '#3596D2'}]}]
      });
      
      var markers = [];
      var mark
      var fitmap = true;
       algoliaHelper.on('result', function(content,state){
        var i;

        for(i = 0; i < content.hits.length; ++i){
          var hit = content.hits[i];

          var marker = new google.maps.Marker({
            position: {lat: hit.postLocation.lat, lng: hit.postLocation.lng},
            map: map
          });
        markers.push(marker);
        }

        if(fitmap){
          var mapBounds = new google.maps.LatLngBounds();
          for (i = 0; i < markers.length; i++){
            mapBounds.extend(markers[i].getPosition());
          }
          map.fitBounds(mapBounds);
        }

       });

       markers.setMap(map);


});*/


