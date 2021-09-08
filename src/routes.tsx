import React, {FC} from 'react';
import {NativeRouter, Route} from 'react-router-native';

const Homepage = React.lazy(() => import('./views/homepage/homepage'));

const Routes: FC = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={Homepage} />
    </NativeRouter>
  );
};

export default Routes;
