/// <reference path="form-namespace.ts"/>
namespace IForm {
    class MeForm {
        private type: FormType = 'inline'
        private state: FormState = 'active'

        constructor(public email: string) {
        }

        getInfo(): FormInfo {
            return {
                type: this.type,
                state: this.state
            }
        }
    }
    export const meForm = new MeForm('dfbqb')
}

console.log(IForm.meForm)