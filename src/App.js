import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Container from './components/Container';

export default function App() {
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
        <Container title="Contacts">
          <Filter />
          <ContactList />
        </Container>
      </Section>
    </div>
  );
}
