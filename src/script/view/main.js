
import apiController from '../data/api.controller.js';
import '../component/category-bar.js';
import '../component/meal-list.js';
import '../component/meal-item-detail.js';
import '../component/app-bar.js';
import '../component/search-bar.js';

const main = function() {
    const categoryComponent = document.querySelector('category-bar');
    const mainContent =  document.querySelector('#main-content');
    const searchBar = document.querySelector('search-bar');

    const showCategories = async () =>{
        try{
            const categories = await apiController.getAllCategory();
            categoryComponent.categories = categories;  
            categoryComponent.clickHandler = showMealByCategory;

        }catch(err){
            alert(err);
        }
    }

    const showMealsByAsc = async () =>{
        try{
            const meals = await apiController.getAllMeal();
            showMeal(meals);
        }catch(err){
            alert(err);
        }
    }

    const showMealDetail = async(id) =>{
        try{
            const [meal] = await apiController.getDetailMealById(parseInt(id));
            
            const mealDetailComponent = document.createElement('meal-item-detail');
            mealDetailComponent.meal = meal;  
            mealDetailComponent.backButtonClickHandler = showMealsByAsc;

            showMainContent(mealDetailComponent);
        }catch(err){
            alert(err);
        }
    }

    const showMealByCategory = async(category) =>{
        try{
            const meals = await apiController.getMealByCategory(category);
            showMeal(meals);
        }catch(err){
            alert(err);
        }
    }

    const showMealByName = async(keyword) =>{
        try{
            if (!keyword){
                showMealsByAsc();
                return;
            }
            const meals = await apiController.getMealByName(keyword);
            showMeal(meals);
        }catch(err){
            alert(err);
        }
    }

    const showMainContent = (component)=>{
        mainContent.innerHTML = "";
        mainContent.appendChild(component);
    }   

    const showMeal = (meals) => {
        const mealComponent = document.createElement("meal-list");
        mealComponent.meals = meals;
        mealComponent.clickHandler = showMealDetail;

        showMainContent(mealComponent);
    }

    const initPage = ()=>{    
        searchBar.clickHandler = showMealByName;
        showCategories();
        showMealsByAsc();
    }

    initPage();
}

export default main;