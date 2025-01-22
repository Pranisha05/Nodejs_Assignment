class car{
    constructor(brand,model){
        this.brand=brand
        this.model=model
    }
    getdetails(){
        console.log(`This car is a ${this.brand} ${this.model}.`)
    }
}
let obj= new car("Honda","Civic")
obj.getdetails()
