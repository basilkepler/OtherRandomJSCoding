// in this example a new function is created because we only want to display some properties of object. 
// the bigger idea is whenever you are not satisfied with the function supplied with the object, create your
// own and use call() method to link the new function to the old object.

student = {
    firstName: "jimmy",
    lastName:   "rogers",
    class: "1b",
    displayData: function(){
        console.log(this.firstName + " " + this.lastName + " is a student of class " +this.class)
    }    
}

displayName = function(){
    console.log('firstName:', this.firstName)
    console.log('lastName:', this.lastName)
}

student.displayData()
displayName.call(student, this.firstName, this.lastName)