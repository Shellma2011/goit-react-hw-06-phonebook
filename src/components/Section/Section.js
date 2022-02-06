import PropTypes from 'prop-types';
import { Title, SectionPhonebook } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionPhonebook>
      {title && <Title>{title}</Title>}
      {children}
    </SectionPhonebook>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
