import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import ProductsPage from './pages/ProductsPage';
import Layout from './Layout';
// import ProductsPageDetails from './pages/ProductsPage/ProductsPageDetails'
import { Suspense, lazy } from 'react';
import './store/store';
import UserPage from 'pages/UserPage';
import Loader from 'components/Loading/Index';
// import Login from 'pages/Login';
// import Registration from 'pages/Registration/Index';

const ProductsPageDetails = lazy(() =>
  import('./pages/ProductsPage/ProductsPageDetails')
);

const Login = lazy(() => import('./pages/Login'));
const Registration = lazy(() => import('./pages/Registration/Index'));

const App = () => {
  return (
    <>
      <Loader />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="todos" element={<TodoPage />} />
          <Route path="users" element={<UserPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route
            path="products/:productId"
            element={
              <Suspense fallback={'Loading.....'}>
                <ProductsPageDetails />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={'Loading.....'}>
                <Login />
              </Suspense>
            } 
          />
          <Route
            path="/registration"
            element={
              <Suspense fallback={'Loading.....'}>
                <Registration />
              </Suspense>
            }
          />
        </Route>
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </>
  );
};

export default App;
