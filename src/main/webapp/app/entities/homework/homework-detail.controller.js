(function() {
    'use strict';

    angular
        .module('midApp2App')
        .controller('HomeworkDetailController', HomeworkDetailController);

    HomeworkDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Homework'];

    function HomeworkDetailController($scope, $rootScope, $stateParams, previousState, entity, Homework) {
        var vm = this;

        vm.homework = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('midApp2App:homeworkUpdate', function(event, result) {
            vm.homework = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
