student = {
    firstName: "sumit",
    lastName: "rai",
    class: "1b",
    school: "ramjas",
    display: function(){
        return this.firstName + this.lastName + " is a student of class " + this.class + " in " + this.school + " school"
    }

}
displayName = function(){
    return this.firstName + " " + this.lastName
}

console.log(student.display())
console.log(displayName.apply(student, ['this.firstName','this.lastName']))