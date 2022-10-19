import Image from 'next/image'

export default function BackgroundImage(src, alt="") {
  return (
    <div style={{ position: 'absolute', height: '100%', width: '100%', overflow: 'hidden',  zIndex: '0' }}>
      <Image src={src} layout="fill" objectFit="cover" alt={alt} />
    </div>
  );
}
