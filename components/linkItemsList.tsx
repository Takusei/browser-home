import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface LinkItem {
  icon?: React.ReactNode; // icon is optional
  url: string;
  title: string;
}

interface LinkItemsListProps {
  items: LinkItem[];
  category?: string;
}

const getFaviconUrl = (url: string) => {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`; // Google favicon service
  } catch {
    return ""; // Return empty if URL is invalid
  }
};

const LinkItemsList: React.FC<LinkItemsListProps> = ({ items, category }) => {
  return (
    <div>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <h4 className="text-sm font-medium leading-none">{category}</h4>
        {items.map((item, index) => (
          <Button variant="secondary" key={index} asChild>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              {item.icon ? (
                // Use custom icon if provided
                item.icon
              ) : (
                // Use favicon from Google if no custom icon exists
                <Image
                  src={getFaviconUrl(item.url)}
                  alt={`${item.title} favicon`}
                  className="w-5 h-5"
                  unoptimized
                  quality={100}  
                  width={16}
                  height={16}
                />
              )}
              {item.title}
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LinkItemsList;
