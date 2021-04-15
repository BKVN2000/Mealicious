import $ from 'jquery';
import './meal-item';
class MealList extends HTMLElement{
    constructor(){
        super();
        this.appendChild(this.template.content.cloneNode(true));
    }

    set meals(meals){
        this._meals = meals;  
        const mealBarContainer = document.querySelector('#meals-container');
        $.each(this._meals,(key,value)=>{
            const mealItem = document.createElement("meal-item");
            mealItem.meal = value;
            mealBarContainer.appendChild(mealItem);
        });
    }

    get template(){
        const template = document.createElement("template");
        
        template.innerHTML = `    
            <div id="meals-container" class="row">
                
            </div>
        `;
        return template;
    }
}

window.customElements.define("meal-list",MealList);