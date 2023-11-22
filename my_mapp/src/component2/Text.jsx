import React from 'react'

const Text = (props) => {
    const { color, fontSize,children, text,...rest } = props
    console.log("color", color)
    console.log('fontsize',fontSize)
    return (
      <div>
            <p style={{
                color:color?color:'violet',
                fontSize: fontSize ? fontSize : '100px',
                fontWeight:'bold'
            }}>
                {text}
                {children}
          </p>
    </div>
  )
}

export default Text



// cai ma toan tu 3 ngoi la xet gia tri mac dinh
// tai gia tri ban dau khi ch co gi la undefined
// neu ban ko truyen gi thi no nhan gia tri mac dinh ban gan con neu ban gan gia tri thi no se hien ra gia tri ban muon
// co the biet {{color,fontSize}}
// thay vi muon them ca thuoc tinh nhu la fontWeight, chu nghieng, bla bla co the dung ...rest no se lay het thuoc tinh tren prop