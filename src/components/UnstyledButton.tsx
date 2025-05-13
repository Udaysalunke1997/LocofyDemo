import { FunctionComponent } from "react";
import "./UnstyledButton.scss";

export type UnstyledButtonType = {
  className?: string;

  /** Variant props */
  iconLeft?: boolean;
  iconRight?: boolean;
  size?: string;
  variant?: string;
};

const UnstyledButton: FunctionComponent<UnstyledButtonType> = ({
  className = "",
  iconLeft = false,
  iconRight = false,
  size = "Large",
  variant = "Outlined",
}) => {
  return (
    <div
      className="unstyledbutton"
      data-iconLeft={iconLeft}
      data-iconRight={iconRight}
      data-size={size}
      data-variant={variant}
    >
      <div className="button2">submit</div>
    </div>
  );
};

export default UnstyledButton;
