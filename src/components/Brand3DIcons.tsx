import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * 3D High-Relief Glossy Instagram Icon
 * Adheres strictly to the official camera geometry with physical embossed bevels,
 * specular reflection, glossy glass sheen and cast shadow.
 */
export const Instagram3DIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none group-hover:scale-105 transition-transform duration-200 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-[0_8px_16px_rgba(225,48,108,0.35)]"
      >
        <defs>
          {/* Main 3D Instagram Gradient */}
          <linearGradient id="ig3d-bg" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="5%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
          </linearGradient>

          {/* Gloss Specular Highlight (Diagonal Glass Sweep) */}
          <linearGradient id="ig3d-gloss" x1="0%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Inner Bevel Shadow */}
          <radialGradient id="ig3d-rim" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="80%" stopColor="#000000" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
          </radialGradient>

          {/* Emboss Filter */}
          <filter id="ig3d-emboss" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Base Squircle Container */}
        <rect
          x="4"
          y="4"
          width="92"
          height="92"
          rx="26"
          fill="url(#ig3d-bg)"
        />

        {/* 3D Rim / Metallic Edge */}
        <rect
          x="4"
          y="4"
          width="92"
          height="92"
          rx="26"
          fill="url(#ig3d-rim)"
          style={{ mixBlendMode: 'overlay' }}
        />

        {/* Specular Top Shine (Gloss) */}
        <path
          d="M 4 30 C 4 15.6 15.6 4 30 4 L 70 4 C 84.4 4 96 15.6 96 30 C 96 42 70 54 4 44 Z"
          fill="url(#ig3d-gloss)"
        />

        {/* Official Instagram Camera Glyph with High-Relief 3D White Enamel */}
        <g filter="url(#ig3d-emboss)">
          {/* Outer Rounded Frame */}
          <rect
            x="24"
            y="24"
            width="52"
            height="52"
            rx="15"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="7"
          />
          {/* Camera Lens */}
          <circle
            cx="50"
            cy="50"
            r="13"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="7"
          />
          {/* Flash Dot */}
          <circle
            cx="66"
            cy="34"
            r="3.5"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    </div>
  );
};

/**
 * 3D High-Relief Glossy WhatsApp Icon
 * Uses official WhatsApp speech bubble + telephone handset with specular dome reflection
 */
export const WhatsApp3DIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none group-hover:scale-105 transition-transform duration-200 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-[0_8px_16px_rgba(37,211,102,0.35)]"
      >
        <defs>
          <linearGradient id="wa3d-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2FE06E" />
            <stop offset="50%" stopColor="#25D366" />
            <stop offset="100%" stopColor="#1EBE5D" />
          </linearGradient>

          <linearGradient id="wa3d-gloss" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          <filter id="wa3d-emboss" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Outer Circular Disk */}
        <circle cx="50" cy="50" r="46" fill="url(#wa3d-bg)" />

        {/* Specular Crescent Sheen */}
        <path
          d="M 8 46 C 10 24 28 8 50 8 C 72 8 90 24 92 46 C 70 34 30 34 8 46 Z"
          fill="url(#wa3d-gloss)"
        />

        {/* Official WhatsApp Speech Bubble + Phone in Embossed 3D White Enamel */}
        <g filter="url(#wa3d-emboss)">
          {/* Bubble Contour */}
          <path
            d="M 50 20 C 33.4 20 20 33.4 20 50 C 20 56.2 21.9 61.9 25.2 66.7 L 22 78 L 33.8 74.9 C 38.4 78 44 80 50 80 C 66.6 80 80 66.6 80 50 C 80 33.4 66.6 20 50 20 Z"
            fill="#FFFFFF"
          />
          {/* Inner Phone cutout matching green */}
          <path
            d="M 40.5 35 C 39.8 35 38.6 35.3 37.6 36.4 C 36.6 37.5 33.8 40.1 33.8 45.4 C 33.8 50.7 37.7 55.7 38.2 56.4 C 38.7 57.1 45.7 67.8 56.5 72.4 C 65.5 76.2 67.3 74.4 69.3 74.2 C 71.3 74 75.8 71.5 76.7 69 C 77.6 66.5 77.6 64.4 77.3 64 C 77 63.6 76.2 63.3 75 62.7 C 73.8 62.1 67.9 59.2 66.8 58.8 C 65.7 58.4 64.9 58.2 64.1 59.4 C 63.3 60.6 61 63.5 60.3 64.3 C 59.6 65.1 58.9 65.2 57.7 64.6 C 56.5 64 52.6 62.7 48 58.6 C 44.4 55.4 42 51.5 41.3 50.3 C 40.6 49.1 41.2 48.4 41.8 47.8 C 42.3 47.3 43 46.4 43.6 45.7 C 44.2 45 44.4 44.5 44.8 43.7 C 45.2 42.9 45 42.2 44.7 41.6 C 44.4 41 42.1 35.4 41.2 33.2 C 40.3 31 39.4 31.1 38.7 31.1 Z"
            fill="#25D366"
            transform="scale(0.85) translate(8, 7)"
          />
        </g>
      </svg>
    </div>
  );
};

