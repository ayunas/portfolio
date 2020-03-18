import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <form>
                <input name="name" placeholder="Name"/>
                <input name="email" placeholder="email" type="email"/>
                <textarea name="message" placeholder="message" />
            </form>
        </Layout>
    )
}

export default ContactPage;