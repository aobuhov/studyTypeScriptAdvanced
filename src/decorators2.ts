interface ComponentDecorator {
    selector: string,
    template: string
}
function FComponent(config: ComponentDecorator) {
    return function <T extends {new(...args: any[]): object}>
    (Constructor: T) {
        return class extends Constructor{
            constructor(...args: any) {
                super(...args);
                const el = document.querySelector(config.selector)
                if (el) {
                    el.innerHTML = config.template
                } else {
                    console.log('empty el!')
                }
            }
        }
    }
}
@FComponent({
    selector: '#card',
    template: `
    <div id="card">
        <div class="card-content">
            <span class="card-title">Card component</span>
        </div>
    </div>
    `
})
class CardComponent {
    constructor(public name: string) {
    }
    logName(): void {
        console.log(`component name: ${this.name}`)
    }
}

const card = new CardComponent('My card component')