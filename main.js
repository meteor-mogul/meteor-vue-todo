import { Vue } from 'meteor/meteormogul:vue-dist';

if (Meteor.isClient) {

  Meteor.startup(() => {

    import { App } from './meteor-vue-todo.js';

    // This Vue instance has one component
    new Vue({
      //  Renders to the element with id="wrapper"
      el: '#wrapper',
      components: {
        App
      },
      // This render function replaces the render target with the App.
      render: function(createElement) {
        return createElement(App);
      }
    });
  });

}
