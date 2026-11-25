"use client";

import React from "react";

const Title = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <h2 className="text-3xl font-bold text-foreground">{text}</h2>
      <div className="flex gap-1 mt-2">
        <div className="w-28 h-1.5 bg-purple-500 rounded-full"></div>
        <div className="w-10 h-1.5 bg-violet-500 rounded-full"></div>
        <div className="w-4 h-1.5 bg-purple-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default Title;
