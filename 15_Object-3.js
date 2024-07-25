//OBJECT DESTRUCTING 
const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//use this for extravting value (shortcut)
const {courseInstructor : Instructor} =  course

console.log(Instructor);