
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Youtube } from 'lucide-react';

interface YouTubeVideoProps {
  videoId: string;
  title: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId, title }) => {
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
  
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
        <div className="p-4">
          <h3 className="font-medium text-lg">{title}</h3>
          <Button
            variant="outline"
            size="sm"
            className="mt-2 gap-1"
            onClick={() => window.open(youtubeUrl, '_blank')}
          >
            <Youtube className="h-4 w-4" />
            <span>Watch on YouTube</span>
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default YouTubeVideo;