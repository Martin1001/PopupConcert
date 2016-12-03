export default class MapController {

    constructor($log, $http, $timeout, NgMap) {
        'ngInject';
        this.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBQpWnOkp6VOAUs_1AZlTZSCMe1R8GDhg0";
        this.$log = $log;
        this.$http = $http;
        this.$timeout = $timeout;

        this.playlist = [];
        this.bandlist = [];

        this.$http.get('/api/v1/gigs')
            .then(res => {
                this.playlist = res.data;
                this.bandlist = res.data;
            });

        NgMap.getMap().then((map) => {
            this.map = map;
        });

    }

    centerChanged = (event) => {
        this.$log.info('center changed');
    };

    click = (event) => {
        this.$log.info('click');

        let lat = event.latLng.lat().toPrecision(8);
        let lon = event.latLng.lng().toPrecision(8);

        this.bandlist = this.playlist.filter(b => b.location.lat == lat && b.location.lon == lon);
    };

    getTime = (millis) => {
        return new Date(millis);
    };
}

