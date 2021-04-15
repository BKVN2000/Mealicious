const mealAPI = {
    baseUrl : "https://www.themealdb.com/api/json/v1",
    apiKey: "1",
    get Url(){
        return `${this.baseUrl}/${this.apiKey}`;
    }
}

export default mealAPI;