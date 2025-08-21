import { useState, useEffect, useCallback } from 'react';

const messages = [
  "Hey! Thanks for reaching out 👋",
  "Reading your message…",
  "Looping in the right teammate…",
  "We'll reply shortly."
];

const TypingAnimation = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCaret, setShowCaret] = useState(true);

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const typeMessage = useCallback(() => {
    const currentMessage = messages[currentMessageIndex];
    
    if (prefersReducedMotion) {
      setDisplayedText(currentMessage);
      setIsTyping(false);
      return;
    }

    let charIndex = 0;
    setDisplayedText('');
    setIsTyping(true);

    const typeChar = () => {
      if (charIndex < currentMessage.length) {
        setDisplayedText(currentMessage.slice(0, charIndex + 1));
        charIndex++;
        // Random jitter between 28-68ms
        const delay = Math.random() * 40 + 28;
        setTimeout(typeChar, delay);
      } else {
        setIsTyping(false);
        // Pause after completing, then rotate to next message
        setTimeout(() => {
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        }, 1200);
      }
    };

    typeChar();
  }, [currentMessageIndex, prefersReducedMotion]);

  useEffect(() => {
    typeMessage();
  }, [typeMessage]);

  // Caret blinking effect - only when typing
  useEffect(() => {
    if (prefersReducedMotion || !isTyping) return;
    
    const caretInterval = setInterval(() => {
      setShowCaret(prev => !prev);
    }, 800);

    return () => clearInterval(caretInterval);
  }, [prefersReducedMotion, isTyping]);

  return (
    <div className="mt-8 h-20 flex items-start">
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">
          O
        </div>
        
        {/* Message Bubble */}
        <div className="max-w-[70ch]">
          <div className="bg-slate-50 dark:bg-white/6 border border-slate-200 dark:border-white/12 rounded-2xl px-4 py-3 shadow-sm dark:shadow-[0_0_0_1px_rgba(0,0,0,0.25)]">
            <div 
              className="text-sm leading-relaxed text-slate-900 dark:text-slate-200"
              role="status" 
              aria-live="polite" 
              aria-atomic="true"
            >
              <span>{displayedText}</span>
              {!prefersReducedMotion && isTyping && showCaret && (
                <span className="inline-block w-0.5 h-4 bg-slate-900 dark:bg-slate-200 ml-0.5" />
              )}
            </div>
            {/* Typing Dots - Below text inside bubble */}
            {isTyping && !prefersReducedMotion && (
              <div className="flex gap-1 mt-2">
                <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-pulse" style={{ animationDelay: '0ms', animationDuration: '1200ms' }} />
                <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-pulse" style={{ animationDelay: '150ms', animationDuration: '1200ms' }} />
                <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-pulse" style={{ animationDelay: '300ms', animationDuration: '1200ms' }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingAnimation;