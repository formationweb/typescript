interface ComponentOptions {
    selector: string;
    template: string;

}

export function Component(options: ComponentOptions) {
    return function <T extends { new (...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            selector = options.selector;
            template = options.template;
            render() {
                let renderedTemplate = this.template.replace('{{ titre }}', (this as any).title);
                console.log(`<${this.selector}>${renderedTemplate}</${this.selector}>`);
            }
        }
    }

}

@Component({
    selector: 'my-element',
    template: '<h1>test</h1>'
})
class MyComponent {}

interface MyComponent {
    render(): any
}

const component = new MyComponent()
component.render()