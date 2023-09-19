interface AlertTitleHeaderProps {
  title: string;
  text: string;
}

const AlertTitleHeader = ({ title, text }: AlertTitleHeaderProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[6px]">
      <p className="w-[264px] title4-bold text-center text-[#1A1A1A]">
        {title}
      </p>
      <p className="text1-medium w-[264px] text-center text-[#747E8A]">
        {text}
      </p>
    </div>
  );
};

export default AlertTitleHeader;
