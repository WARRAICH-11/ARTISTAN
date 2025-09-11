import { ArtPiece } from "../components/ShoppingCartContext";

export const artworks: ArtPiece[] = [
  {
    id: "abstract-01",
    title: "Ethereal Abstractions",
    artist: "Marina Delacroix",
    price: 2850,
    image:
      "https://images.unsplash.com/photo-1592537131333-2bee8853e5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMHBhaW50aW5nJTIwY2FudmFzfGVufDF8fHx8MTc1NzUyNDQ5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "abstract",
    description:
      "A mesmerizing blend of colors and forms that transcends traditional artistic boundaries, inviting viewers into a world of pure emotion and expression.",
    dimensions: '36" x 48"',
    medium: "Acrylic on Canvas",
  },
  {
    id: "landscape-01",
    title: "Mountain Reverie",
    artist: "Alessandro Rosetti",
    price: 3200,
    image:
      "https://images.unsplash.com/photo-1701979396436-7d2107f65ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwYWludGluZyUyMGxhbmRzY2FwZSUyMGFydHxlbnwxfHx8fDE3NTc1MjQ1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "landscape",
    description:
      "A breathtaking landscape capturing the serene beauty of untouched wilderness, painted with masterful technique and emotional depth.",
    dimensions: '30" x 40"',
    medium: "Oil on Canvas",
  },
  {
    id: "contemporary-01",
    title: "Urban Reflections",
    artist: "Chen Wei-Ming",
    price: 4100,
    image:
      "https://images.unsplash.com/photo-1579519397415-ef409ed831ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBnYWxsZXJ5JTIwbXVzZXVtfGVufDF8fHx8MTc1NzUyNDUwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "contemporary",
    description:
      "A powerful contemporary piece exploring the intersection of modern life and artistic expression in urban environments.",
    dimensions: '42" x 54"',
    medium: "Mixed Media on Canvas",
  },
  {
    id: "watercolor-01",
    title: "Flowing Dreams",
    artist: "Isabella Santos",
    price: 1850,
    image:
      "https://images.unsplash.com/photo-1681238337874-c65010a35603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwcGFpbnRpbmclMjBhcnR3b3JrfGVufDF8fHx8MTc1NzQ4NzU4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "watercolor",
    description:
      "Delicate watercolor techniques create a dreamlike quality that captures the ephemeral beauty of nature in fluid motion.",
    dimensions: '24" x 32"',
    medium: "Watercolor on Paper",
  },
  {
    id: "sculpture-01",
    title: "Timeless Form",
    artist: "Marcus Thompson",
    price: 7500,
    image:
      "https://github.com/MUGHAL-66/MYPORTFOLIO/blob/main/DSC_0111.jpg",
    category: "sculpture",
    description:
      "A contemporary sculpture that challenges perceptions of space, form, and material, creating a dialogue between tradition and innovation.",
    dimensions: '18" x 12" x 24"',
    medium: "Bronze and Steel",
  },
  {
    id: "portrait-01",
    title: "Masculine Grace",
    artist: "Victoria Blackwood",
    price: 4800,
    image:
      "https://warraich-11.github.io/PORTFOLIO/IMG_7911.png",
    category: "portrait",
    description:
      "A masterful classical portrait that captures the timeless elegance and inner strength of the human spirit through exquisite brushwork and luminous detail.",
    dimensions: '28" x 36"',
    medium: "Oil on Canvas",
  },
];

export const categories = [
  { id: "all", name: "All Artworks", count: artworks.length },
  {
    id: "abstract",
    name: "Abstract",
    count: artworks.filter((art) => art.category === "abstract")
      .length,
  },
  {
    id: "landscape",
    name: "Landscape",
    count: artworks.filter(
      (art) => art.category === "landscape",
    ).length,
  },
  {
    id: "contemporary",
    name: "Contemporary",
    count: artworks.filter(
      (art) => art.category === "contemporary",
    ).length,
  },
  {
    id: "watercolor",
    name: "Watercolor",
    count: artworks.filter(
      (art) => art.category === "watercolor",
    ).length,
  },
  {
    id: "sculpture",
    name: "Sculpture",
    count: artworks.filter(
      (art) => art.category === "sculpture",
    ).length,
  },
  {
    id: "portrait",
    name: "Portraits",
    count: artworks.filter((art) => art.category === "portrait")
      .length,
  },
];