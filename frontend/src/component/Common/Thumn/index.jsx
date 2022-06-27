/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
import React from 'react';

export default class Thumb extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) { return; }

    this.setState({ loading: true }, () => {
      const reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) { return null; }

    if (loading) { return <p>loading...</p>; }

    return (
      <img
        src={thumb}
        alt={file.name}
        className="img-thumbnail mt-2"
        height={200}
        width={200} />
    );
  }
}
