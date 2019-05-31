const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

class CustomD3Component extends D3Component {

  loadData(props) {
    fetch(props.src)
      .then((response) => {
        return response.text();
      }).then((text) => {
        const parsed = d3.csvParse(text);
        props.updateProps({ value: parsed });
      })
  }

  initialize(node, props) {
    if (props.load) {
      this.loadData(props);
    }
  }

  update(props, oldProps) {
    if (props.load) {
      this.loadData(props);
    }
  }
}

module.exports = CustomD3Component;
