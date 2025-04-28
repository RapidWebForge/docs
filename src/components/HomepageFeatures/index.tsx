import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Genera Aplicaciones Web Sin Codificar',
    Svg: require('@site/static/img/undraw_programming_65t2.svg').default, // (más abajo te explico alternativas de imagen)
    description: (
      <>
        Crea proyectos frontend y backend completos sin escribir una sola línea de código. RapidWebForge genera automáticamente código en React, ExpressJS y MySQL.
      </>
    ),
  },
  {
    title: 'Aprende Programación Web Mientras Construyes',
    Svg: require('@site/static/img/undraw_online-learning_tgmv.svg').default,
    description: (
      <>
        RapidWebForge integra un modo de lectura del código generado, ideal para quienes desean entender y aprender cómo funcionan las aplicaciones web modernas.
      </>
    ),
  },
  {
    title: 'Despliegue Local Rápido y Profesional',
    Svg: require('@site/static/img/undraw_server-status_f685.svg').default,
    description: (
      <>
        Con soporte nativo para Nginx, puedes desplegar tus proyectos generados localmente con un flujo profesional, en cuestión de minutos.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
