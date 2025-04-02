import * as React from 'react';
import "./main.css"
export interface IMainProps {
  children: React.ReactNode; 

}

export default function Main (props: IMainProps) {
  return (
    <div className='main-container'>
              {props.children}

    </div>
  );
}
