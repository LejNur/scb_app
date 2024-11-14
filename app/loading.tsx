export default function Loading() {
  return (
    <div className="flex space-x-4 justify-center items-center bg-transparent h-screen">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 bg-chartreuse rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-chartreuse rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-chartreuse rounded-full animate-bounce"></div>
    </div>
  );
}
