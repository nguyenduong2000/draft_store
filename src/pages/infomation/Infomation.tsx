import * as React from "react";
import PersonalInfoForm from "../../components/form-infomation/FormInfomation";

export interface IInfomationProps {}

export function Infomation(props: IInfomationProps) {
  return (
    <div style={{backgroundColor:"#fff"}}>
      <PersonalInfoForm />
    </div>
  );
}
