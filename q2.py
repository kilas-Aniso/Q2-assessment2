#  2. **African Cuisine:** You're creating a recipe app specifically for African cuisine.
#  The app needs to handle recipes from different African countries, each with its
#  unique ingredients, preparation time, cooking method, and nutritional
#  information. Consider creating a `Recipe` class, and think about how you might
#  create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
#  `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
#  methods.

class AfricanCuisine:
    def __init__(self,ingredients,prepTime,cookingMethod,nutritionalInfo):
        self.ingredients=ingredients
        self.prepTime=prepTime
        self.cookingMethod=cookingMethod
        self.NutritionalInfo=nutritionalInfo

class MoroccanRecipe(AfricanCuisine):
    def Morocco(self,ingredients,prepTime,cookingMethod,nutritionalInfo):
        self.ingredients=ingredients
        self.prepTime=prepTime
        self.cookingMethod=cookingMethod
        self.NutritionalInfo=nutritionalInfo

class EthiopianRecipe(AfricanCuisine):
    def Morocco(self,ingredients,prepTime,cookingMethod,nutritionalInfo):
        self.ingredients=ingredients
        self.prepTime=prepTime
        self.cookingMethod=cookingMethod
        self.NutritionalInfo=nutritionalInfo

class NigerianRecipe(AfricanCuisine):
    def Morocco(self,ingredients,prepTime,cookingMethod,nutritionalInfo):
        self.ingredients=ingredients
        self.prepTime=prepTime
        self.cookingMethod=cookingMethod
        self.NutritionalInfo=nutritionalInfo

africa=AfricanCuisine("[rice beans spice]",20, "rice and beans cooked seperately","helps in getting protiens")
morocco=MoroccanRecipe("[Meat Milk Rice]", 60, "both are cooked seperatley", "helps in body building")
nigeria=NigerianRecipe("[ugali cabbage]",30,"both are cooked seperatley", "its helps in getting energy")
ethiopia=EthiopianRecipe("[Angera spices]",100,"the Angera is fermented","its helps in getting energy")


print(africa())
print(morocco())
print(nigeria())
print(ethiopia())



# // 3. **Wildlife Preservation:** You're a wildlife conservationist working on a
# // program to track different species in a national park. Each species has its own
# // characteristics and behaviors, such as its diet, typical lifespan, migration
# // patterns, etc. Some species might be predators, others prey. You'll need to

# // create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
# // these classes might relate to each other through inheritance.

# // input = category of the animal, name, and other attributes
# // output = different species each in their categry
# //  whether prey or predator and the attributes each possess
# // process= create class species and predator and prey classes 
# // that will inherit class species 


class Species():
    def __init__(self,category):
        self.category= category


class predator():
    def __init__(self,name,diet,typicalLifeSpan,migrationPattern):
        self.name=name
        self.diet=diet
        self.typicalLifeSpan=typicalLifeSpan
        self.migrationPattern=migrationPattern

class prey():
    def __init__(self,name,diet,typicalLifeSpan,migrationPattern):
        self.name=name
        self.diet=diet
        self.typicalLifeSpan=typicalLifeSpan
        self.migrationPattern=migrationPattern


species=  Species([prey,predator])
animal1 = prey("antelope", "grass", "2years","affected by drought and increased predators")
animal2 = predator("Lion","meat","15years","movement is due to search for preys")


print(species())
print(predator())
print(prey())


# Create a class called Product with attributes for name, price, and quantity.
# Implement a method to calculate the total value of the product (price * quantity).
# Create multiple objects of the Product class and calculate their total values.


class Product:
    def __init__(self,name,price,quantity):
        self.name=name
        self.price=price
        self.quantity=quantity
    def getTotalValue(self):
        return {self.price} * {self.quantity}
    
product1 = Product("Laptob", 20000 ,30)
print(product1.getTotalValue())
product2=Product("phone", 10000, 15)
print(product2.getTotalValue())
product3 = Product("book", 50,26)
print(product3.getTotalValue())


# //  6. Implement a class called Student with attributes for name, age, and grades (a
# //     list of integers). Include methods to calculate the average grade, display the
# //     student information, and determine if the student has passed (average grade >=
# //     60). Create objects for the Student class and demonstrate the usage of these
# //     methods.



class Student:
    def __init__(self,name,age,grades,subjects):
        self.name=name
        self.age=age
        self.grades=grades
        self.subjects=subjects  
    def CalculateAverageGrade(self):
     return self.grades * self.subjects
    def PassedOrFailed(self):
        if self.CalculateAverageGrade>=60:
            return "student has passed"
        else:
            return "student has failed"


student1 = Student("Ahmed",20,600,8)
print(student1.CalculateAverageGrade())
print(student1.PassedOrFailed())



# // 8. Create a LibraryCatalog class that handles the cataloging and management of
# // books in a library. Implement methods to add new books, search for books by
# // title or author, keep track of available copies, and display book details.


class LibraryCatalog:
    def __init__(self, totalBooks):
        self.totalBooks = totalBooks
        self.book = {}
    def addNewBooks(newBook):
        return {self.totalBooks}=+1
    def searchBooks(Book):
        if Book == Book.title:
            return "Book available"
        else:
         return "book not available"


library=LibraryCatalog("Born a crime", 20)
print(library.addNewBooks())
print(library.searchBooks())





