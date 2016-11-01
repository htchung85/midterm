(function() {
    'use strict';

    angular
        .module('midApp2App')
        .controller('SubmissionController', SubmissionController);

    SubmissionController.$inject = ['$scope', '$state', 'Submission'];

    function SubmissionController ($scope, $state, Submission) {
        var vm = this;
        
        vm.submissions = [];

        loadAll();

        function loadAll() {
            Submission.query(function(result) {
                vm.submissions = result;
            });
        }
    }
})();
