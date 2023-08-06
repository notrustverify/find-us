function getSrcFromImage(image) {
  let image_text = `Picture of NTV sticker at position ${image.lat}/${image.long}`
  return `<img src="images/${image.name}" alt="${image_text}" title="${image_text}" />`
}

function loadMap() {

  let map = L.map('map').setView([40.11, -0.53], 4);

  imagesList = []

  fetch("images.json")
    .then(data => data.json())
    .then(images => {
      console.log(`Successfully retrieved ${images.length} images`);
      images.forEach(image => {
        image.marker = L.marker([image.lat, image.long]);
        image.marker.bindPopup(getSrcFromImage(image), { maxWidth: '30vmax', maxHeight: '30vmax' }); 
        image.marker.addTo(map);
        imagesList.push(image);
      });
      return images
    })
    .then(images => {
      if (!images || images.legnth == 0) {
        map.setView([40.11, -0.53], 4);
        return
      }
      
      let lats = images.map(i => i.lat)
      let longs = images.map(i => i.long)
      let topBound = Math.max.apply(Math, lats);
      let downBound = Math.min.apply(Math, lats);
      let rightBound = Math.max.apply(Math, longs);
      let leftBound = Math.min.apply(Math, longs);
    
      // Transition to new box of interest
      map.flyToBounds([[topBound, rightBound], [downBound, leftBound]]);
    })
    .catch(err => console.error(`failed to collect and process image list: ${err}`));

  document.querySelector(".leaflet-popup-pane").addEventListener("load", function (event) {
    var tagName = event.target.tagName,
        popup = map._popup; // Currently open popup, if any.
  
    if (tagName === "IMG" && popup) {
      popup.update();
    }
  }, true); // Capture the load event, because it does not bubble.

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
  }).addTo(map);
}

whenDocumentLoaded(loadMap)

function whenDocumentLoaded(action) {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", action);
	} else {
		// `DOMContentLoaded` already fired
		action();
	}
}