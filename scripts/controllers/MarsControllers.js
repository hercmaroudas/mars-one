'use strict';

/* Controllers */

marsOneApp.controller('homeController', ['$scope', '$route','$location', function($scope, $route,$location) {
	$scope.$location = $location;
	$scope.$route = $route;
  }])  
  .controller('missionsController', ['$scope', '$http', '$sce',function($scope, $http, $sce) {

	$scope.quizMode = false;
	$scope.score = 0;
	$scope.userAnswer = '';
	$scope.correctAnswer = '';

	$http.get('/mars/data/missions.json').success( function(data) {
		$scope.missions = data;
		$scope.currentMissionIdx = 0;
		$scope.currentMission = getCurrentMission([$scope.currentMissionIdx]);
	});
	
    $scope.nextMission = function () {
        $scope.currentMissionIdx++;
		if($scope.quizMode == true) {
			console.log('user answer =' + $scope.userAnswer);
			if($scope.userAnswer === $scope.correctAnswer) {
				$scope.score++;
			}
			$scope.userAnswer = '';
			if ($scope.currentMissionIdx > $scope.missions.length - 1) {
				alert('Quiz completed. Your score was ' + $scope.score);
				$scope.score = 0;
				$scope.currentMissionIdx = 0;
				$scope.currentMission = getCurrentMission([$scope.currentMissionIdx]);
			}
		} 
	
		if ($scope.currentMissionIdx > $scope.missions.length - 1) {
			$scope.currentMissionIdx = 0;
		}

		$scope.currentMission = getCurrentMission([$scope.currentMissionIdx]);
		
    };


    $scope.prevMission = function () {

        $scope.currentMissionIdx--;
        if ($scope.currentMissionIdx < 0) {
            $scope.currentMissionIdx = $scope.missions.length - 1;
        }

		$scope.currentMission = getCurrentMission([$scope.currentMissionIdx]);
    };
	
	$scope.restartInQuizMode = function() {
		if($scope.currentMissionIdx > 0 && $scope.quizMode === true) {
			if(confirm('Re-start in Quiz Mode?') ) {
				$scope.score = 0;
				$scope.currentMissionIdx = 0;
				$scope.currentMission = getCurrentMission([$scope.currentMissionIdx]);
			}
		}
	};

	
	var getCurrentMission = function (idx) {
        $scope.currentMissionIdx = idx;
		$scope.currentMission = $scope.missions[$scope.currentMissionIdx];
		$scope.countryFlag = getFlagImages($scope.currentMission.ISOCountry);
		$scope.correctAnswer = $scope.currentMission.result;
		$scope.userAnswer = '';
        return $scope.currentMission;
    };
	
	var getFlagImages =function(isoCountries) {
		var returnHtml = '<span class="country">';
		 if(isoCountries.length > 0) {
				 
				 var flags = isoCountries.split(',');
				 for(var x = 0; x<flags.length;x++){
					 returnHtml += ((x ===0)?  $scope.currentMission.country : '') + '<img class=\'img-responsive\' src=\'/mars/images/flags/' + flags[x] + '.png\' alt=\'' + $scope.currentMission.country + '\' title=\'' + $scope.currentMission.country + '\'>'
				 }
			
			 }
			 returnHtml += '</span>';
		return $sce.trustAsHtml(returnHtml);
	}
  }])
  .controller('orbitController', ['$scope', function($scope) {
	$scope.message = 'Mars Obit and seasons';
	//$scope.$on('$viewContentLoaded', plotFirst90Degs);
  }]);
