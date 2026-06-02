const ottPlatforms = [
  // Video Streaming
  { id: 'netflix', name: 'Netflix', emoji: '🎬', category: 'video', tagline: 'Top originals, movies, and series', description: 'Stream award-winning TV shows and blockbuster movies on demand.', highlight: 'Popular originals and curated collections' },
  { id: 'primevideo', name: 'Amazon Prime Video', emoji: '🛒', category: 'video', tagline: 'Premium movies, originals, and fast access', description: 'Watch award-winning films, trending series, and exclusive releases.', highlight: 'Prime-exclusive titles' },
  { id: 'disneyhotstar', name: 'Disney+ Hotstar', emoji: '🐭', category: 'video', tagline: 'Family-friendly storytelling and live sports', description: 'Enjoy Disney classics, Marvel, Star Wars, and live cricket.', highlight: 'Kids favorites and sports' },
  { id: 'sonyliv', name: 'Sony LIV', emoji: '📺', category: 'video', tagline: 'TV shows, movies and live sports', description: 'On-demand TV, streaming movies and live sports.', highlight: 'Indian TV and sports content' },
  { id: 'zee5', name: 'ZEE5', emoji: '🌐', category: 'video', tagline: 'Regional and international shows', description: 'Stream regional language series and international content.', highlight: 'Regional catalogs and originals' },

  // Music Streaming
  { id: 'spotify', name: 'Spotify', emoji: '🎧', category: 'music', tagline: 'Music, podcasts, and playlists', description: 'Discover new tracks, playlists, and audio stories anywhere.', highlight: 'Personalized playlists' },
  { id: 'jiosaavn', name: 'JioSaavn', emoji: '🎵', category: 'music', tagline: 'Indian music and podcasts', description: 'Local and international music with curated playlists.', highlight: 'Indian catalog and regional tracks' },
  { id: 'gaana', name: 'Gaana', emoji: '🎶', category: 'music', tagline: 'Bollywood and regional hits', description: 'Stream millions of songs in multiple languages.', highlight: 'Bollywood charts and playlists' },
  { id: 'applemusic', name: 'Apple Music', emoji: '🍏', category: 'music', tagline: 'Lossless audio and exclusives', description: 'Premium audio experience with exclusive releases.', highlight: 'High quality audio and exclusives' },
  { id: 'youtubemusic', name: 'YouTube Music', emoji: '📺', category: 'music', tagline: 'Music videos and tracks together', description: 'Watch music videos and listen to songs seamlessly.', highlight: 'Video + music experience' },

  // Sports OTT
  { id: 'jiohotstar', name: 'JioHotstar', emoji: '🏏', category: 'sports', tagline: 'Live sports and highlights', description: 'Live cricket, football, and sports highlights.', highlight: 'Live sports streaming' },
  { id: 'fancode', name: 'FanCode', emoji: '🏅', category: 'sports', tagline: 'Sports app for live streaming', description: 'Specialized sports coverage and live events.', highlight: 'Niche sports streams' },
  { id: 'discoveryplus', name: 'Discovery+', emoji: '🔎', category: 'sports', tagline: 'Documentaries and sports', description: 'Sports docs and live events in some regions.', highlight: 'Documentaries and specials' },
  { id: 'dazn', name: 'DAZN', emoji: '🎯', category: 'sports', tagline: 'Subscription sports streaming', description: 'Global sports rights and live events.', highlight: 'Live boxing and combat sports' },

  // Regional Platforms
  { id: 'sunnxt', name: 'Sun NXT', emoji: '☀️', category: 'regional', tagline: 'South Indian movies and TV', description: 'Tamil, Telugu, Malayalam and Kannada content.', highlight: 'Regional blockbusters' },
  { id: 'aha', name: 'Aha', emoji: '🟣', category: 'regional', tagline: 'Telugu originals and movies', description: 'Telugu-native originals and films.', highlight: 'Telugu-first content' },
  { id: 'hoichoi', name: 'Hoichoi', emoji: '🦩', category: 'regional', tagline: 'Bengali entertainment', description: 'Bengali movies, web series and originals.', highlight: 'Bengali originals' },
  { id: 'manoramamax', name: 'ManoramaMAX', emoji: '🌾', category: 'regional', tagline: 'Malayalam shows and movies', description: 'Malayalam movies, serials and originals.', highlight: 'Malayalam catalog' },
  { id: 'planetmarathi', name: 'Planet Marathi OTT', emoji: '🎭', category: 'regional', tagline: 'Marathi films and series', description: 'Marathi language entertainment and originals.', highlight: 'Marathi content hub' },

  // Anime
  { id: 'crunchyroll', name: 'Crunchyroll', emoji: '🌸', category: 'anime', tagline: 'Anime library with simulcasts', description: 'Latest anime episodes and classics.', highlight: 'Simulcasts and manga' },
  { id: 'animetimes', name: 'Anime Times', emoji: '🌀', category: 'anime', tagline: 'Curated anime collections', description: 'Niche anime streaming and editor picks.', highlight: 'Curated anime' },

  // Others (from earlier set)
  { id: 'hbo', name: 'HBO Max', emoji: '🎥', category: 'video', tagline: 'Prestige dramas and premieres', description: 'Stream Max Originals and big premieres.', highlight: 'Prestige series' },
  { id: 'hulu', name: 'Hulu', emoji: '📺', category: 'video', tagline: 'Live TV and on-demand', description: 'Next-day TV, originals and live sports.', highlight: 'Network TV and originals' },
  { id: 'peacock', name: 'Peacock', emoji: '🦚', category: 'video', tagline: 'Free & Premium catalog', description: 'Comedies, dramas and sports.', highlight: 'Free tier options' },
  { id: 'paramount', name: 'Paramount+', emoji: '🎞️', category: 'video', tagline: 'CBS shows and movies', description: 'TV hits and sports packages.', highlight: 'CBS catalog' },
];

export default ottPlatforms;
