/**
 * Created by home on 11/21/16.
 */

function main() {
    $('.skillset').hide();
    $('.skillset').fadeIn(1000);

    $('.projects').hide();

    $('.projects-button').on('click', function() {
        $('.projects').toggle();
        $(this).toggleClass('active');
        //Class('active') added to toggle makes the button color change when active. 'active' came from the CSS stylesheet: .active
        //$(this) selects clicked element
    });
}

$(document).ready(main);