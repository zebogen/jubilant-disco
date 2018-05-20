import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'semantic-ui-react';
import Content from './components/Content';
import query from '/queries/notification';
import withQuery from '/shared/hoc/withQuery';

class Notification extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      notification: PropTypes.shape({
        show: PropTypes.bool,
        text: PropTypes.string,
        slug: PropTypes.string,
      }).isRequired,
    }).isRequired,
    client: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.data.notification.show && this.props.data.notification.show) {
      clearTimeout(this._dismissTimeout);
      this._dismissTimeout = setTimeout(() => this.dismiss(), 3000);
    }
  }

  dismiss = () => {
    this.props.client.writeData({
      data: {
        notification: {
          ...this.props.data.notification,
          show: false,
        },
      }
    });
  };

  render() {
    return (
      <Transition visible={!!this.props.data.notification.show}>
        <Content
          message={this.props.data.notification.text}
          slug={this.props.data.notification.slug}
          onDismiss={this.dismiss}
        />
      </Transition>
    );
  }
}

export default withQuery({ query })(Notification);
