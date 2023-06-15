// 2. **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.

//input =  african cuisine , ingredients, prepration time, NUtritional Info
//output = different african cuisine and their uniqueneses
// create class african cruisines with attributes that will be inhereted by each african cruisine



class AfricanCuisine{
    constructor(ingredients,prepTime,cookingMethod,NutritionalInfo){
        this.ingredients=ingredients
        this.prepTime=prepTime
        this.cookingMethod=cookingMethod
       this.NutritionalInfo=NutritionalInfo
    }

}

class MoroccanRecipe extends AfricanCuisine{
    constructor(ingredients,prepTime,cookingMethod,NutritionalInfo){
        this.ingredients=ingredients
        this.prepTime=prepTime
        this.cookingMethod=cookingMethod
       this.NutritionalInfo=NutritionalInfo
    }
}

class EthiopianRecipe extends AfricanCuisine{
    constructor(ingredients,prepTime,cookingMethod,NutritionalInfo){
        this.ingredients=ingredients
        this.prepTime=prepTime
        this.cookingMethod=cookingMethod
       this.NutritionalInfo=NutritionalInfo
    }
}

class NigerianRecipe extends AfricanCuisine{
    constructor(ingredients,prepTime,cookingMethod,NutritionalInfo){
        this.ingredients=ingredients
        this.prepTime=prepTime
        this.cookingMethod=cookingMethod
       this.NutritionalInfo=NutritionalInfo
    }
}

let cruisine = new AfricanCuisine("[rice beans spice]",20, "rice and beans cooked seperately","helps in getting protiens")
console.log(cruisine())
let Nigeria= new NigerianRecipe("[ugali cabbage]",30,"both are cooked seperatley", "its helps in getting energy")
let Moroccan = new MoroccanRecipe("[Meat Milk Rice]", 60, "both are cooked seperatley", "helps in body building")
let Ethiopia = new EthiopianRecipe("[Angera spices]",100,"the Angera is fermented","its helps in getting energy")
console.log(Nigeria());
console.log(Moroccan());
console.log(Ethiopia());



// 3. **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to

// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.


// input = category of the animal, name, and other attributes
// output = different species each in their categry
//  whether prey or predator and the attributes each possess
// process= create class species and predator and prey classes 
// that will inherit class species 

class Species{
    constructor(category){
        this.name=name
        this.category=category
    }
    
}

class prey extends Species{
    constructor(name,diet,typicalLifeSpan,migrationPattern){
        this.name=name
        this.diet=diet
        this.typicalLifeSpan=typicalLifeSpan
        this.migrationPattern=migrationPattern
    }

}

class predator extends Species{
    constructor(name,diet,typicalLifeSpan,migrationPattern){
        this.name=name
        this.diet=diet
        this.typicalLifeSpan=typicalLifeSpan
        this.migrationPattern=migrationPattern
    }

}

let species= new Species([prey,predator])
let animal1 = new prey("antelope", "grass", "2years","affected by drought and increased predators")
let animal2 = new predator("Lion","meat","15years","movement is due to search for preys")

console.log(species());
console.log(predator());
console.log(prey());

// # Create a class called Product with attributes for name, price, and quantity.
// # Implement a method to calculate the total value of the product (price * quantity).
// # Create multiple objects of the Product class and calculate their total values.


class Product{
    constructor(name,price,quantity){
        this.name=name
        this.price=price
        this.quantity=quantity
    }
    getTotalValue(){
        console.log(this.price * this.quantity);
    }

}
 let product1 =new Product("Laptob", 20000 ,30)
 let product2= new Product("phone", 10000, 15)
 let product3 = new Product("book", 50,26)
 console.log(product1.getTotalValue());
 console.log(product2.getTotalValue());
 console.log(product3.getTotalValue());


//  6. Implement a class called Student with attributes for name, age, and grades (a
//     list of integers). Include methods to calculate the average grade, display the
//     student information, and determine if the student has passed (average grade >=
//     60). Create objects for the Student class and demonstrate the usage of these
//     methods.


class Student{
    constructor(name,age,grades,subjects){
        this.name=name
        this.age=age
        this.grades=grades
        this.subjects=subjects
    }
    CalculateAverageGrade(){
        return this.grades % this.subjects
    }
    PassedOrFailed(){
        if (this.CalculateAverageGrade>=60){
            return "the student has passed"
        }
        else{
            return "the student has failed"
        }
    }

}

let student1 = new Student("Ahmed",20,600,8)
console.log(student1.CalculateAverageGrade());
console.log(student1.PassedOrFailed());


// 8. Create a LibraryCatalog class that handles the cataloging and management of
// books in a library. Implement methods to add new books, search for books by
// title or author, keep track of available copies, and display book details.

class LibraryCatalog{
    constructor(bookname,TotalBooks){
        this.TotalBooks=TotalBooks
        this.book=book
    }


    
    addNewBooks(newBook){
        return this.TotalBooks+=1

    }
    SearchForBook(Book){
        if(Book===this.bookname){
            return this.book
        }
        else{
            return "Book not available"
        }


    }
    
}


let library=new LibraryCatalog("Born a crime", 20)
library.addNewBooks("INheritance")
console.log(library.SearchForBook("The pearl"));