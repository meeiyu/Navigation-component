/** @jsx React.DOM */

'use strict';

var React = require('react'),
    BSNavigation = require('./components/BSNavigation'),
    ExampleApp,
    NavigationOptions = [{
  "header": "Brand",
  "data": [
    {
      "text": "Link1",
      "url": "#"
    },
    {
      "text": "Link2",
      "url": "#"
    },
    {
      "text": "Dropdown_val",
      "url": "",
      "dropdown_data": [
        {
          "text": "action-1",
          "url": "#"
        },
        {
          "text": "action-2",
          "url": "#"
        }
      ]
    },
    {
      "text": "Link3",
      "url": "#"
    },
    {
      "text": "Dropdown_val",
      "url": "",
      "dropdown_data": [
        {
          "text": "action-1",
          "url": "#"
        },
        {
          "text": "action-2",
          "url": "#"
        }
      ]
    }
  ]
}];


ExampleApp = React.createClass({
    clickHandler: function(name, val){
        console.log(name, val);
    },
    render: function() {
        return (
        	/*jshint ignore:start */
            <div>
            	<BSNavigation
                    name="Navigation"
                    options={NavigationOptions} 
                    onClickHandler={this.clickHandler} />
            </div>
            /*jshint ignore:end */
        );
    }
});

React.render(
    /*jshint ignore:start */
    <ExampleApp />,
    /*jshint ignore:end */
    document.getElementById('app')
);
