export function Logo({ className = "h-16 w-auto", title = "Thrive Pain Clinic, Wellness & More" }) {
  return (
    <img
      src="https://res.cloudinary.com/dizaawlyl/image/upload/v1790312385/WhatsApp_Image_2026-09-21_at_12.49.31_zt2me6.jpg"
      alt={title}
      width={1920}
      height={878}
      className={`object-contain transition-all duration-200 ${className}`}
    />
  );
}
