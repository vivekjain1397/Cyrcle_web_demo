app({
  appId: 'IYRGCR7MUA',
  apiKey: 'd4e02a36563c6739e4ff189f9bacb8d8',
  indexName: 'dev_POST_WEBDEV'
});

function app(opts) {
  var search = instantsearch({
    appId: opts.appId,
    apiKey: opts.apiKey,
    indexName: opts.indexName,
    urlSync: true
  });

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-input',
      placeholder: 'Search for products'
    })
  );

 search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    hitsPerPage: 16,
    templates: {
     item: getTemplate('hit'),
     empty: getTemplate('no-results')
    },
    transformData: function(hit) {
      hit.stars = [];
      for (var i = 1; i <= 5; ++i) {
        hit.stars.push(i <= hit.sellerRating);
      }
      return hit;
    }
  })
);
 

  search.addWidget(
    instantsearch.widgets.stats({
      container: '#stats'
    })
  );

  search.addWidget(
    instantsearch.widgets.sortBySelector({
      container: '#sort-by',
      autoHideContainer: true,
      indices: [{
        name: opts.indexName, label: 'Most relevant'
      }, {
        name: opts.indexName + '_price_asc', label: 'Lowest price'
      }, {
        name: opts.indexName + '_price_desc', label: 'Highest price'
      }]
    })
  );

  search.addWidget(
    instantsearch.widgets.pagination({
      container: '#pagination',
      scrollTo: '#search-input'
    })
  );

  search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#category',
      attributeName: 'categories',
      limit: 10,
      operator: 'or',
      templates: {
        header: getHeader('Category')
      }
    })
  );

  search.addWidget(
    instantsearch.widgets.rangeSlider({
      container: '#price',
      attributeName: 'price',
      templates: {
        header: getHeader('Price')
      }
    })
  );
  

search.addWidget(
  instantsearch.widgets.starRating({
    container: '#sellerRating',
    attributeName: 'sellerRating',
    
  })
);


  search.start();
}

function getTemplate(templateName) {
  return document.querySelector('#' + templateName + '-template').innerHTML;
}

function getHeader(title) {
  return '<h5>' + title + '</h5>';
}

function initMap() {
        //myLatlng = new google.maps.LatLng(postLocation.lat, postLocation.lng);
        //console.log(postLocation.lat);
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
          //position: {lat: postLocation.lat, lng: postLocation.lng},
          map: map
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