"use client";

import Image from "next/image";
import { Code2, MapPin } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";

export function ProfileVisual({ imageAvailable }: { imageAvailable: boolean }) {
  const [hasImage, setHasImage] = useState(imageAvailable);

  return (
    <div className="portrait-card" aria-label="Espacio reservado para la fotografía profesional">
      {hasImage ? (
        <Image
          src={profile.assets.photo}
          alt="Foto profesional"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 42vw"
          className="portrait-image"
          onError={() => setHasImage(false)}
        />
      ) : (
        <div className="portrait-placeholder">
          <span className="portrait-code"><Code2 size={38} /></span>
          <p>FOTO PROFESIONAL</p>
          <small>Incluye una fotografía profesional en public/images</small>
          <span className="location-chip"><MapPin size={14} /> {profile.location}</span>
        </div>
      )}
      <span className="portrait-sticker" aria-hidden="true">VP</span>
    </div>
  );
}
