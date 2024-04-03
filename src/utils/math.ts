export function calculateRatio(a: number, b: number) {
  const ratio = a / b;

  return ratio;
}

export function fixedRatio(ratio: number) {
  return ratio.toFixed(3);
}

export function calculateImageDisplaySize(
  imageWidth: number,
  imageHeight: number,
  windowRatio: number
) {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  let displayWidth, displayHeight;

  if (windowHeight > windowWidth) {
    displayWidth = Math.min(imageWidth, windowWidth) * windowRatio;
    displayHeight = (imageHeight / imageWidth) * displayWidth;
  } else {
    displayHeight = windowHeight * windowRatio;
    displayWidth = (imageWidth / imageHeight) * displayHeight;
  }

  return {
    width: displayWidth,
    height: displayHeight,
  };
}
