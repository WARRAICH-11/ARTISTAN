import { motion } from 'motion/react';
import { X } from 'lucide-react';
import React from 'react';

interface ColorDetailModalProps {
  gradient: {
    id: string;
    name: string;
    colors: string[];
    description: string;
    usage: string;
  };
  onClose: () => void;
}

export function ColorDetailModal({ gradient, onClose }: ColorDetailModalProps) {
  const gradientStyle = {
    background: `linear-gradient(135deg, ${gradient.colors.join(', ')})`
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-3xl overflow-hidden max-w-md w-full shadow-2xl"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        layoutId={`gradient-${gradient.id}`}
      >
        {/* Gradient Header */}
        <div className="relative h-48" style={gradientStyle}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="mb-3">{gradient.name}</h2>
          <p className="text-muted-foreground mb-4">{gradient.description}</p>
          
          {/* Color Swatches */}
          <div className="mb-4">
            <h3 className="mb-2">Colors</h3>
            <div className="flex gap-2">
              {gradient.colors.map((color, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-12 h-12 rounded-lg border border-gray-200"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-xs text-muted-foreground mt-1 font-mono">
                    {color}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Usage */}
          <div>
            <h3 className="mb-2">Usage</h3>
            <p className="text-muted-foreground">{gradient.usage}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}