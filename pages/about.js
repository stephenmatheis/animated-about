import { useEffect, useState } from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import Header from '@/components/header/header';
import Main from '@/components/main/main';
import styles from '@/styles/about.module.scss';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [fade, setFade] = useState(false);
    const speed = 70;

    useEffect(() => {
        if (!loading) {
            document.body.classList.remove('hidden');
            setFade(true);
        }

        return () => document.body.removeAttribute('style');
    }, [loading]);

    return (
        <>
            <Head>
                <title>Stephen Matheis</title>
                <meta name="description" content="Stephen Matheis" />
            </Head>
            <div id={styles['about']} className={classNames({ [styles['loading']]: loading })}>
                <Header
                    fade={fade}
                    loading={loading}
                    setLoading={setLoading}
                />
            </div>
        </>
    )
}