/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

type NameSliceForSliderType = {
  text: any;
};
const NameSliceForSlider = (text: NameSliceForSliderType) => {
  const textString = text.text;
  const textMas = textString.split(' ');
  const lastWord = textMas[textMas.length - 1];
  const sliseText = textMas.slice(0, textMas.length - 1).join(' ');
  return (
    <>
      {sliseText}
      <br />
      <span>{lastWord}</span>
    </>
  );
};

export default NameSliceForSlider;
