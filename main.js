import { Vue } from 'meteor/meteormogul:vue-dist';

if (Meteor.isClient) {

    Meteor.startup(() => {

        // This Vue instance has one component
        new Vue({
            //  Renders to the element with id="wrapper"
            el: '#wrapper',
            // App is defined in a separate JavaScript file
            // (see meteor-vue-todo.js)
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
