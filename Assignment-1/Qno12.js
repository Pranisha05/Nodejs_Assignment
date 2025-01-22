class Book{
    constructor(title,author,year){
        this.title=title
        this.author=author
        this.year=year
    }
    introduce(){
        console.log(`${this.title} was published in ${this.year} by ${this.author}.`)
    }
}
let obj= new Book('Matilda','Ronald Dahl',1988)
obj.introduce()
