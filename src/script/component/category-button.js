
class CategoryButton extends HTMLElement{
    constructor(){
        super();
        this._text = this.getAttribute("text") || "";
    }

    set clickHandler(handler){
        this.querySelector('#category-button').addEventListener('click',handler);
    }

    set category(category){
        this._category = category;
        this.appendChild(this.template.content.cloneNode(true));
    }
    get text(){
        return this._text = text;
    }

    get template(){
        const template = document.createElement("template");
        const {strCategory,strCategoryThumb} = this._category;

        template.innerHTML = `
        <div class="card bg-dark text-white" style="width: 13rem;">
            <img class="card-img" src="${strCategoryThumb}" alt="Card image" style="opacity: 0.7;">
            <div class="card-img-overlay" style="background-color: rgba(#000, 0.9);">
                <h5 class="card-title font-weight-bold text-light ">${strCategory}</h5>
            </div>
        </div> 
        `

        return template;
    }
}

window.customElements.define("category-button",CategoryButton);