import React from "react";

import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import styled from "@emotion/styled"

const components = {

};

function MDX({ content, children, ...props }) {
    return (
        <MDXProvider components={components}>
            <MDXBody>
                <MDXRenderer {...props}>
                    {content}
                </MDXRenderer>
            </MDXBody>
        </MDXProvider>
    );
};

export default MDX;

const MDXBody = styled.div`
`;