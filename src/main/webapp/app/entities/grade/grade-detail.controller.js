(function() {
    'use strict';

    angular
        .module('midApp2App')
        .controller('GradeDetailController', GradeDetailController);

    GradeDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Grade', 'Submission', 'Instructor'];

    function GradeDetailController($scope, $rootScope, $stateParams, previousState, entity, Grade, Submission, Instructor) {
        var vm = this;

        vm.grade = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('midApp2App:gradeUpdate', function(event, result) {
            vm.grade = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
