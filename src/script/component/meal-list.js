import $ from 'jquery';
import './meal-item.js';

class MealList extends HTMLElement{
    set meals(meals){
        this._meals = meals;  
        
        this.appendChild(this.template.content.cloneNode(true));

        const mealBarContainer = this.querySelector('#meals-container');
        
        $.each(this._meals,(key,value)=>{
            const mealItem = document.createElement("meal-item");
            mealItem.meal = value;
            mealBarContainer.appendChild(mealItem);
        });
    }
    set clickHandler(handler){
        this.querySelectorAll('meal-item').forEach(item=>{
            item.addEventListener('click',()=>{
                const mealID = item.getAttribute("mealID");
                console.log(mealID);
                handler(mealID);
            });
        });
    };

    get template(){
        const template = document.createElement("template");
        
        template.innerHTML = `    
            <div id="meals-container" class="row">
                
            </div>
        `;
        return template;
    }
}


customElements.define("meal-list",MealList);