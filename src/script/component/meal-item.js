class MealItem extends HTMLElement{
    constructor(){
        super();
    }

    set meal(meal){
        this._meal = meal;
        this.setAttribute("mealID",meal.idMeal)
        this.appendChild(this.template.content.cloneNode(true));
    }

    get meal(){
        return this._meal;
    }

    get template(){
        const template = document.createElement("template");
        const {strMeal,strMealThumb} = this._meal;

        template.innerHTML = `
        <div class="col-lg-3 col-md-4 col-sm-6 col-6 mt-2">
            <div class="card" id="meal-item" style="width: 15rem;">
                <img class="card-img-top" src="${strMealThumb}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">
                        ${strMeal}<i class="fas fa-utensils"></i>
                    </h5>
                </div>
            </div>
        </div>
        `

        return template;
    }
}

customElements.define("meal-item",MealItem);