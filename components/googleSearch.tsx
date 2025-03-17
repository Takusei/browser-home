import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const GoogleSearch = () => {
  const [query, setQuery] = useState("");
  const [copyright, setImageCopyright] = useState<string | null>(null);

  const handleSearch = () => {
    const currQuery = query.trim();
    window.open(`https://www.google.com/search?q=${encodeURIComponent(currQuery)}`, "_blank");
  };

  useEffect(() => {
    const fetchBingCopyright = async () => {
      try {
        const response = await fetch("/api/bing-image");
        const data = await response.json();
        if (data.images && data.images.length > 0) {
          setImageCopyright(data.images[0].copyright);
        }
      } catch (error) {
        console.error("Error fetching Bing copyright:", error);
      }
    };

    fetchBingCopyright();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <form onSubmit={handleSearch} className="flex items-center gap-4 w-full">
        <Input
          type="text"
          placeholder={copyright || "Search Google"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-indigo-50 w-full"
        />
        <Button type="submit" variant="default">
          Search
        </Button>
      </form>
    </div>
  );
};

export default GoogleSearch;
