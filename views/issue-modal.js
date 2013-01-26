(function () {
  'use strict';

  var $ = window.jQuery;
  var app = window.app;
  var _ = window._;

  var tpl = $('#js-issue-modal-template').html();

  app.IssueModalView = app.View.extend({
    className: 'issue-modal',

    events: {
      // you can use any jQuery selectors here
      'change select[name="status"]': 'statusChanged',
      'click .modal-mask': 'remove'
    },

    render: function () {
      this.$el.html(_.template(tpl, {issue: this.model}));
      $('body').prepend(this.$el);
    },

    statusChanged: function (ev) {
      var category = $(ev.target).val();
      this.model.set('category', category);
      this.remove();
    }
  });
})();