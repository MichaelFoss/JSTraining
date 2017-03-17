class HelloWorld  {
    constructor() {
        this.message = 'Hello World';
    }

    render() {
        return `
            <div class="header">
                ${this.message}
            </div>
        `;
    }
}

export default HelloWorld;
