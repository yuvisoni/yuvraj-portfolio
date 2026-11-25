"use client";

import React from "react";

const DeveloperAvatar = () => {
  return (
    <div className="relative w-full h-full">
      {/* Background glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 via-violet-500/10 to-transparent blur-3xl" />
      
      {/* Main avatar container */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 animate-float"
      >
        {/* Background circle */}
        <circle cx="200" cy="200" r="180" fill="url(#avatarGrad)" fillOpacity="0.15" />
        <circle cx="200" cy="200" r="180" stroke="url(#borderGrad)" strokeWidth="1.5" strokeOpacity="0.3" />

        {/* Laptop base */}
        <rect x="100" y="230" width="200" height="12" rx="3" fill="#2d2d3d" />
        <rect x="105" y="228" width="190" height="4" rx="2" fill="#3d3d52" />
        
        {/* Laptop screen */}
        <rect x="115" y="155" width="170" height="78" rx="4" fill="#1a1a2e" stroke="#3d3d52" strokeWidth="1.5" />
        
        {/* Code lines on screen */}
        <rect x="125" y="166" width="45" height="4" rx="2" fill="#a855f7" fillOpacity="0.8" />
        <rect x="175" y="166" width="30" height="4" rx="2" fill="#c084fc" fillOpacity="0.5" />
        <rect x="135" y="176" width="60" height="4" rx="2" fill="#7c3aed" fillOpacity="0.6" />
        <rect x="200" y="176" width="25" height="4" rx="2" fill="#a855f7" fillOpacity="0.4" />
        <rect x="125" y="186" width="35" height="4" rx="2" fill="#8b5cf6" fillOpacity="0.7" />
        <rect x="165" y="186" width="50" height="4" rx="2" fill="#c084fc" fillOpacity="0.3" />
        <rect x="135" y="196" width="55" height="4" rx="2" fill="#a855f7" fillOpacity="0.5" />
        <rect x="195" y="196" width="20" height="4" rx="2" fill="#7c3aed" fillOpacity="0.6" />
        <rect x="125" y="206" width="40" height="4" rx="2" fill="#8b5cf6" fillOpacity="0.4" />
        <rect x="170" y="206" width="45" height="4" rx="2" fill="#c084fc" fillOpacity="0.5" />
        <rect x="125" y="216" width="28" height="4" rx="2" fill="#a855f7" fillOpacity="0.6" />

        {/* Person - Body */}
        <ellipse cx="200" cy="330" rx="55" ry="35" fill="#1a1a2e" />
        
        {/* Person - Torso / Hoodie */}
        <path
          d="M155 280 Q155 250 175 240 L225 240 Q245 250 245 280 L245 320 Q245 335 200 340 Q155 335 155 320 Z"
          fill="#2d1b4e"
        />
        <path
          d="M175 240 Q200 255 225 240"
          stroke="#3d2b5e"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Hoodie neckline */}
        <path
          d="M182 240 Q200 250 218 240"
          stroke="#a855f7"
          strokeWidth="1"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* Person - Head */}
        <ellipse cx="200" cy="210" rx="32" ry="36" fill="#d4a574" />
        
        {/* Hair */}
        <path
          d="M168 200 Q168 170 200 168 Q232 170 232 200 Q232 185 225 180 Q215 172 200 172 Q185 172 175 180 Q168 185 168 200Z"
          fill="#1a1a2e"
        />
        {/* Hair detail */}
        <path
          d="M172 195 Q180 175 200 172 Q220 175 228 195"
          stroke="#2d2d3d"
          strokeWidth="2"
          fill="none"
        />

        {/* Eyes */}
        <ellipse cx="189" cy="208" rx="4" ry="4.5" fill="#1a1a2e" />
        <ellipse cx="211" cy="208" rx="4" ry="4.5" fill="#1a1a2e" />
        <circle cx="190.5" cy="207" r="1.5" fill="white" fillOpacity="0.8" />
        <circle cx="212.5" cy="207" r="1.5" fill="white" fillOpacity="0.8" />

        {/* Eyebrows */}
        <path d="M183 200 Q189 196 195 199" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M205 199 Q211 196 217 200" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Smile */}
        <path
          d="M192 220 Q200 226 208 220"
          stroke="#1a1a2e"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Glasses */}
        <rect x="181" y="201" width="16" height="13" rx="4" stroke="#a855f7" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
        <rect x="203" y="201" width="16" height="13" rx="4" stroke="#a855f7" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
        <path d="M197 207 L203 207" stroke="#a855f7" strokeWidth="1.2" strokeOpacity="0.5" />

        {/* Arms reaching to laptop */}
        <path
          d="M160 270 Q140 260 135 235 Q133 225 140 225"
          stroke="#2d1b4e"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M240 270 Q260 260 265 235 Q267 225 260 225"
          stroke="#2d1b4e"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Hands */}
        <circle cx="140" cy="225" r="8" fill="#d4a574" />
        <circle cx="260" cy="225" r="8" fill="#d4a574" />

        {/* Floating elements */}
        {/* AI/ML icon */}
        <g className="animate-pulse-glow">
          <circle cx="85" cy="170" r="18" fill="#a855f7" fillOpacity="0.1" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.3" />
          <text x="85" y="175" textAnchor="middle" fill="#a855f7" fontSize="14" fontWeight="bold" fillOpacity="0.7">AI</text>
        </g>

        {/* Python icon */}
        <g className="animate-pulse-glow" style={{ animationDelay: "1s" }}>
          <circle cx="315" cy="165" r="16" fill="#8b5cf6" fillOpacity="0.1" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.3" />
          <text x="315" y="170" textAnchor="middle" fill="#8b5cf6" fontSize="11" fontWeight="bold" fillOpacity="0.7">Py</text>
        </g>

        {/* ML Badge */}
        <g className="animate-pulse-glow" style={{ animationDelay: "2s" }}>
          <circle cx="310" cy="270" r="15" fill="#c084fc" fillOpacity="0.1" stroke="#c084fc" strokeWidth="1" strokeOpacity="0.3" />
          <text x="310" y="275" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold" fillOpacity="0.7">ML</text>
        </g>

        {/* Code bracket */}
        <g className="animate-pulse-glow" style={{ animationDelay: "1.5s" }}>
          <text x="80" y="280" fill="#7c3aed" fontSize="20" fontWeight="bold" fillOpacity="0.4">{"</>"}</text>
        </g>

        {/* Decorative dots */}
        <circle cx="95" cy="130" r="3" fill="#a855f7" fillOpacity="0.3" />
        <circle cx="305" cy="125" r="2" fill="#c084fc" fillOpacity="0.3" />
        <circle cx="320" cy="310" r="2.5" fill="#8b5cf6" fillOpacity="0.2" />
        <circle cx="75" cy="310" r="2" fill="#a855f7" fillOpacity="0.2" />

        {/* Gradient definitions */}
        <defs>
          <radialGradient id="avatarGrad" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="borderGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default DeveloperAvatar;
