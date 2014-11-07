$(function() {
  return $('.post :header').each(function(i, el) {
    var $el, icon, id;

    $el = $(el);
    id = $el.attr('id');
    if (id) {
      return $el.append($('<a />').addClass('header-anchor').attr('href', '#' + id));
    }
  });
});
