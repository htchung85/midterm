(function() {
    'use strict';

    angular
        .module('midApp2App')
        .controller('HomeworkController', HomeworkController);

    HomeworkController.$inject = ['$scope', '$state', 'Homework'];

    function HomeworkController ($scope, $state, Homework) {
        var vm = this;
        
        vm.homework = [];

        loadAll();

        function loadAll() {
            Homework.query(function(result) {
                vm.homework = result;
            });
        }
    }
})();
