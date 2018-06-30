'use strict';

app.controller('mainController', ['$scope', '$firebaseObject', function($scope, $firebaseArray) {

    var staffInformation = {
        fullName: 'Michael Hohne',
        email: 'mikehohne@gmail.com',
        bio: 'Started two years ago as the developer of the group.',
        image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAfjAAAAJDk3ZDEwMjE1LTEyNTgtNDFlMS1hNDA2LTgwZWMwYzNkY2Q2ZQ.jpg',
        active: true
    };

    // var ref = firebase.database().ref('Staff/').set({
    //     name: staffInformation.fullName,
    //     email: staffInformation.email,
    //     bio: staffInformation.bio,
    //     image: staffInformation.image,
    //     active: staffInformation.active
    // })
    // .then(function(response,err) {
    //     console.log(response);
    // })

    // var ref = firebase.database().ref();

    // var data = $firebaseArray(ref);

    // console.log(data);

    $scope.imagePath = './../../imgages/cathy.jpg';
    
}])
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
});