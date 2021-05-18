var name;
var passrowd;
name=prompt("Введите логин");
if (name == "ivan"|| name=="ssss"|| name=="gibs") {
    alert('Логин существует')

    passrowd=prompt("Введите пароль");

    if (passrowd == "333"|| passrowd =="666"|| passrowd =="0000") {
     alert('welcome')
    }  else if (name != "333"||"666"||"0000") {
        alert('wrong password')
    }

   }  else if (name != "ivan"||"ssss"||"gibs") {
       alert('wrong name')
   }