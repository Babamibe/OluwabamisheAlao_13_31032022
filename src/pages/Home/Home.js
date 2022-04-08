import React from 'react';
import FeatureItem from '../../components/FeatureItem/FeatureItem';
import Hero from '../../components/Hero/Hero';
import { featureItemContent } from '../../data/featureItemContent';

function Home(props) {
    return (
        <main>
            <Hero/>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {featureItemContent.map( item => {
                    return(
                        <FeatureItem
                        key={item.id}
                        src={item.src}
                        alt={item.alt}
                        title={item.title}
                        content={item.content}
                        />
                    )
                })}
            </section>
        </main>
    );
}

export default Home;