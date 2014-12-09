'use strict';

/*
 * BSNavigation
 */

var React = require('react'),
    BSNavigation;

BSNavigation = React.createClass({
    propTypes: {
        text            : React.PropTypes.string.isRequired,
        options         : React.PropTypes.array.isRequired,
        onChangeHandler : React.PropTypes.func
    },
    getDefaultProps: function() {
        return {
            text            : '',
            options         : [],
            onChangeHandler : function() {}
        };
    },
    getInitialState: function() {
        return {
            optionsList     : this.props.options
        };
    },
    renderOptions: function() {
        console.debug("123", this.state.optionsList);
        var header,
            links;

        var datas = this.state.optionsList.map(function(item, i) {
            var dropdown;
            header = (
                /*jshint ignore:start */
                    <a className="navmenu-brand" href="#">{item.header}</a>
                /*jshint ignore:end */
            );

            if(item.data.length){
                links = item.data.map(function(item, i) {

                    if(item["Dropdown"] != undefined){
                        
                        var dropdownList = item.dropdown_data.map(function(item, i) {
                            return (
                                /*jshint ignore:start */
                                <li key={i}>
                                    <a href={item.url}>{item.text}</a>
                                </li>
                                /*jshint ignore:end */
                            );
                        },this);

                            console.log(dropdownList);

                            dropdown = (
                                /*jshint ignore:start */
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">{item.Dropdown}<b className="caret"></b></a>
                                    <ul className="dropdown-menu navmenu-nav" role="menu">
                                        {dropdownList}
                                    </ul>
                                </li>
                                /*jshint ignore:end */
                            );
                        return(dropdown);
                    } else {
                        return (
                            /*jshint ignore:start */
                                <li key={i}>
                                    <a href={item.url}>{item.text}</a>
                                </li>
                            /*jshint ignore:end */
                        );
                    }
                },this);
            }

        },this);

            return (
                /*jshint ignore:start */
                <nav className="navmenu navmenu-default" role="navigation">
                    {header}
                    <ul className="nav navmenu-nav">
                        {links}
                    </ul>
                </nav>
                /*jshint ignore:end */
            );

        //--------------------------------------------------------------------------
        //         return this.state.optionsList.map(function(item, i) {
        //         console.log(item.title);

        //         item.Sub_item.map(function(item, i) {

        //             console.log(item.title);

        //             if(item["data"] != undefined){
        //                 item.data.map(function(item, i) {
        //                     console.log(item.title);
        //                 });
        //             }

        //         });
        // });
    },
    render: function() {
        return (
            /* jshint ignore:start */
            <div>
                {this.renderOptions()}
            </div>
            /* jshint ignore:end */
        );
    }
});

module.exports = BSNavigation;