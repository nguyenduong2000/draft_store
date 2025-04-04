import { TextAreaProps } from "antd/es/input";
import "./styles.css";
import TextArea from "antd/es/input/TextArea";

// Extend the TextAreaProps to your custom props if needed
export interface ITextAreaComponentProps extends TextAreaProps {
  // You can add custom props here if needed
}

function TextAreaComponent({ ...rest }: ITextAreaComponentProps) {
  return <TextArea className="custom-text-area" {...rest} />;
}

export default TextAreaComponent;
