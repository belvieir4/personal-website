import { Outlet } from '@tanstack/react-router';
import Header from 'components/Header';

const MainView = () => {
  return (
    <>
      <Header />
      <div className="mx-auto w-full px-4 md:px-6 xl:max-w-[1280px] xl:px-0">
        <Outlet />
      </div>
    </>
  );
};

export default MainView;
