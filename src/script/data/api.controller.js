import mealAPI from'./api.config.js';

class apiController{
    static async getMealByName(name){
        try{
            const response = await fetch(`${mealAPI.Url}/search.php?s=${name}`);
            const data = await response.json();

            if (data.meals){
                return Promise.resolve(meals);
            }

            throw Error("keyword not found");
        }catch(err){
            return Promise.reject(err);
        }
    }

    static async getDetailMealById(mealID){
        try{
            const response = await fetch(`${mealAPI.Url}/lookup.php?i=${mealID}`);
            const data = await response.json();
            if (data.meals.length){
                return Promise.resolve(data.meals);
            }

            throw Error("meal not found");
        }catch(err){
            return Promise.reject(err);
        }
    }

    static async getMealByCategory(category){
        try{
            const response = await fetch(`${mealAPI.Url}/filter.php?c=${category}`);
            const data = await response.json();

            if (data.meals){
                return Promise.resolve(meals);
            }

            throw Error("meal not found");
        }catch(err){
            return Promise.reject(err);
        }
    }

    static async getAllCategory(){
        try{
            const response = await fetch(`${mealAPI.Url}/categories.php`);
            const data = await response.json();

            if (data.categories.length){
                return Promise.resolve(data.categories);
            }

            throw Error("meal not found");
        }catch(err){
            alert(err);
            return Promise.reject(err);
        }
    }

    static async getAllMeal(){
        try{
            const response = await fetch(`${mealAPI.Url}/search.php?s=`);
            const data = await response.json();

            if (data.meals.length){
                return Promise.resolve(data.meals);
            }

            throw Error("meals are empty");
        }catch(err){
            return Promise.reject(err);
        }
    }
}

export default apiController; 