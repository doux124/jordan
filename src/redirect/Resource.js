class Resources {
    constructor() {
        this.toLoad = {
            unlit: "/jordan/sprites/unlit_clean.png",
            lit1: "/jordan/sprites/background_lit.png",
            lit2: "/jordan/sprites/background_lit2.png",
            plant: "/jordan/sprites/plant.png",
            longroom: "/jordan/sprites/longroom.png",
            frisk: "/jordan/sprites/frisk.png",
            heart1: "/jordan/sprites/heart1.png",
            heart2: "/jordan/sprites/heart2.png",
            heart3: "/jordan/sprites/heart3.png",
            radio1: "/jordan/sprites/radio1.png",
            radio2: "/jordan/sprites/radio2.png",
            trophy1: "/jordan/sprites/trophy1.png",
            trophy2: "/jordan/sprites/trophy2.png",
            trophy3: "/jordan/sprites/trophy3.png",
            pet1: "/jordan/sprites/pet1.png",
            pet2: "/jordan/sprites/pet2.png",
            pet3: "/jordan/sprites/pet3.png",
            popup: "/jordan/sprites/popup.png",
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
