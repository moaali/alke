import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import moment from 'moment';
import omit from 'lodash/omit';
import momentPropTypes from 'react-moment-proptypes';
import { autobind } from 'core-decorators';
import { Col } from 'antd';
import { DateRangePickerPhrases } from 'shared/config/reactDatesPhrases';
import { START_DATE, END_DATE, HORIZONTAL_ORIENTATION, ANCHOR_LEFT } from 'shared/constants/reactDates';
import isInclusivelyAfterDay from 'shared/services/isInclusivelyAfterDay';
import { DateRangePicker, SingleDatePicker } from 'components/UI/ReactDates';
import PageTitle from 'components/Templates/PageTitle';
import Well from 'components/Templates/Well';
import LayoutContainer from 'components/Templates/LayoutContainer';
import ContentWrapper from 'components/Templates/ContentWrapper';
import './index.less';

const masonryOptions = {
  columnWidth: '.MasonrySizer',
  itemSelector: '.MasonryItem',
  percentPosition: true,
};

const propTypes = {
  autoFocus: PropTypes.bool,
  autoFocusEndDate: PropTypes.bool,
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj,
};

const defaultProps = {
  // example props for the demo
  autoFocus: false,
  autoFocusEndDate: false,
  initialStartDate: null,
  initialEndDate: null,

  // input related props
  startDateId: START_DATE,
  startDatePlaceholderText: 'Start Date',
  endDateId: END_DATE,
  endDatePlaceholderText: 'End Date',
  disabled: false,
  required: false,
  screenReaderInputMessage: '',
  showClearDates: false,
  showDefaultInputIcon: false,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,

  // calendar presentation and interaction related props
  renderMonth: null,
  orientation: HORIZONTAL_ORIENTATION,
  anchorDirection: ANCHOR_LEFT,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,
  isRTL: false,

  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},

  // day presentation and interaction related props
  renderDay: null,
  minimumNights: 1,
  enableOutsideDays: false,
  isDayBlocked: () => false,
  isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
  isDayHighlighted: () => false,

  // internationalization
  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY',
  phrases: DateRangePickerPhrases,
};

export default class ReactDatesScreen extends Component {
  constructor(props) {
    super(props);

    let focusedInput = null;
    if (props.autoFocus) {
      focusedInput = START_DATE;
    } else if (props.autoFocusEndDate) {
      focusedInput = END_DATE;
    }

    this.state = {
      focusedInput,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
    };
  }

  @autobind
  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  @autobind
  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state;

    // autoFocus, autoFocusEndDate, initialStartDate and initialEndDate are helper props for the
    // example wrapper but are not props on the SingleDatePicker itself and
    // thus, have to be omitted.
    const props = omit(this.props, [
      'match',
      'location',
      'history',
      'staticContext',
      'autoFocus',
      'autoFocusEndDate',
      'initialStartDate',
      'initialEndDate',
    ]);

    return (
      <LayoutContainer>
        <Helmet>
          <title>React Dates</title>
        </Helmet>
        <PageTitle>React Dates</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem MasonryItem-full'>
            <Well
              title='Date Picker Range'
              subtitle='This is one of many example of react-date library'
            >
              <ContentWrapper>
                <DateRangePicker
                  {...props}
                  onDatesChange={this.onDatesChange}
                  onFocusChange={this.onFocusChange}
                  focusedInput={focusedInput}
                  startDate={startDate}
                  endDate={endDate}
                />
              </ContentWrapper>
            </Well>
          </div>
          <Col className='MasonrySizer' md={24} sm={24} xs={24} />
          <div className='MasonryItem MasonryItem-full'>
            <Well
              title='Single Date Picker Range'
              subtitle='This is one of many example of react-date library'
            >
              <ContentWrapper>
                <SingleDatePicker
                  date={this.state.date} // momentPropTypes.momentObj or null
                  onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                  focused={this.state.focused} // PropTypes.bool
                  onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                />
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}

ReactDatesScreen.propTypes = propTypes;
ReactDatesScreen.defaultProps = defaultProps;
