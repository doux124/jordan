class Resources {
    constructor() {
        this.toLoad = {
            background: "/sprites/background.png",
            unlit: "/sprites/background_unlit.png",
            lit1: "/sprites/background_lit.png",
            lit2: "/sprites/background_lit2.png",
            frisk: "/sprites/frisk.png"
        };

        this.images ={};

        Object.keys(this.toLoad).forEach(key => {
            const img = new Image();
            img.src = this.toLoad[key];
            this.images[key] = {
                image: img,
                isLoaded: false
            }
            img.onload = () => {
                this.images[key].isLoaded = true;
            }
        })
    }
}

export const resources = new Resources();
