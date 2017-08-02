console.log('client.js has been loaded');

var geese = [
    {
        name: 'Fred',
        age: 5,
        type: 'Betelgeusian Goosian'
    },
    {
        name: 'Carla',
        age: 4,
        type: 'Canadian'
    }
];

$(document).ready(function(){
    console.log('jquery is loaded');
    drawGeeseTable();

    // Add new goose on button click
    $('#newGooseButton').on('click', function(){
        console.log('new goose button was clicked');
        var newGoose = {}; // creates empty newGoose object

        // Adding properties to the new goose
        newGoose.name = $('#newGooseName').val();
        newGoose.age = parseInt($('#newGooseAge').val());
        newGoose.type = $('#newGooseType').val();

        console.log('newGoose:', newGoose);

        // Adding new goose to goose array
        geese.push(newGoose);
        
        // redrawing the table with the new goose
        drawGeeseTable();
    });

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
    
});
