/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";

const DataCard = ({ className, ...props }) => {
  return (
    <div
      className={cn("bg-white rounded-md shadow-md p-6", className)}
      {...props}
    />
  );
};

const DataCartTitle = ({ icon, className, children, ...props }) => {
  return (
    <div className="flex justify-between mb-1">
      <h2 className={cn("text-xl font-semibold", className)} {...props}>
        {children}
      </h2>
      {icon}
    </div>
  );
};

const DataCardValue = ({ className, ...props }) => {
  return <p className={cn("text-3xl font-bold", className)} {...props}></p>;
};

const DataCardDescription = ({ className, ...props }) => {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    ></p>
  );
};

export { DataCard, DataCartTitle, DataCardValue, DataCardDescription };
