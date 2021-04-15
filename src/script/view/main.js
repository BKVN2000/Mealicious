
import apiController from '../data/api.controller.js';
import '../component/category-bar.js';

const main = () => {
    const categoryComponent = document.querySelector('category-bar');
    const mealComponent = document.querySelector('meal-list');
    const mealDetailComponent = document.querySelector('meal-item-detail');

    const showCategories = async () =>{
        try{
            const categories = await apiController.getAllCategory();
            categoryComponent.categories = categories;  

        }catch(err){
            alert(err);
        }
    }

    const showMealsByAsc = async ()=>{
        try{
            const meals = await apiController.getAllMeal();
            mealComponent.meals = meals;  
        }catch(err){
            alert(err);
        }
    }

    const showMealDetail = async() =>{
        try{
            const [meal] = await apiController.getDetailMealById(52772);
            mealDetailComponent.meal = meal;  
        }catch(err){
            alert(err);
        }
    }
    showCategories();
    showMealDetail();
    showMealsByAsc();
}

export default main;