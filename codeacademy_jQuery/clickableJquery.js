/**
 * Created by home on 11/21/16.
 */

function main() {
    $('.skillset').hide();
    $('.skillset').fadeIn(1000);
    //makes whole page fade in. Can change milliseconds.  Default is (400)

    $('.projects').hide();
    $('.projects-button').on('click', function() {
        $(this).next().toggle();
        //.next will move it to next toggle button

        $(this).toggleClass('active');
        //Class('active') added to toggle makes the button color change when active. 'active' came from the CSS stylesheet: .active
        //$(this) selects clicked element

        $(this).text('TESTING');
        //change text of DOM element on button when it's clicked
    });
}

$(document).ready(main);
//jQuery connection