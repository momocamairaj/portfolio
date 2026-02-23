import { useCallback, useEffect, useRef, useState } from "react";

function findClosestCardIndex(container, cards) {
  const containerRect = container.getBoundingClientRect();
  const centerX = containerRect.left + containerRect.width / 2;

  let closestIndex = 0;
  let closestDistance = Number.POSITIVE_INFINITY;

  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const distance = Math.abs(cardCenterX - centerX);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  return closestIndex;
}

export default function useCenteredCarousel(itemSelector = "[data-carousel-item]") {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const rafIdRef = useRef(null);
  const snapTimeoutRef = useRef(null);
  const lastSnappedIndexRef = useRef(-1);

  const scrollToIndex = useCallback((index, smooth = true) => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const cards = Array.from(container.querySelectorAll(itemSelector));
    const target = cards[index];
    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      block: "nearest",
      inline: "center"
    });
  }, [itemSelector]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return undefined;
    }

    const updateActiveCard = () => {
      const cards = Array.from(container.querySelectorAll(itemSelector));
      if (cards.length === 0) {
        return;
      }

      const closestIndex = findClosestCardIndex(container, cards);
      setActiveIndex(closestIndex);
    };

    const onScroll = () => {
      if (rafIdRef.current) {
        window.cancelAnimationFrame(rafIdRef.current);
      }

      rafIdRef.current = window.requestAnimationFrame(updateActiveCard);

      window.clearTimeout(snapTimeoutRef.current);
      snapTimeoutRef.current = window.setTimeout(() => {
        const cards = Array.from(container.querySelectorAll(itemSelector));
        const closestIndex = findClosestCardIndex(container, cards);

        if (closestIndex === lastSnappedIndexRef.current) {
          return;
        }

        lastSnappedIndexRef.current = closestIndex;
        scrollToIndex(closestIndex);
      }, 140);
    };

    const onResize = () => updateActiveCard();

    updateActiveCard();
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      if (rafIdRef.current) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
      window.clearTimeout(snapTimeoutRef.current);
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [itemSelector, scrollToIndex]);

  return {
    containerRef,
    activeIndex,
    scrollToIndex
  };
}
