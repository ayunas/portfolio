import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ArticlesPage = () => {
    return (
        <Layout>
            <SEO title="Articles" />
            <div>These are my articles</div>
        </Layout>
    )
}

export default ArticlesPage;