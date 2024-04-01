//  When the DOM is ready , console.log the message "Lets get ready to party with jQuery!"

$(document).ready(function(){
    console.log('Lets get ready to party with jQuery!');
})


//  Give all images inside of an article tag the class of image-center
$('article img').addClass('image-center');




//  Remove the last paragraph in the article
$('article p').eq(4).remove();



//  Set the font size of the title to be a random pixel size from 0 to 100 
const random = function(){
    let random = Math.floor(Math.random() * 100);
    return random ;
}

$('h1').css('font-size' , random() + 'px' );




//  Add an item to the list , it can say whatever you want
$('ol').append('<li>I looooooooove puppies</li>');



//  Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the lists existence
$('aside').html('<p>I am so sorry for the lists existence...</p>')



//  When you change the numbers in the three inputs on the bottom, the background color of the body should change 
//  to match whatever the three values in the inputs are 
$('input').change(function(){
    //get input values
    const input1val = $('input').eq(0).val();
    const input2val = $('input').eq(1).val();
    const input3val = $('input').eq(2).val();

    //set the background color of body using the values
    $('body').css('background-color' , `rgb(${input1val} , ${input2val} , ${input3val})`);
})



//  Add an event listener so that when you click on an image , it is removed from the DOM
$('img').on('click', function(){
    this.remove()
})







///////////////////////     PART 2 MOVIES APP !     \\\\\\\\\\\\\\\\\\\\\\\\\\\\

//  Part Two - Movies App!
//  Build an application that uses jQuery to do the following:
//  Contains a form with two inputs for a title and rating along with a button to submit the form.
//  When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
//  When the button to remove is clicked, remove each title and rating from the DOM.
//  Further Study
//  Ensure that the rating of a movie can only be between 0 and 10.
//  Ensure that a title has at least 2 characters in it.
//  Allow users to sort alphabetically by the title of the movie or by the rating of the movie from lowest to highest and vice versa.




$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const $title = $('#movieTitle').val();
        const $rating = $('#rating').val();
        if ($title.length >= 2 && $rating >= 0 && $rating <= 10) {
            const newRatingRow = `
                <tr>
                    <td><div style="margin-left: 200px; padding: 20px;">${$title}</div></td>
                    <td><div style="padding: 20px; margin-top:50px;">${$rating}</div></td>
                    <td><div style="padding: 20px; margin-top:50px;"><button class="remove">Remove</button></div></td>
                </tr>
            `;
            $('#ratings').append(newRatingRow);
           
        } else {
            alert('Please enter a valid title (at least 2 characters) and rating (between 0 and 10).');
        }
    });

    // Add click event handler for remove buttons using event delegation
    $('#ratings').on('click', '.remove', function() {
        $(this).closest('tr').remove(); // Remove the entire row containing the clicked remove button
    });
}) 




