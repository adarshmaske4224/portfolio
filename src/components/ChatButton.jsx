const ChatButton = () => {
  return (
    <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 z-50">
      <span className="material-symbols-outlined">chat</span>
    </button>
  )
}

export default ChatButton
