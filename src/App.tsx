import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoardLayout from './page/layout';
import HostingPage from './page/HostingPage';
import ListingPage from './page/ListingPage';
import TenantPage from './page/TenantPage';
import ListingDeatilPage from './page/ListingDetailPage';

function App() {
  return (
    <BrowserRouter>
      <DashBoardLayout>
        <Routes>
          <Route index element={<HostingPage />} />
          <Route path='/tenants' element={<TenantPage />} />
          <Route path='/listings' element={<ListingPage />} />
          <Route path='/settings' element={<ListingDeatilPage />} />
        </Routes>
      </DashBoardLayout>
    </BrowserRouter>
  );
}

export default App;
