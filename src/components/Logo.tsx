export function Logo({ className = "h-16 w-auto", title = "Thrive Pain Clinic, Wellness & More" }) {
  return (
    <img
      src="https://res.cloudinary.com/dizaawlyl/image/upload/v1790313841/Thrive_PNG_elut6a.png"
      alt={title}
      width={1920}
      height={878}
      className={`object-contain bg-white transition-all duration-200 ${className}`}
    />
  );
}
