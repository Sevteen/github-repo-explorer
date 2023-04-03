import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Users } from '../pages/search-user/list-users';

const Pages: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Navigate replace to="search-users" />} />
        <Route path="search-users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Pages };
