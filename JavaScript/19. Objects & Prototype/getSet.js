var employee = {
    name: "bookerT",
    age:41,

    get getName(){
        return this.name.toUpperCase() +"  "+ this.age;
    },
    set setName(n){
        this.name = n.toUpperCase()
    }
}
employee.setName = "Lion"
console.log(employee.getName)



