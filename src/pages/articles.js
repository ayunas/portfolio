import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Terminal from 'react-animated-term';

const ArticlesPage = () => {
    const termLines = [
        {
            'text' : "Articles coming soon...",
            'cmd' : true
        }
    ]


    return (
        <Layout>
            <SEO title="Articles" />
            <article>
                <h1 className="terminal-heading">
                    <Terminal lines={termLines} interval={80} />
                </h1>
            </article>
        </Layout>
    )
}

export default ArticlesPage;