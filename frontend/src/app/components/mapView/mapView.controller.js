import modalTemplate from './mapView.modal.html';

export default class MapController {

    constructor($log, $http, $timeout, NgMap, $uibModal) {
        'ngInject';
        this.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBQpWnOkp6VOAUs_1AZlTZSCMe1R8GDhg0";
        this.$log = $log;
        this.$http = $http;
        this.$timeout = $timeout;
        this.$uibModal = $uibModal;

        this.playlist = [];
        this.bandlist = [];
        this.currentGenres = [];

        this.$http.get('/api/v1/gigs')
            .then(res => {
                this.playlist = res.data;
                this.bandlist = res.data;
                this.calCurrentGenres();
            });

        NgMap.getMap().then((map) => {
            this.map = map;
        });

    }

    centerChanged = (event) => {
        this.$log.info('center changed');
    };

    click = (event) => {
        this.$log.info('Location selected');

        let lat = event.latLng.lat().toPrecision(8);
        let lon = event.latLng.lng().toPrecision(8);

        this.bandlist = this.playlist.filter(b => b.location.lat == lat && b.location.lon == lon);
        this.calCurrentGenres();
    };

    calCurrentGenres(){
        this.currentGenres = [];
        this.bandlist.forEach(e => {
            this.currentGenres.push(e.genre);
        });

        this.currentGenres = this.currentGenres.filter((item, pos) => {
            return this.currentGenres.indexOf(item) == pos;
        });
        console.info(this.currentGenres);
    }

    getTime = (millis) => {
        return new Date(millis);
    };

    classForGenre(genre){
        switch(genre){
            case 'Rock':
                return 'label-danger';
            case 'Classic':
                return 'label-default';
            case 'World':
                return 'label-success';
            case 'Electro':
                return 'label-primary';
            default:
                return '';
        }
    }

    open(band) {
        console.log('OPEN');
        this.modalInstance = this.$uibModal.open({
            animation: true,
            template: modalTemplate.toString(),
            size: 'lg',
            controller: ["$scope", "$uibModalInstance", "band", ($scope, $uibModalInstance, band) => {
                this.$log.info(band);
                $scope.band = band;
                $scope.theBestVideo = band.youtubeId ? band.youtubeId : 'AetfspeIj_M';
            }],
            controllerAs: 'modalCtrl',
            resolve: {
                band: () => {
                    return band;
                }
            }
        });

        this.modalInstance.result.then(() => {
        }, () => {
        });
    };
}

