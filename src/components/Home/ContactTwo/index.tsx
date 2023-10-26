import * as S from './styles'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })

  const animationVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }

  return (
    <S.Container>
      <S.SectionIntro>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={animationVariants}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <S.Phrase1 id="contactSection">
            QUAL SERÁ O NOSSO PRÓXIMO PROJETO?
          </S.Phrase1>
          <S.Phrase2>
            Envie-nos um e-mail para iniciarmos uma conversa:
            <p
              className="paragraph"
              onClick={() => {
                toast.success('Texto copiado com sucesso!', {
                  position: 'bottom-center',
                  autoClose: 1000,
                  closeOnClick: true,
                  progress: undefined,
                  theme: 'light'
                })
                navigator.clipboard.writeText('contato@orbi3d.com')
              }}
            >
              contato@orbi3d.com
            </p>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <ToastContainer />
          </S.Phrase2>
          <S.Phrase2>
            Se você precisar de orientação sobre quais informações devem ser
            fornecidas, basta entrar em contato conosco via whatsapp:
          </S.Phrase2>
          <S.Button className="cta-02">
            <S.Cta href="mailto:comercial@orbi3d.com">
              <span>ENTRAR EM CONTATO</span>
            </S.Cta>
          </S.Button>
        </motion.div>
      </S.SectionIntro>
    </S.Container>
  )
}

export default Contact
