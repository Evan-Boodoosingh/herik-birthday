import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  year: string;
  description: string;
}

export function ImageModal({
  isOpen,
  onClose,
  imageUrl,
  title,
  year,
  description,
}: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative max-w-5xl max-h-[90vh] bg-[#2d1810] rounded-lg border-4 border-orange-500/50 shadow-[0_0_60px_rgba(255,111,0,0.4)] flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="absolute z-20 p-2 bg-[#2d1810] rounded-full border-2 border-orange-500/50 hover:border-orange-500 hover:bg-[#3d2820] transition-all shadow-lg"
            style={{ right: "1rem", top: "1rem" }}
          >
            <X className="w-6 h-6 text-orange-500" />
          </motion.button>

          {/* Image Container */}
          <div className="bg-[#1a0f0a] p-6 flex items-center justify-center overflow-auto">
            <img
              src={imageUrl}
              alt={title}
              className="max-w-full h-auto object-contain rounded"
              style={{ maxHeight: "calc(90vh - 200px)" }}
            />
          </div>

          {/* Info */}
          <div className="p-6 pt-4 bg-[#2d1810] border-t-2 border-orange-500/20">
            <div className="inline-block px-3 py-1 mb-4 bg-orange-500/20 border border-orange-500/50 rounded-full">
              <span className="text-orange-400 font-semibold tracking-wider">
                {year}
              </span>
            </div>
            <h3 className="text-2xl font-light text-[#f4e8d0] mb-3">{title}</h3>
            <p className="text-[#f4e8d0]/70 leading-relaxed">{description}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
