import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  toggleCustomInlineStyle,
  getSelectionCustomInlineStyle,
} from 'draftjs-utils';

import LayoutComponent from './Component';

class TextColorPicker extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    editorState: PropTypes.object.isRequired,
    modalHandler: PropTypes.object,
    config: PropTypes.object,
    translations: PropTypes.object,
  };

  state = {
    expanded: false,
    currentColor: undefined,
    currentBgColor: undefined,
  };

  constructor(props) {
    super(props);
    const { editorState, modalHandler } = props;
    const state = {
      expanded: false,
      currentColor: undefined,
      currentBgColor: undefined,
    };
    if (editorState) {
      state.currentColor = getSelectionCustomInlineStyle(editorState, [
        'COLOR',
      ]).COLOR;
    }
    this.state = state;
    modalHandler.registerCallBack(this.expandCollapse);
  }

  componentDidUpdate(prevProps) {
    const { editorState } = this.props;
    if (editorState && editorState !== prevProps.editorState) {
      this.setState({
        currentColor: getSelectionCustomInlineStyle(editorState, ['COLOR'])
          .COLOR,
      });
    }
  }

  componentWillUnmount() {
    const { modalHandler } = this.props;
    modalHandler.deregisterCallBack(this.expandCollapse);
  }

  onExpandEvent = () => {
    this.signalExpanded = !this.state.expanded;
  };

  expandCollapse = () => {
    this.setState({
      expanded: this.signalExpanded,
    });
    this.signalExpanded = false;
  };

  doExpand = () => {
    this.setState({
      expanded: true,
    });
  };

  doCollapse = () => {
    this.setState({
      expanded: false,
    });
  };

  toggleColor = (style, color) => {
    const { editorState, onChange } = this.props;
    const newState = toggleCustomInlineStyle(editorState, style, color);
    if (newState) {
      onChange(newState);
    }
    this.doCollapse();
  };

  render() {
    const { config, translations } = this.props;
    const { currentColor, expanded } = this.state;
    const ColorPickerComponent = config.component || LayoutComponent;
    const color = currentColor && currentColor.substring(6);
    return (
      <ColorPickerComponent
        config={config}
        translations={translations}
        onChange={this.toggleColor}
        expanded={expanded}
        onExpandEvent={this.onExpandEvent}
        doExpand={this.doExpand}
        doCollapse={this.doCollapse}
        currentState={{ color }}
      />
    );
  }
}

export default TextColorPicker;
