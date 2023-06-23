function Log(constructor: Function) {
    console.log(constructor)
}
function Log2(target: any, propName: string|Symbol) {
    console.log(target)
    console.log(propName)
}
function Log3(target: any, propName: string|Symbol, descriptor: PropertyDescriptor) {
    console.log(propName)
    console.log(propName)
    console.log(descriptor)
}
@Log
class Component {
    @Log2
    name: string;
    constructor(name: string) {
        this.name = name
    }
    @Log3
    get componentName() {
        return this.name
    }

    @Log3
    logName(): void {
        console.log(`component name: ${this.name} `)
    }
}