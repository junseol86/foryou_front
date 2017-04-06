// Generated by CoffeeScript 1.11.1
(function() {
  $('img.detail_image').each(function() {
    var image, imageToMeasure, src;
    image = $(this);
    src = image.attr('src');
    imageToMeasure = new Image();
    imageToMeasure.src = src;
    return imageToMeasure.onload = function() {
      var imgH, imgW, newH, newW;
      imgW = imageToMeasure.width;
      imgH = imageToMeasure.height;
      if (imgW > 908) {
        newW = 908;
        newH = imgH * 908 / imgW;
        image.css('width', newW);
        return image.css('height', newH);
      }
    };
  });

}).call(this);

//# sourceMappingURL=image_process.js.map
