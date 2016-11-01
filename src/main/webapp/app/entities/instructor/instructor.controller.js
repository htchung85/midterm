(function() {
    'use strict';

    angular
        .module('midApp2App')
        .controller('InstructorController', InstructorController);

    InstructorController.$inject = ['$scope', '$state', 'Instructor'];

    function InstructorController ($scope, $state, Instructor) {
        var vm = this;
        
        vm.instructors = [];

        loadAll();

        function loadAll() {
            Instructor.query(function(result) {
                vm.instructors = result;
            });
        }
    }
})();
