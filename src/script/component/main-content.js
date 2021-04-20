class MainContent extends HTMLElement{
    set content(component){
        this.innerHTML = "";
        this.appendChild(component);
    }
}

customElements.define("main-content",MainContent);