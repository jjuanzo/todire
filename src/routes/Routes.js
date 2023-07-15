import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AuthLogin, Error404, Home } from '../page';

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth">
          <Route path="login" element={<AuthLogin />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
