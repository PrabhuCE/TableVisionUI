import { Provider } from 'react-redux';
import App, {Container} from 'next/app'
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/reducers/cartReducer';
import Head from 'next/head'
import React from 'react'

export default withRedux(initStore)(
    class MyApp extends App {

        static async getInitialProps ({ Component, ctx }) {
            return {
                pageProps: Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {}
            }
        }

        render () {
            const { Component, pageProps, store } = this.props

            let { query } = this.props.router;
            
            let style = 'style.css';
            if(query.style == 'default'){
                style = 'style.css'
            } else if (query.style == 'brink-pink') {
                style = 'brink-pink-style.css'
            } else if (query.style == 'pink') {
                style = 'pink-style.css'
            } else if (query.style == 'purple') {
                style = 'purple-style.css'
            }

            return (
                <Container>
                    <Head>
                        <title>TableVision</title>
                        <link rel="stylesheet" type="text/css" href={`/static/styles/${style}`} key="color" />
                    </Head>
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                </Container>
            )
        }
    }
)