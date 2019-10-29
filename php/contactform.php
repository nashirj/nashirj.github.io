<?php

if (isset($_POST['submit']) && isset($_POST['url']) && $_POST['url'] === ''){
    $name = trim($_POST['name']);
    $subject = ((trim($_POST['subject']) === '') ? 'No subject' : trim($_POST['subject']));
    $subject = trim($_POST['subject']);
    $mailFrom = trim($_POST['mailFrom']);
    $message = trim($_POST['message']);


    // Test input values for errors
    $errors = array();
    $numErrors = 0;
    //at minimum, want user's initials
    if (strlen($name) < 2) {
        $errors[$numErrors] = 'enter at least 2 characters for your name';
        $numErrors++;
    }
    //5 because <name>@<server>.<extension>, minimum possible chars === 5
    if (strlen($mailFrom) < 5) {
        $errors[$numErrors] = 'enter a valid email';
        $numErrors++;
    }
    //min length discourages meaningless messages
    if(strlen($message) < 10) {
        $errors[$numErrors] = 'enter a message that is at least 10 characters long';
        $numErrors++;
    }

    if($errors) {
        // Output errors and die with a failure message
        $errortext = "";
        for($i = 0; $i < $numErrors-1; $i++) {
            $errortext .= $errors[$i];
            $errortext .= ", ";
        }
        if ($numErrors > 1) {
            $errortext .= " and ".$errors[$numErrors-1].".";
        }
        else {
            $errortext .= $errors[0].".";
        }
        die("<span class='failure'><center><h3>Please fill out the contact form again, but ".$errortext."<br/><a href='../contact.htm'>Refresh Form</a></center></span>");
    }

    $mailTo = "nashir@nashirj.com";
    $txt = "You have received an e-mail from ".$name." at ".$mailFrom.".\n\n".$message;

    // if the url field is empty 
    if(isset($_POST['url']) && $_POST['url'] === '') {
        // then send the form to your email
        mail($mailTo, $subject, $txt);
        header("Location: ../thanks.htm");
    }
    
    exit;
} else {
    die("<span class='failure'><center><h3>Please fill out the contact form again, but leave the requested field blank.<br/><a href='../contact.htm'>Refresh Form</a></center></span>");
}

?>