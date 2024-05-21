class Resources {
    constructor() {
        this.toLoad = {
            background: "/public/sprites/background.png",
            unlit: "/public/sprites/background_unlit.png",
            lit1: "/public/sprites/background_lit.png",
            lit2: "/public/sprites/background_lit2.png",
            frisk: "/public/sprites/frisk.png",
            heart: "/public/sprites/heart_all.png"
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
