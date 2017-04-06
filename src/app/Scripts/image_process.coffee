$('img.detail_image').each () ->
  image = $(this)
  src =  image.attr('src')
  imageToMeasure = new Image()
  imageToMeasure.src = src
  imageToMeasure.onload = () ->
    imgW = imageToMeasure.width
    imgH = imageToMeasure.height

    if (imgW > 908)
      newW = 908
      newH = imgH * 908 / imgW
      image.css 'width', newW
      image.css 'height', newH
