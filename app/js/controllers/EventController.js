'use strict';

eventsApp.controller('EventController',
    function EventController($scope){

        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10.30 am',
            location:{
                address:"Ale Snagov",
                city:"Klausenburg",
                province:"CJ"
            },
            imageUrl:'img/AngularJS-large.png',
            sessions:[
                {
                    name:"masterclass",
                    creatorName: 'bob smith',
                    duration: '1 hr',
                    level:'Advanced',
                    abstract:'This da shit',
                    upVoteCount: 0
                },
                {
                    name:"fun and profit",
                    creatorName: 'bob smith',
                    duration: '1 hr',
                    level:'Advanced',
                    abstract:'This da shit',
                    upVoteCount: 0                 
                },
                {
                    name:"controllers",
                    creatorName: 'bob smith',
                    duration: '1 hr',
                    level:'Advanced',
                    abstract:'This da shit',
                    upVoteCount: 0                    
                }
            ]
        }
            
        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        }
        
        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        }        
    }
);