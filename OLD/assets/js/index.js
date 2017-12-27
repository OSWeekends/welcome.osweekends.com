---
---

{% include_relative jquery.min.js %}
{% include_relative anchor.min.js %}
{% include_relative ga.js %}
{% include_relative toc.js %}

(function() {
  var selector = '.article-body h2, .article-body h3, .article-body h4, .article-body h5';
  anchors.options = {
    placement: 'left'
  };
  anchors.add(selector);

  $(selector).wrapInner('<span/>');
})();
