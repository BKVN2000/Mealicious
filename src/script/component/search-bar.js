
class SearchBar extends HTMLElement{
    constructor(){
        super();
        this._placeholder = this.getAttribute("placeholder") || "search something here";
        this.appendChild(this.template.content.cloneNode(true));
    }

    set clickHandler(handler){
        this.querySelector('div.search-container >  #search-addon')
            .addEventListener('click',() => handler(this.inputValue));
    }

    get inputValue(){
        return this.querySelector('#search-bar-form').value;
    }

    get template(){
        const template = document.createElement("template");

        template.innerHTML = `
            <div class="input-group rounded search-container">
                <input type="search" id="search-bar-form" class="form-control rounded-4" placeholder="${this._placeholder}" aria-label="Search" type="search"
                aria-describedby="search-addon" />

                <span class="input-group-text border-0" id="search-addon">
                    <i class="fas fa-search" id="search-button"></i>
                </span>
            </div>
        `

        return template;
    }
}

window.customElements.define("search-bar",SearchBar);