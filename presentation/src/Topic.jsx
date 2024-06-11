function Topic({ topic, children }) {
  return (
    <>
      <h3>{topic.fullTitle}</h3>
      {children}
    </>
  );
}

export default Topic;
