/* eslint-disable @next/next/no-img-element */
import React from "react";
import Select, { components } from "react-select";

const SelectShared = ({
  handleChangeSelect,
  name,
  value,
  options,
  isDisabled = false,
  placeholder = "Pilih",
  isImg = false,
  customSelect,
  colorLeft = false,
  customControlClass = "",
  isClearable = false,
}) => {
  const Option = (props) => {
    return isImg ? (
      <components.Option {...props}>
        <div className="d-flex align-items-center">
          {props.data.img && (
            <img
              src={props.data.img}
              alt={props.data.label}
              style={{ height: 50, width: 50, objectFit: "contain" }}
            />
          )}
          <div className="ms-4">
            <div className="text-capitalize">{props.data.label}</div>
            <div style={{ fontSize: 12 }}>{props.data.value}</div>
          </div>
        </div>
      </components.Option>
    ) : customSelect ? (
      <components.Option {...props} className="ASDAD">
        {customSelect(props)}
      </components.Option>
    ) : (
      <components.Option {...props}>
        <div className="text-capitalize">{props.data.label}</div>
      </components.Option>
    );
  };

  const Control = ({ children, ...rest }) => {
    return (
      <components.Control {...rest} className={customControlClass}>
        {colorLeft && (
          <div
            style={{
              width: 24,
              height: 24,
              background: rest.getValue()?.[0]?.value,
              borderRadius: "50%",
            }}
          />
        )}
        {children}
      </components.Control>
    );
  };

  return (
    <Select
      components={{ Option, Control }}
      options={options}
      placeholder={placeholder}
      onChange={(e) => handleChangeSelect(e, name)}
      value={options?.filter((d) => d.value === value)}
      isDisabled={isDisabled}
      menuPlacement={"auto"}
      name={name}
      isClearable={isClearable}
    />
  );
};

export default SelectShared;
