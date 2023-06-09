export default class Client{
    #id: any
    #name: string
    #age: number
    
    constructor(name:string, age: number, id: any = null){
        this.#name = name
        this.#age = age
        this.#id = id
    }
    
    static emptyClient(){
        return new Client('',0)
    }

    get id(){
        return this.#id
    }
    get name(){
        return this.#name
    }
    get age(){
        return this.#age
    }
    

}