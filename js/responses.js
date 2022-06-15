function getBotResponse(input) {
    // Simple responses
    if (input == "Hello") {
        return "Hello there!";
    } else if (input == "Bye") {
        return "Thank you for reaching out to us!";
    } else {
        if (input=="Thank you for solving my problems.") {
            return "Thank you. Have a nice experience.";
        }
        else{
            return("Kindly mail your query at 'query.quizme@gmail.com'");
        }
    }
}