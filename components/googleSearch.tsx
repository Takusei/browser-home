import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const GoogleSearch = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const currQuery = query.trim();
    window.open(`https://www.google.com/search?q=${encodeURIComponent(currQuery)}`, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <form onSubmit={handleSearch} className="flex items-center gap-4 w-full">
        <Input
          type="text"
          placeholder="Search Google..."
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
