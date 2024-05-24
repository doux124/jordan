import { useEffect } from 'react';

const useImagePreloader = (imageUrls) => {
  useEffect(() => {
    const imagePromises = imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => console.log('Images preloaded successfully'))
      .catch((err) => console.error('Failed to preload images', err));
  }, [imageUrls]);
};

export default useImagePreloader;
