/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable array-callback-return */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable camelcase */
const WordHyphenation = ({ text }: any) => {
  const textRed = text.split('.');
  return (
    <p className="card__subtitle-text">
      {textRed.map((el: any, index: any) => {
        if (index === 0) {
          return <span key={index}>{el}.</span>;
        }
        return <span key={index}>{el}</span>;
      })}
    </p>
  );
};

export default WordHyphenation;
