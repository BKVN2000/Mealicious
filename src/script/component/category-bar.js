import $ from 'jquery';
import './category-button.js';

class CategoryBar extends HTMLElement{
    constructor(){
        super();
        this.appendChild(this.template.content.cloneNode(true));
    }

    set categories(categories){
        this._categories = categories;  
        const categoryBarContainer = document.querySelector('.category-bar-container');
        $.each(this._categories,(key,value)=>{
            const categoryContainer = document.createElement("div");
            categoryContainer.setAttribute("id","category-container");

            const categoryBar = document.createElement("category-button");
            categoryBar.category = value;
            categoryContainer.appendChild(categoryBar);

            categoryBarContainer.append(categoryContainer);
        });
    }

    get template(){
        const template = document.createElement("template");
        
        template.innerHTML = `    
             <style>
                .category-bar-container {
                    display: block;
                    overflow-x: auto;
                    white-space: nowrap;
                    border-radius:14px;
                }
                
                .category-bar-container > #category-container {
                    display: inline-block;
                    margin-right:3px;
                }
            </style>
            <div class="row category-bar-container">
                
            </div>
        `;
        return template;
    }
}

window.customElements.define("category-bar",CategoryBar);