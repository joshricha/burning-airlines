var App = App || {};

App.Views.AirplaneItemView = Backbone.View.extend ({

  tagName: 'li',
  events: {
    // 'click': 'selectTodo',
    // 'click .del': 'deleteTodo',
    // 'click .list': 'accessList'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var template = $('#airplaneItemView').html();
    var airplaneItemHTML = Handlebars.compile(template);

    this.$el.html(airplaneItemHTML( this.model.toJSON() ));
    return this;
  },

  selectAirplane: function() {
    this.$el.parent().find('li').removeClass('highlight');
    this.$el.addClass('highlight');
    // $('#todo').find('p').hide().html(this.model.get("body")).fadeIn();
  },

  deleteAirplane: function(event) {
    event.preventDefault();
    this.model.destroy();
    this.$el.fadeOut(700, function(){
      this.remove();      
    })
  },

  accessList: function(event) {
    event.preventDefault();
  }
});