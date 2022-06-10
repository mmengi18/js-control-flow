const ageCategories = [
  'infant', 
  'toddler', 
  'child', 
  'preteen', 
  'teen',
   'young adult'
]

const age= 2;
switch (age) {
  case (age<1):
      age = ageCategories[0]
      console.log(age)
    break;
  case (age > 1 && age < 2 ):
       age = ageCategories[1]
       console.log(age)
    break;
      case (age > 2 && age < 5):
       age = ageCategories[2]
       console.log(age)
    break;

     case (age > 5 && age < 12):
       age = ageCategories[3]
       console.log(age)
    break;

     case (age > 12 && age < 16):
       age = ageCategories[4]
       console.log(age)
    break;

    case (age > 16 && age < 20):
       age = ageCategories[5]
       console.log(age)
       break;

  console.log("dfas")
}