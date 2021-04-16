
import './meal-item-info';
import './meal-item-instruction';

class MealDetail extends HTMLElement{
    set meal(meal){
        this._meal = meal;
        this.appendChild(this.template.content.cloneNode(true));

        const mealItemDetail = this.querySelector('#meal-item-detail');
        const itemInfo = document.createElement("meal-item-info");
        const itemInstruction = document.createElement("meal-item-instruction");

        itemInfo.meal = this._meal;
        itemInstruction.meal = this._meal;

        mealItemDetail.appendChild(itemInfo);
        mealItemDetail.appendChild(itemInstruction);
    }
    
    set backButtonClickHandler(handler){
        this.querySelector('#backButton')
            .addEventListener('click',() => handler());
    }

    get meal(){
        return this._meal;
    }

    get template(){
        const template = document.createElement("template");

        template.innerHTML = `
        <div id="meal-item-detail">
            <div class="p-3" id="meal-item-info">
                <div class="col text-right">
                    <button type="button" class="btn btn-primary btn-sm" id="backButton"><i class="fas fa-arrow-left"></i>Back</button>
                </div>
            </div>
        </div>
        `
        return template;
    }

    get defaultMeal(){
        return {

        }
    }
}

customElements.define("meal-item-detail",MealDetail);