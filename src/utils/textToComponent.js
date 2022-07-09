export const textToComponent = (text) => {
  return text.split('\n').map((text, idx) => (
    <div key={`messageComponent${idx}`}>
      {text}
      <br />
    </div>
  ));
};
