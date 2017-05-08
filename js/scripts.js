//-------------------------------------FRONT END LOGIC
$(document).ready(function() {
  $().submit(function(event) {
    event.preventDefault();


  });
});

//-------------------------------------BACK END LOGIC
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}
