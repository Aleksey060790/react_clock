import React from 'react';

interface Props {
  clockName: number;
}

interface State {
  currentDate: Date;
}

export class Clock extends React.Component<Props, State> {
  timerId?: NodeJS.Timeout;

  state: State = {
    currentDate: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ currentDate: new Date() });

      // eslint-disable-next-line no-console
      console.log(this.state.currentDate.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { currentDate } = this.state;

    return (
      <p className="App__clock">
        Current time:
        {' '}
        {currentDate.toLocaleTimeString()}
      </p>
    );
  }
}