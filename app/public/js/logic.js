const questions = [
    "Your mind is always buzzing with unexplored ideas and plans.",
    "Generally speaking, you rely more on your experience than your imagination.",
    "You find it easy to stay relaxed and focused even when there is some pressure.",
    "You rarely do something just out of sheer curiosity.",
    "People can rarely upset you.",
    "It is often difficult for you to relate to other people’s feelings.",
    "In a discussion, truth should be more important than people’s sensitivities.",
    "You rarely get carried away by fantasies and ideas.",
    "You think that everyone’s views should be respected regardless of whether they are supported by facts or not.",
    "You feel more energetic after spending time with a group of people."
];

const displayQuestions = () => {
    const questDiv = $('#questions');

    questions.forEach((question, index) => {
        let questionName = 'q' + (index + 1);
        let questionGroup = $("<strong><h4>Question " + (index + 1) + "</h4></strong>")
            .append(`<h5>${question}</h5>`)
            .append(`<div class="row">`)
            .append(`<div class="input-field col s12">`)
            .append(
                `<select id="${questionName}">
                <option value="" disabled selected>Choose your option</option>
                <option value="1">1 (Strongly Disagree)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 (Strongly Agree)</option>
                </select>
                </div>
                </div>`
            )

        questDiv.append(questionGroup);
    });
}

// Capture the form inputs 
$("#submit").on("click", function () {
    // Form validation
    const validateForm = () => {
        let isValid = true;
        $('.validate').each(function () {
            if ($(this).val() === '')
                isValid = false;
        });

        $('select').each(function () {
            // console.log($(this).val())
            if ($(this).val() === null)
                isValid = false
        })
        return isValid;
    }

    if (validateForm() === true) {

        const userData = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), 
                    $("#q5").val(),$("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $(
                    "#q10").val()
            ]
        }
        
        const currentURL = window.location.origin;

        // AJAX post the data to the friends API. 
        $.post(currentURL + "/api/friends", userData, parseMatch);


    } else {
        alert("Please fill out all fields before submitting!");
    }

    return false;
});

const parseMatch = matchData => {
    console.log(matchData.name);
    // add match data to the modal
    $("#matchName").text(matchData.name);
    $("#matchImg").attr("src", matchData.photo);
    $('#results-modal').modal('open');

}
$(document).ready(function () {
    displayQuestions();
    //initialize modal
    $('.modal').modal();

    $("select").material_select();
});