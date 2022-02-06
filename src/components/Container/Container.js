import PropTypes from 'prop-types';
import { TitleContacts, ContainerContacts } from './Container.styled';

const Container = ({ title, children }) => (
  <ContainerContacts>
    {title && <TitleContacts>{title}</TitleContacts>}
    {children}
  </ContainerContacts>
);

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
