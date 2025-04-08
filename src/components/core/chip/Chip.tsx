import "./styles.scss";

interface ChipProps {
  children: React.ReactNode | string;
  key: string;
}

const Chip = ({ key, children }: ChipProps) => {
  return (
    <div className="chip" key={key}>
      {children}
    </div>
  );
};

export default Chip;
