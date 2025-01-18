"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function BingImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchBingImage = async () => {
      try {
        const response = await fetch("/api/bing-image");
        const data = await response.json();
        if (data.images && data.images.length > 0) {
          const bingUrl = `https://www.bing.com${data.images[0].url}`;
          setImageUrl(bingUrl);
        }
      } catch (error) {
        console.error("Error fetching Bing image:", error);
      }
    };

    fetchBingImage();
  }, []);

  return (
    <AspectRatio ratio={16 / 7} className="bg-muted">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Bing Daily Background"
          fill
          className="h-full w-full rounded-md object-cover"
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center text-muted-foreground">
          Loading...
        </div>
      )}
    </AspectRatio>
  );
}

