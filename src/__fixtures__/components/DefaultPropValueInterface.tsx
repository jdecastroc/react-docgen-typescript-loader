import * as React from "react";

interface DefaultPropValueComponentProps {
  /**
   * Button color.
   *
   * @default blue
   **/
  color: "blue" | "green";

  /**
   * Button counter.
   */
  counter: InterfaceSample;

  /**
   * Button disabled.
   */
  disabled: boolean;
}

/**
 * Comment for InterfaceSample
 */
interface InterfaceSample {
  /**
   * Comment for stringSample
   */
  stringSample: string;
  /**
   * Comment for typeSample
   */
  typeSample: "M" | "L";
  /**
   * Comment for nestedStringSample
   */
  nestedInterfaceSample?: NestedInterfaceSample;
}

/**
 * Comment for NestedInterfaceSample
 */
interface NestedInterfaceSample {
  /**
   * Comment for nestedStringSample
   */
  nestedStringSample: string;
}

/**
 * Component with a prop with a default value.
 */
export const DefaultPropValueComponent: React.SFC<DefaultPropValueComponentProps> = props => (
  <button disabled={props.disabled} style={{ backgroundColor: props.color }}>
    {props.counter}
    {props.children}
  </button>
);

DefaultPropValueComponent.defaultProps = {
  disabled: false,
};
