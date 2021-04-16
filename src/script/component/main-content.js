class MainContent extends HTMLElement{
    set content(component){
        this.innerHTML = "";
        console.log('fuckong');
        this.appendChild(component);
    }
}

customElements.define("main-content",MainContent);