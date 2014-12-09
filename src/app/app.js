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
      "url": "http://www.google.com"
    },
    {
      "text": "Link2",
      "url": "http://www.yahoo.com"
    },
    {
      "Dropdown": "Dropdown_val",
      "url": "",
      "dropdown_data": [
        {
          "text": "action-1",
          "url": "http://www.google.com?1"
        },
        {
          "text": "action-2",
          "url": "http://www.google.com?1"
        }
      ]
    },
    {
      "text": "Link3",
      "url": "http://www.yahoo.com"
    },
    {
      "Dropdown": "Dropdown_val",
      "url": "",
      "dropdown_data": [
        {
          "text": "action-1",
          "url": "http://www.google.com?1"
        },
        {
          "text": "action-2",
          "url": "http://www.google.com?1"
        }
      ]
    }
  ]
}];


ExampleApp = React.createClass({
    render: function() {
        return (
        	/*jshint ignore:start */
            <div>
            	<BSNavigation
                    name="Navigation"
                    options={NavigationOptions} />
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
