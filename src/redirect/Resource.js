class Resources {
    constructor() {
        this.toLoad = {
            background: "/jordan/sprites/background.png",
            unlit: "/jordan/sprites/background_unlit.png",
            lit1: "/jordan/sprites/background_lit.png",
            lit2: "/jordan/sprites/background_lit2.png",
            frisk: "/jordan/sprites/frisk.png",
            heart: "/jordan/sprites/heart_all.png"
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
