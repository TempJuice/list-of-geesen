console.log('client.js has been loaded');

var geese = [];

$(document).ready(function () {
    console.log('jquery is loaded');
    getGeesen();

    // Add new goose on button click
    $('#newGooseButton').on('click', function () {
        console.log('new goose button was clicked');
        var newGoose = {}; // creates empty newGoose object

        // Adding properties to the new goose
        newGoose.name = $('#newGooseName').val();
        newGoose.age = parseInt($('#newGooseAge').val());
        newGoose.type = $('#newGooseType').val();

        console.log('newGoose:', newGoose);

        $.ajax({
            method: 'POST',
            url: '/geese',
            data: newGoose,
            success: function (response) {
                console.log(response);
                getGeesen();
            },
            error: function (_, _, errorThrown) {
            alert(errorThrown);
            }
        })

        // redrawing the table with the new goose
        drawGeeseTable();

    });

});

function getGeesen() {
    $.ajax({
        method: 'GET',
        url: '/geese',
        success: function (response) { // response will be the array of geese
            console.log(response);
            geese = response;
            drawGeeseTable();
        }
    });



}

function drawGeeseTable() {
    // adding geese to DOM
    $('#geesenTableBody').empty();
    for (var i = 0; i < geese.length; i++) {
        var goose = geese[i];

        $('#geesenTableBody').prepend(
            '<tr>' +
            '<td>' + goose.name + '</td>' +
            '<td>' + goose.age + '</td>' +
            '<td>' + goose.type + '</td>' +
            '</tr>'
        );
    }
}