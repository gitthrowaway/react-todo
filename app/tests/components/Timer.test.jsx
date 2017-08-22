var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist',() => {
    expect(Timer).toExist();
  });

  describe('handleTimer', () => {
    it('should start timer and set status to started', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        expect(timer.state.timerStatus).toBe('started');
        done();
      }, 1001);
    });

    it('should pause timer on paused status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.setState({count: 11});
      timer.handleStatusChange('started');
      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.count).toBe(11);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should clear timer on stopped status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.setState({count: 12});
      timer.handleStatusChange('started');

      setTimeout(() => {
        timer.handleStatusChange('stopped');
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 3001);
    });


  });

});
