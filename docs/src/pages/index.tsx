import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Row, Col } from 'antd';

import { InfoBox } from '../components/AlertBox/AlertBox';
import MainTab from '../components/templates/MainTab';

import imgGettingStarted from './images/getting-started.svg';
import imgForDevs from './images/for-devs.svg';
import imgInsights from './images/insights.svg';
import imgDashboards from './images/dashboards.svg';

import * as styles from '../../static/styles/index.module.scss';
import { Page, Scopes, SetScrollSectionsAndGithubUrlFunction } from '../types';

type Props = {
  changePage(page: Page): void;
  setScrollSectionsAndGithubUrl: SetScrollSectionsAndGithubUrlFunction;
};

class IndexPage extends Component<Props> {
  componentWillMount() {
    this.props.changePage({ scope: Scopes.DEFAULT, category: 'Index' });
    this.props.setScrollSectionsAndGithubUrl([], '');
  }

  render() {
    return (
      <div className={styles.docContent}>
        <Helmet title="Main | Cube Docs" />
        <h1>Documentation</h1>
        
        <InfoBox>
          <b>The SQL API and Extended Support for BI Tools</b> workshop on June 22, 2022.<br/> 
          You'll have the opportunity to learn the latest on Cube's <a href="https://cube.dev/blog/expanded-bi-support/">SQL API.</a><br /> 
          Check out the agenda and resigter for the workshop today on the <a href="https://cube.dev/events/sql-api">event page</a> 👈
        </InfoBox>
        
        <Row>
          <Col span={24}>
            <p>
              Read about major concepts, dive into technical details or follow
              practical examples to learn how Cube works.
            </p>
          </Col>
        </Row>
        <div className={styles.mainTabs}>
          <Row>
            <MainTab
              title="Getting Started"
              img={imgGettingStarted}
              desc="Start here if you're new to Cube"
              to="/getting-started"
            />
            <MainTab
              title="Connect to Data Sources"
              img={imgInsights}
              desc="Connecting to data warehouses, query engines, relational databases, etc."
              to="/config/databases"
              right
            />
          </Row>
          <Row>
            <MainTab
              title="Data Model"
              img={imgForDevs}
              desc="Building the data model, the single source of truth for your metrics"
              to="/schema/getting-started"
            />
            <MainTab
              title="Connect to Visualization Tools"
              img={imgDashboards}
              desc="Integrating Cube with BI tools, data apps, notebooks, and front-end tools"
              to="/config/downstream"
              right
            />
          </Row>
          <Row>
            <MainTab
              title="Caching"
              img={imgDashboards}
              desc="Accelerating queries and getting the best performance from Cube"
              to="/caching"
            />
            <MainTab
              title="Deployment"
              img={imgInsights}
              desc="Deploying your application to Cube Cloud, a public cloud, or on-premise"
              to="/deployment"
              right
            />
          </Row>
        </div>
      </div>
    );
  }
}

export default IndexPage;
