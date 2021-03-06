
function MissionsController($scope) {

    $scope.missions = [
        {
            "year": "1960",
            "name": "Korabl 4",
            "country": "USSR",
            "result": "Failure",
            "type": "Flyby",
            "notes": ""
        },
        {
            "year": "1960",
            "name": "Korabl 5",
            "country": "USSR",
            "result": "Failure",
            "type": "Flyby",
            "notes": ""
        },
        {
            "year": "1962",
            "name": "Korabl 11",
            "country": "USSR",
            "result": "Failure",
            "type": "Flyby",
            "notes": ""
        },
        {
            "year": "1962",
            "name": "Mars 1",
            "country": "USSR",
            "result": "Failure",
            "type": "Flyby",
            "notes": ""
        },
        {
            "year": "1962",
            "name": "Korabl 13",
            "country": "USSR",
            "result": "Failure",
            "type": "Flyby",
            "notes": ""
        },
        {
            "year": "1964",
            "name": "Mariner 3",
            "country": "US",
            "result": "Failure",
            "type": "Flyby",
            "notes": ""
        },
        {
            "year": "1964",
            "name": "Mariner 4",
            "country": "US",
            "result": "Success",
            "type": "Flyby",
            "notes": ""
        },
        {
            "year": "1964",
            "name": "Zond 2",
            "country": "USSR",
            "result": "Failure",
            "type": "Flyby",
            "notes": ""
        },
        {
            "year": "1969",
            "name": "Mars 1969A",
            "country": "USSR",
            "result": "Failure",
            "type": "Flyby",
            "notes": ""
        },
        {
            "year": "1969",
            "name": "Mars 1969B",
            "country": "USSR",
            "result": "Failure",
            "type": "Flyby",
            "notes": ""
        },
        {
            "year": "1969",
            "name": "Mariner 6",
            "country": "US",
            "result": "Success",
            "type": "Flyby",
            "notes": ""
        },
        {
            "year": "1969",
            "name": "Mariner 7",
            "country": "US",
            "result": "Success",
            "type": "Flyby",
            "notes": ""
        },
        {
            "year": "1971",
            "name": "Mariner 8",
            "country": "US",
            "result": "Failure",
            "type": "Flyby",
            "notes": ""
        },
        {
            "year": "1971",
            "name": "Kosmos 419",
            "country": "USSR",
            "result": "Failure",
            "type": "Flyby",
            "notes": ""
        },
        {
            "year": "1971",
            "name": "Mars 2",
            "country": "USSR",
            "result": "Failure",
            "type": "Orbiter + Lander",
            "notes": ""
        },
        {
            "year": "1971",
            "name": "Mars 3",
            "country": "USSR",
            "result": "Success",
            "type": "Orbiter + Lander",
            "notes": ""
        },
        {
            "year": "1971",
            "name": "Mariner 9",
            "country": "US",
            "result": "Success",
            "type": "Orbiter",
            "notes": ""
        },
        {
            "year": "1973",
            "name": "Mars 4",
            "country": "USSR",
            "result": "Failure",
            "type": "Orbiter",
            "notes": ""
        },
        {
            "year": "1973",
            "name": "Mars 5",
            "country": "USSR",
            "result": "Success",
            "type": "Orbiter",
            "notes": ""
        },
        {
            "year": "1973",
            "name": "Mars 6",
            "country": "USSR",
            "result": "Success/Failure",
            "type": "Orbiter + Lander",
            "notes": "Orbiter ok, lander failure on descent"
        },
        {
            "year": "1973",
            "name": "Mars 7",
            "country": "USSR",
            "result": "Failure",
            "type": "Flyby + lander",
            "notes": "Lander failed orbit insertion"
        },
        {
            "year": "1975",
            "name": "Viking 1",
            "country": "US",
            "result": "Success",
            "type": "Orbiter/Lander",
            "notes": ""
        },
        {
            "year": "1975",
            "name": "Viking 2",
            "country": "US",
            "result": "Success",
            "type": "Orbiter/Lander",
            "notes": ""
        },
        {
            "year": "1988",
            "name": "Phobos 1 ",
            "country": "USSR",
            "result": "Failure",
            "type": "Orbiter",
            "notes": ""
        },
        {
            "year": "1988",
            "name": "Phobos 2",
            "country": "USSR",
            "result": "Failure",
            "type": "Orbiter + lander",
            "notes": ""
        },
        {
            "year": "1992",
            "name": "Mars Observer",
            "country": "US",
            "result": "Failure",
            "type": "Orbiter",
            "notes": ""
        },
        {
            "year": "1996",
            "name": "Mars Global Surveyor",
            "country": "US",
            "result": "Success",
            "type": "Orbiter",
            "notes": ""
        },
        {
            "year": "1996",
            "name": "Mars 96",
            "country": "Russia",
            "result": "Failure",
            "type": "Orbiter and balloon",
            "notes": ""
        },
        {
            "year": "1996",
            "name": "Mars Pathfinder",
            "country": "US",
            "result": "Success",
            "type": "Lander + rover",
            "notes": ""
        },
        {
            "year": "1998",
            "name": "Nozomi ",
            "country": "Japan",
            "result": "Failure",
            "type": "Orbiter",
            "notes": "No orbit insertion"
        },
        {
            "year": "1998",
            "name": "Mars Climate Orbiter",
            "country": "US",
            "result": "Failure",
            "type": "Orbiter",
            "notes": "No orbit insertion"
        },
        {
            "year": "1999",
            "name": "Mars Polar Lander",
            "country": "US",
            "result": "Failure",
            "type": "lander",
            "notes": "Failed during descent"
        },
        {
            "year": "1999",
            "name": "Deep Space 2 Probes (2)",
            "country": "US",
            "result": "Failure",
            "type": "2 x Impactors",
            "notes": "Lost on arrival (carried on Mars Polar Lander)"
        },
        {
            "year": "2001",
            "name": "Mars Odyssey",
            "country": "US",
            "result": "Success",
            "type": "Orbiter",
            "notes": ""
        },
        {
            "year": "2003",
            "name": "Mars Express Orbiter/Beagle 2",
            "country": "ESA",
            "result": "Success/Failure",
            "type": "Orbiter + Lander",
            "notes": "Orbiter ok, lander failed during descent"
        },
        {
            "year": "2003",
            "name": "Mars Exploration Rover - Spirit",
            "country": "US",
            "result": "Success",
            "type": "Lander + Rover",
            "notes": ""
        },
        {
            "year": "2003",
            "name": "Mars Exploration Rover - Opportunity",
            "country": "US",
            "result": "Success",
            "type": "Lander + Rover",
            "notes": ""
        },
        {
            "year": "2005",
            "name": "Mars Reconnaissance Orbiter",
            "country": "US",
            "result": "Success",
            "type": "Orbiter",
            "notes": ""
        },
        {
            "year": "2007",
            "name": "Phoenix Mars Lander",
            "country": "US",
            "result": "Success",
            "type": "Lander",
            "notes": ""
        },
        {
            "year": "2011",
            "name": "Mars Science Laboratory",
            "country": "US",
            "result": "Success",
            "type": "Rover",
            "notes": ""
        },
        {
            "year": "2011",
            "name": "Phobos-Grunt/Yinghuo-1",
            "country": "Russia/China",
            "result": "Failure",
            "type": "Orbiter + sample return",
            "notes": ""
        },
        {
            "year": "2013",
            "name": "Mars Atmosphere and Volatile Evolution",
            "country": "US",
            "result": "Success",
            "type": "Orbiter",
            "notes": ""
        },
        {
            "year": "2013",
            "name": "Mars Orbiter Mission (MOM)",
            "country": "India",
            "result": "Success",
            "type": "Orbiter",
            "notes": ""
        }
    ];
    $scope.currentMissionIdx = 0;
    $scope.currentMission = $scope.missions[$scope.currentMissionIdx];

    $scope.getMission = function (idx) {
        $scope.currentMissionIdx = idx;
        return $scope.missions[$scope.currentMissionIdx];
    };

    $scope.nextMission = function () {
        $scope.currentMissionIdx++;
        if ($scope.currentMissionIdx > $scope.missions.length - 1) {
            $scope.currentMissionIdx = 0;
        }
        $scope.currentMission = $scope.missions[$scope.currentMissionIdx];
    }


    $scope.prevMission = function () {
        $scope.currentMissionIdx--;
        if ($scope.currentMissionIdx < 0) {
            $scope.currentMissionIdx = $scope.missions.length - 1;
        }
        $scope.currentMission = $scope.missions[$scope.currentMissionIdx];
    }

}

