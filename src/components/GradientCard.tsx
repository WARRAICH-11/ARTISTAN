import { motion } from 'motion/react';
import React from 'react';

interface GradientCardProps {
  gradient: {
    id: string;
    name: string;
    colors: string[];
    description: string;
    usage: string;
  };
  onClick: () => void;
}

export function GradientCard({ gradient, onClick }: GradientCardProps) {
  const gradientStyle = {
    background: `linear-gradient(135deg, ${gradient.colors.join(', ')})`
  };

  return (
    <motion.div
      className="aspect-square rounded-2xl cursor-pointer overflow-hidden"
      style={gradientStyle}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      layoutId={`gradient-${gradient.id}`}
    />
  );
}