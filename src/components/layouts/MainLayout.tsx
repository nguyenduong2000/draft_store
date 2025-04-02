import * as React from 'react';
import { Outlet } from 'react-router-dom';

export interface IMainLayoutProps {
  children: React.ReactNode; 
}

export default function MainLayout (props: IMainLayoutProps) {
  return (
    <div>
      <p>Layout</p>
      {props.children}
    </div>
  );
}
