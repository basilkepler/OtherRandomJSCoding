firstStudent = {
    firstName : "Mickey",  
    lastName : "Prill", 
    Class : "1A",
    
    displayStudentInfo: function() { 
        console.log('firstName:', this.firstName)
        console.log('lastName:', this.lastName)
        console.log('Class:', this.Class)
    }
}

secondStudent = {
        firstName : "Sam",  
        lastName : "Cale", 
        Class : "1B",
}

console.log("here is the first students information", firstStudent.displayStudentInfo())
