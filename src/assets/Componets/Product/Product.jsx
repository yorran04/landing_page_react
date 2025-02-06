import { FaArrowCircleLeft, FaArrowCircleRight, FaPlay } from "react-icons/fa";
import allStarImage from "../../tenis.png";

import './Product.css'
import { motion } from "framer-motion";

const slideUp = (delay) => ({
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: delay,
    },
  },
});

const Product = () => {
  return (
    <section className="product-session">
      <div className="product-container">
        <div className="brand-info">
          <div className="brand-text">
            <motion.h1
              variants={slideUp(0.3)}
              initial="hidden"
              animate="show"
              className="product-title"
            >
              Chuck Taylor All Star Lift Canvas Cano Alto Preto
            </motion.h1>
            <motion.div
              variants={slideUp(0.5)}
              initial="hidden"
              animate="show"
              className="product-description"
            >
              <h2>Origem do Chuck Taylor All Star Plataforma</h2>
              <p>
                O Chuck Taylor All Star Plataforma possui as mesmas
                características do cabedal do clássico Chuck Taylor All Star
                unindo com o solado plataforma trazendo um estilo único e
                moderno. Cabedal em lona para leveza e conforto e solado de
                borracha garantem melhor aderência.
              </p>
              <a href="#" className="more-info">Mais informações</a>
            </motion.div>
            <motion.div
            variants={slideUp(0.7)}
            initial="hidden"
            animate="show"
            className="size-selection">
            <p className="title-size">
                Selecione o seu tamanho (N)
            </p>
            <div className="size-option">
                <p className="size-box">sm</p>
                <p className="size-box">md</p>
                <p className="size-box">xl</p>
                <p className="size-box">38</p>
                <p className="size-box">39</p>
                <p className="size-box">40</p>
                <p className="size-box">42</p>
            </div>

            </motion.div>
          </div>
        </div>
        <div className="container-img-section">
            <motion.img
            initial={{opacity:0 , x: 100, rotate:20}}
            whileInView={{opacity: 1, x:0, rotate:0}}
            transition={{duration: 0.6, delay: 0.4}}
            src={allStarImage}       
            alt="Imagem de um tenis all star"    
            className="box-img">
            </motion.img>
            <motion.div
            initial={{opacity:0, scale:0} }
            whileInView={{opacity:1, scale:1}}
            transition={{duration:0.4, delay:0.4}}
            className="play-button">
            <a href="https://www.youtube.com/watch?v=DUaaByUpNVU"
            target="_blank"
            className="content-play">
                <button>
                <FaPlay/>
                <span>Play Vídeo</span>
            </button>
            </a>
          
            </motion.div>
        </div>
        <div className="rigth-section">
            <motion.p
            variants={slideUp(0.6)}
            initial='hidden'
            animate='show'
            className="rigth-description">
              <h3>CLÁSSICO ELEVADO</h3>  
              <p>Você já conhece os detalhes que começaram na quadra de basquete - aquela sola com padrão de diamante, o patch de tornozelo que é a assinatura. Pegamos o icônico design de cano alto do Chuck Taylor All Star e levantamos sua sola intermediária para torná-lo um favorito de plataforma para uso nas ruas. Crie a seguir.</p>
            </motion.p>
            <motion.div
            variants={slideUp(0.9)}
            initial='hidden'
            animate='show'
            className="navigation-icons"
            >
             
                <div className="arrow-icon">
                    <FaArrowCircleLeft className="icone"/>
                </div>
                <div className="arrow-icon">
                    <FaArrowCircleRight className="icone"/>
                </div>
           
            </motion.div>
        </div>
      </div>
      <motion.p
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration: 0.5, delay:0}}
      className="background-text"
      >
        All Star
      </motion.p>
      <div className="blur-circle"></div>
    </section>
  );
};

export default Product;
