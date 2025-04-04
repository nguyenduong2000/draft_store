import { Select, SelectProps } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./styles.css"

// Define the interface that extends Ant Design's SelectProps
export interface ISelectProps<T> extends SelectProps<T> {}

function SelectComponent<T>({ ...rest }: ISelectProps<T>) {
  return (
    <Select
      className="custom-select"
      suffixIcon={<FontAwesomeIcon icon={faCaretDown} />}
      {...rest} // Spread the props into the Select component
    />
  );
}

export default SelectComponent;
