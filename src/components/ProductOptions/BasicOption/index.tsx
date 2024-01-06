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
        {values.map((value) => (
          <Button variant="option-box" label={value} />
        ))}
      </div>
    </div>
  );
};

export default BasicOption;
