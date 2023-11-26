import { lazy } from 'react';
import Delivery from '../pages/Delivery';
import MaterialDetail from '../pages/MaterialDetail';
import CreateOrder from '../pages/CreateOrder';
import CouponList from '../components/Coupon/CouponList';
import CouponDetail from '../components/Coupon/CouponDetail';

const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Product = lazy(() => import('../pages/Product'));
const LunchList = lazy(() => import('../pages/LunchList'));
const Materials = lazy(() => import('../pages/Materials'));
const Suppliers = lazy(() => import('../pages/Suppliers'));
const Users = lazy(() => import('../pages/Users'));
const MenuDetail = lazy(() => import('../pages/MenuDetail'));
const Orders = lazy(() => import('../pages/Orders'));
const TradeIn = lazy(() => import('../pages/TradeIn'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));

const coreRoutes = [
  {
    path: '/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/manage/shoes',
    title: 'Manage Shoes',
    component: LunchList,
  },
  {
    path: '/warehouse/materials',
    title: 'Manage Materials',
    component: Materials,
  },
  {
    path: '/warehouse/materials/id',
    title: 'Manage Materials',
    component: MaterialDetail,
  },
  {
    path: '/warehouse/suppliers',
    title: 'Manage Suppliers',
    component: Suppliers,
  },
  {
    path: '/manage/brand',
    title: 'Manage Brand',
    component: Product,
  },
  {
    path: '/manage/brand/id',
    title: 'Menu Detail',
    component: MenuDetail,
  },
  {
    path: '/orders/normal',
    title: 'Manage Orders',
    component: Orders,
  },
  {
    path: '/orders/trade-in',
    title: 'Manage Orders',
    component: TradeIn,
  },
  {
    path: '/orders/create-order',
    title: 'Create Orders',
    component: CreateOrder,
  },
  {
    path: '/coupon',
    title: 'Create Orders',
    component: CouponList,
  },
  {
    path: '/coupon/id',
    title: 'Coupon',
    component: CouponDetail,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/delivery',
    title: 'Delivery',
    component: Delivery,
  },
  {
    path: '/users',
    title: 'Users',
    component: Users,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
];

const routes = [...coreRoutes];
export default routes;
