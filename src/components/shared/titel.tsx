import { Subtitles } from "lucide-react";
import React from "react";

interface TitleProps {
  title: string;
  subtitle: string;
}

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="pb-4 pl-2 font-serif">
      <p className="text-xl md:text-2xl font-semibold">{title}</p>
      <p className="text-sm text-secondary-foreground">{subtitle}</p>
    </div>
  );
};

export default Title;
