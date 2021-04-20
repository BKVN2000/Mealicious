class AppHeader extends HTMLElement {
    constructor(){
        super();
    }

    set title(title) {
        this._title = title;
    }

    render(){
        this.innerHTML = `
        <style>
            .app-bar {
                padding: 16px;
                width: 100%;
                background-color: cornflowerblue;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
        </style>
            <div id="appBar" class="app-bar">
                <h2>${this._title}</h2>
            </div>`
    }
}

customElements.define("app-bar",AppHeader);