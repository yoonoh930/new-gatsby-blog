import React from "react";
import { Link } from "gatsby"

import styled from "@emotion/styled";

class WikiItems extends React.Component {

    getUniqTags() {
        const tagList = [];
        this.props.wikiNodes.forEach(node => {
            tagList.push(...node.node.frontmatter.tags)
        });

        const uniqTags = [...new Set(tagList)];

        return uniqTags;
    };

    getTagsNodes() {
        const tags = this.getUniqTags();
        const tagsNode = {};

        tags.forEach(tag => {
            tagsNode[tag] = [];
        })

        // For each tag, add the md file to the list
        this.props.wikiNodes.forEach(node => {
            node.node.frontmatter.tags.forEach(tag => {
                tagsNode[tag].push({
                    path: node.node.fields.slug,
                    title: node.node.frontmatter.title,
                });
            });
        });
        return tagsNode;
    };

    render() {
        const tagsNode = this.getTagsNodes();

        const WikiContainer = styled.div`

        `;

        const WikiSectionContainer = styled.div`
        `;

        const WikiArticleContainer = styled.div`
        `;

        const WikiArticleLink = styled(Link)`
        `;

        return (
            <WikiContainer>
                {
                        Object.keys(tagsNode).map(tag => (
                        <WikiSectionContainer>
                            <h2>{tag}</h2>
                            <WikiArticleContainer>
                            {
                                tagsNode[tag].map(article => (
                                    <WikiArticleLink to={article.path} key={article.title}>
                                        <p>{article.title}&nbsp;</p>
                                    </WikiArticleLink>
                                ))
                            }
                            </WikiArticleContainer>
                        </WikiSectionContainer>  
                    ))                
                }
            </WikiContainer>
            // <>
            //     {posts.map(({ node }) => {
            //     const title = node.frontmatter.title || node.fields.slug
            //     return (
            //       <article key={node.fields.slug}>
            //         <header>
            //           <h3
            //             style={{
            //               marginBottom: rhythm(1 / 4),
            //             }}
            //           >
            //             <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            //               {title}
            //             </Link>
            //           </h3>
            //           <small>{node.frontmatter.date}</small>
            //         </header>
            //         <section>
            //           <p
            //             dangerouslySetInnerHTML={{
            //               __html: node.frontmatter.description || node.excerpt,
            //             }}
            //           />
            //         </section>
            //        </article>
            //     )
            //   })}
            
            // </>
        )
    }
}

export default WikiItems