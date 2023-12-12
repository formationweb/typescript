type TemplateType = (title: string) => string

interface ComponentOptions { 
    selector: string, 
    template: TemplateType 
}

class Component {
    private selector: string = ''
    private template: TemplateType = () => ''
    title: string = ''

    constructor({ selector, template }: ComponentOptions) {
        this.selector = selector
        this.template = template
    }

    render(): string {
        return `
            <${this.selector}>
                ${this.template(this.title)}
            </${this.selector}>
        `
    }
}

const component = new Component({   
    selector: 'my-element',   
    template: (title) => '<h1>' + title + '</h1>' 
});

component.title = 'Nouveau titre'; 

console.log(component.render()) // Doit afficher "<my-element><h1>Nouveau titre</h1></my-element>" 