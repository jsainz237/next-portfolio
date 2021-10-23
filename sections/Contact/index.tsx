import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { SectionTitle } from '../../components/common';
import { ContactForm } from './form';

export const Contact: React.FC = () => {
    return (
        <Row>
            <Col md={6}>
                <SectionTitle>Contact</SectionTitle>
                <ContactForm />
            </Col>
            <Col md={6}>
                
            </Col>
        </Row>
    )
}