/**
 * Official Real WhatsApp Icon (Full-fidelity vector emblem)
 * Official green background / white phone in speech bubble
 */
export const WhatsAppOfficialIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 24,
  className = '',
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={`shrink-0 ${className}`}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.56 20.16 9.1 19.76 7.83 19.01L7.53 18.83L4.41 19.65L5.24 16.61L5.05 16.3C4.22 14.99 3.79 13.47 3.79 11.91C3.79 7.37 7.49 3.67 12.04 3.67C14.25 3.67 16.32 4.53 17.88 6.09C19.44 7.65 20.3 9.72 20.3 11.92C20.3 16.46 16.6 20.16 12.05 20.16ZM16.57 14.39C16.32 14.27 15.1 13.67 14.87 13.59C14.64 13.51 14.48 13.47 14.31 13.71C14.15 13.96 13.68 14.51 13.53 14.68C13.39 14.84 13.24 14.86 13 14.74C12.75 14.62 11.95 14.36 11 13.51C10.26 12.85 9.76 12.04 9.61 11.79C9.47 11.55 9.6 11.41 9.72 11.29C9.83 11.18 9.97 11 10.09 10.86C10.22 10.72 10.26 10.62 10.34 10.45C10.42 10.29 10.38 10.14 10.32 10.02C10.26 9.9 9.77 8.69 9.56 8.19C9.36 7.7 9.16 7.77 9.01 7.76C8.87 7.75 8.7 7.75 8.54 7.75C8.38 7.75 8.11 7.81 7.89 8.05C7.66 8.3 7.03 8.89 7.03 10.1C7.03 11.31 7.91 12.47 8.03 12.63C8.16 12.79 9.76 15.26 12.21 16.32C12.79 16.57 13.25 16.72 13.6 16.83C14.19 17.02 14.73 16.99 15.15 16.93C15.63 16.86 16.62 16.33 16.83 15.74C17.04 15.15 17.04 14.65 16.98 14.54C16.91 14.44 16.75 14.38 16.57 14.39Z" />
    </svg>
  );
};

/**
 * 3D High-Relief Glossy Google Maps Pin Icon
 * Official pin shape with vibrant 3D shading, metallic edge and gloss
 */
export const GoogleMaps3DIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none group-hover:scale-105 transition-transform duration-200 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-[0_8px_16px_rgba(234,67,53,0.35)]"
      >
        <defs>
          <radialGradient id="gmap-center" cx="50%" cy="38%" r="45%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#000000" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
          </radialGradient>

          <linearGradient id="gmap-gloss" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Shadow underneath */}
          <radialGradient id="gmap-shadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Pin Contact Shadow */}
        <ellipse cx="50" cy="92" rx="20" ry="5" fill="url(#gmap-shadow)" />

        {/* Main Pin Body Segments (Official Google Maps Pin colors with 3D gradient) */}
        {/* Red Top Dome */}
        <path
          d="M 50 10 C 32 10 18 24 18 42 C 18 64 45 84 50 88 C 55 84 82 64 82 42 C 82 24 68 10 50 10 Z"
          fill="#EA4335"
        />

        {/* Blue Lower Right Fold */}
        <path
          d="M 50 88 C 52 86 64 74 72 60 L 50 42 Z"
          fill="#4285F4"
        />

        {/* Green Lower Left Fold */}
        <path
          d="M 50 88 C 48 86 36 74 28 60 L 50 42 Z"
          fill="#34A853"
        />

        {/* Yellow Accent Notch */}
        <path
          d="M 28 60 C 23 52 20 44 20 40 L 40 40 Z"
          fill="#FBBC04"
        />

        {/* Pin Center Hole with Inset Depth */}
        <circle cx="50" cy="40" r="14" fill="#B3261E" />
        <circle cx="50" cy="40" r="11" fill="#18181B" />

        {/* Glass Dome Highlight */}
        <path
          d="M 24 38 C 24 24 36 14 50 14 C 64 14 76 24 76 38 C 65 30 35 30 24 38 Z"
          fill="url(#gmap-gloss)"
        />
      </svg>
    </div>
  );
};

/**
 * 3D High-Relief Glossy Google "G" & 5-Star Review Icon
 * Combines official Google 4-color 'G' with gold 3D star emboss
 */
