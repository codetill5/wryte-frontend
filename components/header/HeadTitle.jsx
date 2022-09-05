import Head from "next/head";

const HeadTitle = ({pageTitle}) => {
    return ( 
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <title>{`${pageTitle} || Blogar - Personal Blog Next JS Template`}</title>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="Personal Blog Next JS Template" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
     );
}
 
export default HeadTitle;