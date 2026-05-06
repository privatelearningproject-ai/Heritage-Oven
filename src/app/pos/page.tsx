export default function POSPage() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe 
        src="/pos/pos.html" 
        className="w-full h-full border-none"
        title="POS System"
      />
    </div>
  );
}
