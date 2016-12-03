export default class MainController {

    constructor($log, $scope, $timeout, NgMap) {
        'ngInject';
        this.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQpWnOkp6VOAUs_1AZlTZSCMe1R8GDhg0";
        this.$log = $log;
        this.$timeout = $timeout;

        NgMap.getMap().then((map) => {
            this.map = map;
            this.marker = map.markers[0];
        });
    }

    centerChanged = (event) => {
        this.$log.info('center changed');
    };
    click = (event) => {
        this.$log.info('click');
        this.map.setCenter(this.marker.getPosition());
    }
}

