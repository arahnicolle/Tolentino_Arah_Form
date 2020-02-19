function submitEvent(){
    var event = document.event_form.event;
    var textOne = document.event_form.textOne;
    var dateOne = document.event_form.dateOne;
    var dateTwo = document.event_form.dateTwo;

    if(event.value == "Choose one"){
        alert("Event Type is required");
        event.focus();
        return false;
    }
    
    if(dateOne.value.length <= 0){
        alert("Event Date is required");
        dateOne.focus();
        return false;
    }

    if(dateTwo.value.length <= 0){
        alert("Posting Date is required");
        dateTwo.focus();
        return false;
    }

    if(textOne.value.length <= 0){
        alert("Event Title is required");
        textOne.focus();
        return false;
    }

    alert("The form has been successfully submitted");
return true;
}