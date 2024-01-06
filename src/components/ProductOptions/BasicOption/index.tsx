import Button from "@/components/Button";

const BasicOption = ({
  title,
  values,
}: {
  title: string;
  values: string[];
}) => {
  return (
    <div className="basic-option">
      <div className="title-wrapper">
        <div>{title}</div>
        <div>:</div>
      </div>
      <div className="options-wrapper">
        {values.map((value, index) => (
          <Button variant="option-box" label={value} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BasicOption;
