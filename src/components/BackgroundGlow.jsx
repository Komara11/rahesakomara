export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Cyan / Teal ambient glow - Left and top with slow breathing float */}
      <div 
        className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-cyan-500/15 blur-[140px] animate-ambient-1 pointer-events-none"
      />
      
      {/* Pink / Magenta ambient glow - Right with asynchronous slow breathing float */}
      <div 
        className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-pink-500/15 blur-[150px] animate-ambient-2 pointer-events-none"
      />
    </div>
  );
}
