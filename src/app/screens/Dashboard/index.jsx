import React, { Component } from 'react';
import Animation from 'components/Animation';
import Masonry from 'react-masonry-component';
import { Row, Col } from 'antd';

import {
  ProgressGadget,
  QuickEmail,
  SimpleGadget,
  SocialProfile,
} from 'components';

import {
  StackedAreaChart,
  SimpleLineChart,
  BarChart,
  DataTable,
  TinyAreaChart,
  TinyBarChart,
  TinyLineChart,
} from './components';

const masonryOptions = {
  columnWidth: '.MasonrySizer',
  itemSelector: '.MasonryItem',
  percentPosition: true,
};

export default class Name extends Component {
  render() {
    return (
      <Animation>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem MasonryItem-full'>
            <div className='gutter-20'>
              <Col md={6} sm={12} xs={24}>
                <SimpleGadget
                  title={'$5123'}
                  icon={'bank'}
                  iconColor={'#fff'}
                  iconBackground={'#0f9aee'}
                  text={'Total Income'}
                />
              </Col>
              <Col md={6} sm={12} xs={24}>
                <SimpleGadget
                  title={'$123'}
                  icon={'bank'}
                  iconColor={'#fff'}
                  iconBackground={'#7774e7'}
                  text={'Yearly Losses'}
                />
              </Col>
              <Col md={6} sm={12} xs={24}>
                <SimpleGadget
                  title={'90%'}
                  icon={'bank'}
                  iconColor={'#fff'}
                  iconBackground={'#37c936'}
                  text={'Store Traffic'}
                />
              </Col>
              <Col md={6} sm={12} xs={24}>
                <SimpleGadget
                  title={'4567'}
                  icon={'bank'}
                  iconColor={'#fff'}
                  iconBackground={'#dc3545'}
                  text={'New Members'}
                />
              </Col>
            </div>
          </div>
          <Row className='MasonryItem MasonryItem-full'>
            <Col>
              <div className='layers layers-start bgc-White bdrs-3'>
                <div className='layer w-100 pX-20 pY-10 bdB'>
                  <h4>New Customers</h4>
                </div>
                <div className='layer w-100 pX-20 pY-30'>
                  <div className='peers peers-c peers-greed gutter-30'>
                    <div className='peers peers-c peers-nw'>
                      <div className='peer mR-20'>
                        <TinyAreaChart />
                      </div>
                      <div className='peer peer-greed'>
                        <h4>Recent Sales</h4>
                        <p>New sales over the past 7 days</p>
                      </div>
                    </div>
                    <div className='peers peers-c peers-nw'>
                      <div className='peer mR-20'>
                        <TinyBarChart />
                      </div>
                      <div className='peer peer-greed'>
                        <h4>New Customers</h4>
                        <p>New customers over the past 7 days</p>
                      </div>
                    </div>
                    <div className='peers peers-c peers-nw'>
                      <div className='peer mR-20'>
                        <TinyLineChart />
                      </div>
                      <div className='peer peer-greed'>
                        <h4>Total Downloads</h4>
                        <p>All downlods over the past 7 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='layer w-100 p-20'>
                  <DataTable />
                </div>
              </div>
            </Col>
          </Row>
          <Row className='MasonryItem'>
            <Col>
              <div className='layers layers-start bgc-White bdrs-3'>
                <div className='layer w-100 pX-20 pY-10 bdB'>
                  <h4>Monthly Stats</h4>
                </div>
                <div className='layer w-100 pX-20 pY-30'>
                  <div className='peers peers-c peers-greed ta-c gutter-30'>
                    <Col className='peer' xs={24} sm={12} xl={6}>
                      <div>
                        <h2 className='mB-5'>10%</h2>
                        <b className='op-05'>APPL</b>
                      </div>
                    </Col>
                    <Col className='peer' xs={24} sm={12} xl={6}>
                      <div>
                        <h2 className='mB-5'>$12345</h2>
                        <b className='op-05'>Revenue</b>
                      </div>
                    </Col>
                    <Col className='peer' xs={24} sm={12} xl={6}>
                      <div>
                        <h2 className='mB-5'>50%</h2>
                        <b className='op-05'>Increment</b>
                      </div>
                    </Col>
                    <Col className='peer' xs={24} sm={12} xl={6}>
                      <div>
                        <h2 className='mB-5 c-LimeGreen'>+20%</h2>
                        <b className='op-05'>Profit</b>
                      </div>
                    </Col>
                  </div>
                </div>
                <div className='layer w-100 p-20'>
                  <StackedAreaChart />
                </div>
              </div>
            </Col>
          </Row>
          <Row className='MasonryItem'>
            <Col className='mB-20'>
              <ProgressGadget
                title={'Total Visits'}
                icon={'user'}
                iconColor={'#fff'}
                iconBackground={'#0f9aee'}
                text={'10% increase then last month'}
                progressPercent={70}
                progressStroke={3}
              />
            </Col>
            <Col className='mB-20'>
              <ProgressGadget
                title={'Total Downloads'}
                icon={'cloud-download'}
                iconColor={'#fff'}
                iconBackground={'#7774e7'}
                text={'10% increase then last month'}
                progressPercent={60}
                progressStroke={3}
              />
            </Col>
            <Col>
              <ProgressGadget
                title={'Item Purchases'}
                icon={'bank'}
                iconColor={'#fff'}
                iconBackground={'#37c936'}
                text={'10% increase then last month'}
                progressPercent={60}
                progressStroke={3}
              />
            </Col>
          </Row>
          <Row className='MasonryItem'>
            <Col>
              <div className='layers layers-start bgc-White bdrs-3'>
                <div className='layer w-100 pX-20 pY-10 bdB'>
                  <h4>Weekly Stats</h4>
                </div>
                <div className='layer w-100 p-20'>
                  <SimpleLineChart />
                </div>
              </div>
            </Col>
          </Row>
          <Row className='MasonryItem'>
            <Col>
              <div className='layers layers-start bgc-White bdrs-3'>
                <div className='layer w-100 pX-20 pY-10 bdB'>
                  <h4>Yearly Stats</h4>
                </div>
                <div className='layer w-100 p-20'>
                  <BarChart />
                </div>
              </div>
            </Col>
          </Row>
          <Row className='MasonryItem'>
            <QuickEmail />
          </Row>
          <Row className='MasonryItem'>
            <SocialProfile />
          </Row>
        </Masonry>
      </Animation>
    );
  }
}
