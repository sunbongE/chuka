import * as m from '@common/modal/Modal.styled'
import { ModalType } from '@/types/commonType'

const index = ({ name, children, onClose }: ModalType) => {
  return (
    <>
      <m.Container>
        <m.BlackBox onClick={onClose} />
        <m.Wrap>
          <m.ModalName>{name}</m.ModalName>
          {children}
          <m.Backdrop>
            <img src="/icon/icon_close.png" alt="close" onClick={onClose} />
          </m.Backdrop>
        </m.Wrap>
      </m.Container>
    </>
  )
}

export default index
