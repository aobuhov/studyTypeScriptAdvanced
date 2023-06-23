const cars: string[] = ['ford', 'AUDI']
const cars2: Array<string> = ['ford', 'AUDI']

const promise: Promise<string> = new Promise<string>(resolve => {
    setTimeout(()=> {
        resolve('promise resolved')
    }, 2000);
})

promise.then(data => {
    console.log(data.toUpperCase().trim())
})

//----------------
function merge<T extends object, R extends object>(a: T, b:R): T&R {
    return Object.assign({}, a, b)
}
const merged = merge({name: 'Ben'}, {age: 15})
console.log(merged.name)
const merged2 = merge({model: 'A1'}, {year: 2010})
console.log(merged2.year)

// const merged3 = merge('aaa', 222) -- here is an error
// console.log(merged3)

//------------------------------
interface ILength {
    length: number
}
function withCount<T extends ILength>(value: T):{value:T, count: string} {
    return {
        value: value,
        count: `in this object has ${value.length} symbols`
    }
}
console.log('length of string ', withCount("hello ts"))
console.log('length of array ', withCount([1,2,3]))
console.log('length of object ', withCount({length: 156}))
//console.log(withCount(15))    -- here is an error

//--------------------------
function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}
const person = {
    name: 'Ben',
    age: 26
}
console.log(getObjectValue(person, 'name'))
console.log(getObjectValue(person, 'age'))
//console.log(getObjectValue(person, 'job')) -- here is an error

//-----------------------
class Collection<T> {
    //private _items: T[] = []
    //or we can use like this
     constructor(private _items:T[] = []) {
     }
    add(item: T){
        this._items.push(item)
    }
    remove(item: T) {
        this._items = this._items.filter(i => i != item)
    }
    get items(): T[] {
        return this._items
    }
}
const strings = new Collection<string>(['i', 'am', 'strings'])
strings.add('!')
strings.remove('am')
console.log('strings', strings.items)

const numbers = new Collection<number>([1, 2, 3])
numbers.add(4)
numbers.remove(2)
console.log('numbers', numbers.items)

const objs = new Collection([{name: 'Ben', age: 10}, {name: 'Luk', age: 15}])
objs.remove({name: 'Ben', age: 10})     ////it doesn't work
console.log('objects collection', objs)

//------------Partial----------------------
interface Car{
    model: string,
    year: number
}
function createAndValidateCar(model: string, year: number): Car {
    const car: Partial<Car> = {}
    if (model.length > 3) {
        car.model = model
    }
    if (year > 2000) {
        car.year = year
    }
    return car as Car
}
//--------Readonly-------
const carss: Readonly<Array<string>> = ['Ford', 'Audi'];
//carss.shift() --with readonly we cant change array

const ford:Readonly<Car> = {
    model: 'Ford',
    year: 2010
}
//ford.model = 'Ferrari' --with readonly we cant change array



