import * as React from 'react';
import SidebarMenu from './sidebar/SidebarMenu';
import {Main} from './main';
import { Header } from './header';

export interface IMainLayoutProps {
    children: React.ReactNode; 
}

export default function MainLayout (props: IMainLayoutProps) {
  const [sidebarVisible, setSidebarVisible] = React.useState(false);
  return (
    <div>
      <SidebarMenu sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}/>
      <Header sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}/>
      <Main>{props.children}</Main>
    </div>
  );
}
