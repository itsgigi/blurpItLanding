export const SectionHeading = ({ title, description, className = '' }: { title: string, description: string, className?: string }) => {
  return (
    <div className={`flex flex-col md:flex-row gap-8 md:gap-10 items-start md:items-center mb-16 md:mb-20 ${className}`}>
      <div className="bg-primary px-2 rounded-[7px] inline-block">
        <h2 className="text-3xl md:text-[40px] font-medium text-black font-space whitespace-pre-wrap leading-tight">
          {title}
        </h2>
      </div>
      <p className="text-lg text-black font-space max-w-xl">
        {description}
      </p>
    </div>
  );
};

