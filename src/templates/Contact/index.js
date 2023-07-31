import { Component } from 'react'
import { sendContactMail } from 'pages/api/mail-api'
import Base from 'templates/Base'
import * as S from './styles'
import { NextSeo } from 'next-seo'
import Button from 'components/Button'
import Socials from 'components/Socials'

class Contato extends Component {
  state = {
    formButtonDisabled: false,
    formButtonText: 'Enviar',
    name: '',
    mail: '',
    formContent: ''
  }

  render() {
    const { formButtonText, formButtonDisabled, name, mail, formContent } =
      this.state

    const btnClass = formButtonDisabled ? 'disabled' : ''

    return (
      <>
        <NextSeo
          title="Casa de Placas | Contato"
          description="Converse com um de nossos atendentes para tirar as suas
          dúvidas."
          canonical="https://casadeplacas.com.br/contato"
          openGraph={{
            url: 'https://casadeplacas.com.br/contato',
            title: 'Casa de Placas | Contato',
            description:
              'Converse com um de nossos atendentes para tirar as suas dúvidas.',
            images: [
              {
                url: 'https://casadeplacas.com.br/img/logoplacas.jpg',
                width: 1280,
                height: 720,
                alt: 'Casa de Placas'
              }
            ],
            site_name: 'Casa de Placas'
          }}
        />
        <Base>
          <S.ContactForm>
            <S.Content>
              <S.Column>
                <S.ContactTitle>Contato</S.ContactTitle>
                <S.ContactDescription>
                  <p>
                    Converse com um de nossos atendentes para tirar as suas
                    dúvidas.
                  </p>
                </S.ContactDescription>
                <Socials />
              </S.Column>
              <S.Column>
                <S.CardContact>
                  <S.CardDescription>
                    <S.Column>
                      <S.InputContainer>
                        <S.NewInput
                          type="text"
                          placeholder="Nome"
                          value={name}
                          name="name"
                          id="name"
                          onChange={this.onNameChange}
                          required
                        />
                        <S.NewInputLabel htmlFor="name" className="form__label">
                          Nome
                        </S.NewInputLabel>
                      </S.InputContainer>
                      <S.InputContainer>
                        <S.NewInput
                          type="email"
                          placeholder="E-Mail"
                          value={mail}
                          name="email"
                          id="email"
                          onChange={this.onMailChange}
                          required
                        />
                        <S.NewInputLabelEmail
                          htmlFor="email"
                          className="form__label"
                        >
                          E-mail
                        </S.NewInputLabelEmail>
                      </S.InputContainer>
                    </S.Column>
                    <S.TextArea
                      name="text"
                      placeholder="Mensagem"
                      value={formContent}
                      onChange={this.onFormContentChange}
                    />
                    <Button
                      className={btnClass}
                      type="submit"
                      size="medium"
                      onClick={this.submitContactForm}
                      disabled={formButtonDisabled}
                    >
                      {formButtonText}
                    </Button>
                  </S.CardDescription>
                </S.CardContact>
              </S.Column>
            </S.Content>
          </S.ContactForm>
        </Base>
      </>
    )
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value })
  }

  onMailChange = (event) => {
    this.setState({ mail: event.target.value })
  }

  onFormContentChange = (event) => {
    this.setState({ formContent: event.target.value })
  }

  submitContactForm = async (event) => {
    event.preventDefault()

    const recipientMail = 'websitecasadeplacas@gmail.com'
    const { name, mail, formContent } = this.state

    const res = await sendContactMail(recipientMail, name, mail, formContent)
    if (res.status < 300) {
      this.setState({
        formButtonDisabled: true,
        formButtonText: 'Email enviado com sucesso',
        name: '',
        mail: '',
        formContent: ''
      })
    } else {
      this.setState({ formButtonText: 'Por favor, preencha todos os campos' })
    }
  }
}

export default Contato
