fun main(){
var student1 = Student("Ahmed",20, 600, 8)
  println( student1.calculateAverageGrades())
    println(student1.PassedOrFailed())


    var product1 = Product("Laptob", 20000, 50)
    var product2 =Product("phone", 10000, 15)


    var animal1 = Predator(""Lion","meat","15years","movement is due to search for preys"")
    var animal2 = Prey("antelope", "grass", "2years","affected by drought and increased predators")
}

# //  6. Implement a class called Student with attributes for name, age, and grades (a
# //     list of integers). Include methods to calculate the average grade, display the
# //     student information, and determine if the student has passed (average grade >=
# //     60). Create objects for the Student class and demonstrate the usage of these
# //     methods.

class Student (var name:String, var age:Int , var grades : Int, var subjects:Int ){
    fun calculateAverageGrades(){
        return grades / subjects
    }
    fun PassedOrFailed(){
        if (calculateAverageGrades()=>60){
            return "student has passed"
        }
        else{
            "student has failed"
        }
    }
}




# Create a class called Product with attributes for name, price, and quantity.
# Implement a method to calculate the total value of the product (price * quantity).
# Create multiple objects of the Product class and calculate their total values.


class Product(var name: String, var price:Int, var quantity:Int){
    fun getTotalValue(){
        return price * quantity
    }
}





# // input = category of the animal, name, and other attributes
# // output = different species each in their categry
# //  whether prey or predator and the attributes each possess
# // process= create class species and predator and prey classes
# // that will inherit class species


data class species (var category : List)

class Predator(var name: String, var diet:String, var typicalLifeSPan:String, var migrationPattern:String):species{

}
class prey (var name: String, var diet:String, var typicalLifeSPan:String, var migrationPattern:String):species{

}




