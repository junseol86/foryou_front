cols = [$('#articles_col_0'), $('#articles_col_1'), $('#articles_col_2')]
getShortestColumn = () ->
  heights = [
    $('#articles_col_0').height(),
    $('#articles_col_1').height(),
    $('#articles_col_2').height(),
  ]
  shortest = null
  shortestIndex = 0
  heights.forEach (height, idx) ->
    if (shortest == null || shortest > height)
      shortest = height;
      shortestIndex = idx;
  shortestIndex

$('#temp_col > .article').each (idx, article) ->
  cols[getShortestColumn()].append(article)
