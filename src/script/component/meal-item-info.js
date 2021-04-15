class MealInfo extends HTMLElement{
    constructor(){
        super();
    }
    set meal(meal){
        this._meal = meal;
        this.appendChild(this.template.content.cloneNode(true));
    }
    
    get meal(){
        return this._meal;
    }

    get template(){
        const template = document.createElement("template");
        const {strMealThumb,strYoutube,strSource,strArea} = this._meal;

        template.innerHTML = `
        <div class="row bg-color-white p-3" id="meal-item-info">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                <img src="${strMealThumb}" alt="..." class="img-thumbnail" id="meal-item-image">
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 my-auto">
                <h5>Fantasy T-shirt</h5>
                <div class="table-responsive">
                    <table class="table table-sm table-borderless mb-0">
                        <tbody>
                            <tr>
                                <th class="pl-0 w-25" scope="row"><strong><i class="fab fa-youtube"></i></strong></th>
                                <td>${strYoutube || "-" }</td>
                            </tr>
                            <tr>
                                <th class="pl-0 w-25" scope="row"><strong><i class="fas fa-link"></i></strong></th>
                                <td>${strSource || "-" }</td>
                            </tr>
                            <tr>
                                <th class="pl-0 w-25" scope="row"><strong><i class="fas fa-globe"></i></strong></th>
                                <td>${strArea || "-"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        `
        return template;
    }
}

window.customElements.define("meal-item-info",MealInfo);