import React, { useEffect } from 'react';
import RouteHander from 'plugins/route';
import Menutest from 'Components/SideBarMenu';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

const UnMount = () => {
};

const Mount = () => {
  useEffect(() => {
    return UnMount;
  }, []);
};

const Dashboard = (prop: any) => {
  const { routes } = prop;
  Mount();
  return (
    <div>
      <Menutest />
      <h1>Dashboarda</h1>
      {RouteHander(routes)}
    </div>
  );
};

// ============================================================================
const mapStateToProps = ({ authReducer }: any) => {
  return {
    authInfo: authReducer.get('authInfo'),
  };
};

export default injectIntl(connect(mapStateToProps)(Dashboard));
