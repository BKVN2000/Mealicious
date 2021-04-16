import $ from 'jquery';

class MealInstruction extends HTMLElement{
    set meal(meal){
        this._meal = meal;
        this.appendChild(this.template.content.cloneNode(true));

        const ingredients = this.recipeItems;
        const ingredientsList = this.querySelector('#ingredients-list')

        $.each(ingredients,(key,value)=>{
            $(`<li class="list-group-item d-flex justify-content-between align-items-center">
                    ${value.Ingredient}
                    <span class="badge badge-primary badge-pill">${value.Measurement}</span>
                </li>`).appendTo(ingredientsList);
        });
    }
    
    get meal(){
        return this._meal;
    }

    get template(){
        const template = document.createElement("template");
        const {strInstructions} = this._meal;

        template.innerHTML = `
            <div class="row mt-4 bg-color-white rounded p-3">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6" id="meal-item-recipe">
                    <h3>Recipe</h3>
                    <ul class="list-group list-group-flush ingredients-list-container" id="ingredients-list">
                       
                    </ul>
                </div>

                <div class="col-12 col-sm-12 col-md-6 col-lg-6 text-justify" id="meal-item-instruction">
                    <h3>Instruction</h3>
                    <p>
                       ${strInstructions || "-"}
                    </p>
                </div>
            </div>
        `
        return template;
    }

    get recipeItems(){
       let recipeItems = [];
       let measurements = [];

        $.each(this._meal,function(key,value){
            if (key.includes("strIngredient") && value){
                let recipeItem = {Ingredient:"",Measurement:""};
                recipeItem.Ingredient = value;
                recipeItems.push(recipeItem);
            }
            else if(key.includes("strMeasure") && value){
                measurements.push(value);
            }
        });

        $.each(recipeItems,function(key,value){
            value.Measurement = measurements[key];
        });

        return recipeItems;
    }
}

customElements.define("meal-item-instruction",MealInstruction);