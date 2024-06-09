class Preloader {
  constructor() {
    this.toLoad = {
      latte: "/jordan/images/latte.png",
    };

    this.images = {};

    Object.keys(this.toLoad).forEach(key => {
      const img = new Image();
      img.src = this.toLoad[key];
      this.images[key] = {
        image: img,
        isLoaded: false
      };
      img.onload = () => {
        this.images[key].isLoaded = true;
      };
    });
  }

  isLoaded() {
    return Object.values(this.images).every(img => img.isLoaded);
  }
}

export const preloader = new Preloader();
