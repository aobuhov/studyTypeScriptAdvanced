type ValidatorType = 'required' | 'email'
interface ValidatorConfig {
    [prop: string]: {
        [validateProp: string]: ValidatorType
    }

}
const validators: ValidatorConfig = {}
function Reqiered(target: any, propName: string) {
    validators[target.constructor.name] = {
        ...validators[target.constructor.name],
        [propName]: 'required'
    }
}
function validate(obj:any): boolean {
    const objConf = validators[obj.constructor.name]
    if (!objConf) {
        return true
    }
    let isValid = true
    Object.keys(objConf).forEach(key=>{
        if (objConf[key] === 'required') {
            isValid = isValid && !!obj[key]
        }
    })
    return isValid
}
class Form {
    @Reqiered
    public email: string | void
    constructor(email?: string) {
        this.email = email;
    }
}

const form = new Form('dsd')
console.log(form)

if (validate(form)) {
    console.log('valid', form)
} else {
    console.log('unvalidation error')
}