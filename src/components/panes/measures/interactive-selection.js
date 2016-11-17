var React = require('react');
var input = React.DOM.input;

class InteractiveSelection extends React.Component {
  constructor(props) {
    super(props);
  }

   getDefaultProps() {
       return {
           value: '',
       };
   }

   onChange(){}

   onClick(e) {
       e.stopPropagation();
   }

   onFocus(e) {
       e.target.select();
   }

   render() {
       return (
       <input
         className = "json-inspector__selection"
         value = {this.props.value}
         size = {Math.max(1, this.props.value.length)}
         spellCheck = "false"
         onClick = {this.onClick.bind(this)}
         onFocus = {this.onFocus.bind(this)}
         onChange = {this.onChange.bind(this)}
       />

   );
 }

 }
