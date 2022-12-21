import React, { useState } from 'react'
import { render } from 'react-dom'

function Form() {
    const [check, setCheck] = useState(false)
  return (
<div>
        <form>
            <input disabled={check} type="text" name="name" placeholder='name' style={{display: 'block', }} />
            <input disabled={check} type="text" name="surname" placeholder='surname' style={{display: "block", marginTop: '40px'}}/>
            <label style={{display: 'block', margin: "60px"}}>
                <p style={{display: "block"}}>согласны на контракт с дьяволом?</p>
                <input type="checkbox" id='check' checked={check} onChange={()=>{setCheck(!check)}} />
                <button  disabled={!check}>кнопка</button>
            </label>
        </form>
    </div>
  )
}
export default Form