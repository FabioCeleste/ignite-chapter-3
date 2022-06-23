import { GetStaticProps } from "next";
import Head from "next/head";

import styles from "./styles.module.scss";

export default function Post() {
  return (
    <>
      <Head>Posts | ignews</Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a monororepo</strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
              fugiat impedit voluptates reprehenderit voluptate? Vitae,
              repudiandae iste! Accusamus eaque iusto nemo. Quibusdam doloremque
              tenetur corporis quaerat reiciendis nemo rerum dolorem!
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a monororepo</strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
              fugiat impedit voluptates reprehenderit voluptate? Vitae,
              repudiandae iste! Accusamus eaque iusto nemo. Quibusdam doloremque
              tenetur corporis quaerat reiciendis nemo rerum dolorem!
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a monororepo</strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
              fugiat impedit voluptates reprehenderit voluptate? Vitae,
              repudiandae iste! Accusamus eaque iusto nemo. Quibusdam doloremque
              tenetur corporis quaerat reiciendis nemo rerum dolorem!
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