export const Google3DReviewIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none group-hover:scale-105 transition-transform duration-200 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-[0_8px_16px_rgba(251,188,4,0.35)]"
      >
        <defs>
          <linearGradient id="g-plate" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A2A30" />
            <stop offset="100%" stopColor="#121215" />
          </linearGradient>

          <linearGradient id="g-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2A1" />
            <stop offset="40%" stopColor="#FBBC04" />
            <stop offset="100%" stopColor="#E37400" />
          </linearGradient>

          <linearGradient id="g-shine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
          </linearGradient>

          <filter id="star-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* 3D Circular Dark Metallic Disk */}
        <circle cx="50" cy="50" r="46" fill="url(#g-plate)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="46" fill="url(#g-shine)" />

        {/* Official Google "G" in Center */}
        <g transform="translate(18, 14) scale(0.64)">
          {/* Blue segment */}
          <path
            d="M 98 51 C 98 47.5 97.6 44.2 97 41 L 50 41 L 50 60 L 77 60 C 75.8 66.2 72.3 71.4 67 75 L 67 87 L 83 87 C 92.5 78.2 98 65.5 98 51 Z"
            fill="#4285F4"
          />
          {/* Green segment */}
          <path
            d="M 50 100 C 63.5 100 74.8 95.5 83 87 L 67 75 C 62.6 77.9 56.9 79.6 50 79.6 C 37 79.6 26 70.8 22 59.2 L 5.6 59.2 L 5.6 71.8 C 13.8 88.2 30.6 100 50 100 Z"
            fill="#34A853"
          />
          {/* Yellow segment */}
          <path
            d="M 22 59.2 C 21 56.2 20.4 53 20.4 49.7 C 20.4 46.4 21 43.2 22 40.2 L 22 27.6 L 5.6 27.6 C 2 34.8 0 42 0 49.7 C 0 57.4 2 64.6 5.6 71.8 L 22 59.2 Z"
            fill="#FBBC04"
          />
          {/* Red segment */}
          <path
            d="M 50 19.8 C 57.3 19.8 63.9 22.3 69.1 27.2 L 83.5 12.8 C 74.7 4.6 63.5 0 50 0 C 30.6 0 13.8 11.8 5.6 28.2 L 22 40.8 C 26 29.2 37 19.8 50 19.8 Z"
            fill="#EA4335"
          />
        </g>

        {/* 3D Golden Star Badge Overlay */}
        <g filter="url(#star-glow)">
          <path
            d="M 72 65 L 75 74 L 84 74 L 77 79 L 80 88 L 72 83 L 64 88 L 67 79 L 60 74 L 69 74 Z"
            fill="url(#g-gold)"
            stroke="#FFE770"
            strokeWidth="0.8"
          />
        </g>
      </svg>
    </div>
  );
};

/**
 * 3D High-Relief Vintage Barber Pole Icon
 * For the Pricing / Barbearia Table card
 */
export const BarberPole3DIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none group-hover:scale-105 transition-transform duration-200 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-[0_8px_16px_rgba(255,255,255,0.2)]"
      >
        <defs>
          <linearGradient id="pole-cap" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#71717A" />
            <stop offset="35%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#E4E4E7" />
            <stop offset="100%" stopColor="#52525B" />
          </linearGradient>

          <linearGradient id="glass-tube" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="15%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="85%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
          </linearGradient>

          <clipPath id="tube-clip">
            <rect x="36" y="24" width="28" height="52" rx="4" />
          </clipPath>
        </defs>

        {/* Outer Circular Disk */}
        <circle cx="50" cy="50" r="46" fill="#18181B" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

        {/* Top Spherical Chrome Cap */}
        <circle cx="50" cy="18" r="8" fill="url(#pole-cap)" />
        <path d="M 34 24 L 66 24 L 62 27 L 38 27 Z" fill="url(#pole-cap)" />

        {/* Bottom Chrome Base */}
        <path d="M 38 73 L 62 73 L 66 76 L 34 76 Z" fill="url(#pole-cap)" />
        <circle cx="50" cy="82" r="7" fill="url(#pole-cap)" />

        {/* Glass Cylinder Interior Stripes */}
        <g clipPath="url(#tube-clip)">
          {/* Base white background */}
          <rect x="36" y="24" width="28" height="52" fill="#FFFFFF" />

          {/* Red and Blue Diagonal Stripes */}
          <path d="M 30 15 L 75 40 L 75 50 L 30 25 Z" fill="#EF4444" />
          <path d="M 30 35 L 75 60 L 75 70 L 30 45 Z" fill="#3B82F6" />
          <path d="M 30 55 L 75 80 L 75 90 L 30 65 Z" fill="#EF4444" />
          <path d="M 30 -5 L 75 20 L 75 30 L 30 5 Z" fill="#3B82F6" />

          {/* Glass Specular Overlay */}
          <rect x="36" y="24" width="28" height="52" fill="url(#glass-tube)" />
          <line x1="42" y1="25" x2="42" y2="75" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.6" />
        </g>
      </svg>
    </div>
  );
};
