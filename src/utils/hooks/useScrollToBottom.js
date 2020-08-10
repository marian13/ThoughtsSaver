const useScrollToBottom = (shouldScroll, scrollableRef) => {
  let maybeScrollToBottom;

  if (shouldScroll && scrollableRef.current) {
    maybeScrollToBottom = () => scrollableRef.current.scrollToEnd();
  } else {
    maybeScrollToBottom = () => {};
  }

  return maybeScrollToBottom;
};

export default useScrollToBottom;
