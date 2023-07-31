import * as S from './styles'
import { useState } from 'react'
import { Copy } from '@styled-icons/boxicons-regular/Copy'
import { WhatsappShareButton } from 'react-share'
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Done } from '@styled-icons/material/Done'

export type ShareSocialsProps = {
  slug: string
}

const ShareSocials = ({ slug }: ShareSocialsProps) => {
  const link = `https://casadeplacas.com.br/comunicado/${slug}`
  const [isCopied, setIsCopied] = useState(false)
  const onCopyText = () => {
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 5000)
  }
  return (
    <S.Wrapper>
      <S.Links>
        <WhatsappShareButton url={link} title="olá" separator=" ">
          <Whatsapp size={25} />
        </WhatsappShareButton>
        <CopyToClipboard text={link} onCopy={onCopyText}>
          <S.Span>{isCopied ? <Done size={25} /> : <Copy size={25} />}</S.Span>
        </CopyToClipboard>
      </S.Links>
    </S.Wrapper>
  )
}

export default ShareSocials
