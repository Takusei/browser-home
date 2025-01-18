import React from "react";
import { Button } from "@/components/ui/button"

interface LinkItem {
  icon: React.ReactNode;
  url: string;
  title: string;
}

interface LinkItemsListProps {
  items: LinkItem[];
}

const LinkItemsList: React.FC<LinkItemsListProps> = ({ items }) => {
  return (
    <div className="flex gap-4 items-center flex-col sm:flex-row">
      {items.map((item, index) => (
        <Button variant="secondary" key={index} asChild>
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            {item.icon}
            {item.title}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default LinkItemsList;
