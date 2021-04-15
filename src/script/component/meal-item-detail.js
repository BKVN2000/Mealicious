
import './meal-item-info';
import './meal-item-instruction';

class MealDetail extends HTMLElement{
    set meal(meal){
        this._meal = meal;
        this.appendChild(this.template.content.cloneNode(true));
        const itemInfo = document.querySelector("meal-item-info");
        const itemInstruction = document.querySelector("meal-item-instruction");
        itemInfo.meal = this._meal;
        itemInstruction.meal = this._meal;
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
                    <button type="button" class="btn btn-primary btn-sm"><i class="fas fa-arrow-left"></i>Back</button>
                </div>
            </div>
            <meal-item-info></meal-item-info>
            <meal-item-instruction></meal-item-instruction>
        </div>
        `
        return template;
    }

    get defaultMeal(){
        return {

        }
    }
}

window.customElements.define("meal-item-detail",MealDetail);