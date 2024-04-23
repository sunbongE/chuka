
import { ModalType } from '@/types/commonType'
import * as r from '@common/responsiveModal/ResponsiveModal.styled'
import { useRecoilValue } from 'recoil'

const Index = ({ name, children, onClose }: ModalType) => {


  return (
    <>
      <r.BlackBox onClick={onClose} />
      <r.Container>
        <r.Wrap>
          <r.ModalName>{name}</r.ModalName>
          {children}
        </r.Wrap>
        <r.Backdrop>
          <img
            src={'/icon/icon_close.png'}
            alt=""
            onClick={onClose}
          />
        </r.Backdrop>
      </r.Container>
    </>
  )
}

export default Index
