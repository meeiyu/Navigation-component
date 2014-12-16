'use strict';

/*
 * BSNavigation
 */

var React = require('react'),
    BSNavigation;

BSNavigation = React.createClass({
    propTypes: {
        options         : React.PropTypes.array.isRequired,
        name            : React.PropTypes.string.isRequired,
        onClickHandler  : React.PropTypes.func
    },
    myself:{

    },
    getDefaultProps: function() {
        return {
            options         : [],
            name            : '',
            onClickHandler : function() {}
        };
    },
    getInitialState: function() {
        return {
            optionsList     : this.props.options
        };
    },
    clickHandler: function(i, name){
        console.log(i);
        console.log(name);
        //this.props.onClickHandler(evt.target.name, evt.target.value);
    },
    renderDropdown: function(myself, DataList, DropdownTitle){
        var navigationName = myself.props.name;
        var li = DataList.map(function(item, i) {
            return (
                /*jshint ignore:start */
                <li key={i} onClick={myself.clickHandler.bind(null, item.text, navigationName)}>
                    <a href={item.url}>{item.text}</a>
                </li>
                /*jshint ignore:end */
            );
        });

        return(
            /*jshint ignore:start */
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">{DropdownTitle}<b className="caret"></b></a>
                <ul className="dropdown-menu navmenu-nav" role="menu">
                    {li}
                </ul>
            </li>
            /*jshint ignore:end */
        );
    },
    renderOptions: function() {
        console.debug("optionsList", this.state.optionsList);
        var header,
            links,
            myself=this,
            navigationName = this.props.name;
            this.state.optionsList.map(function(item, i) {
                header = (
                    /*jshint ignore:start */
                        <a className="navmenu-brand" href="#">{item.header}</a>
                    /*jshint ignore:end */
                );

                links = item.data.map(function(item, i) {
                    if(item["dropdown_data"] != undefined){
                        var dropdownList = this.renderDropdown(myself,item.dropdown_data, item.text);
                        return(dropdownList);
                    } else {
                        return (
                            /*jshint ignore:start */
                                <li key={i} onClick={this.clickHandler.bind(null, item.text, navigationName)}>
                                    <a href={item.url}>{item.text}</a>
                                </li>
                            /*jshint ignore:end */
                        );
                    }
                }.bind(this));
            }.bind(this));

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