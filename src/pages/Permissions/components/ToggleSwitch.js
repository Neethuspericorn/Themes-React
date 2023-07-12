import '../../../design/custom/components/toggleswitch.scss';

import React from 'react'

function ToggleSwitch() {
  return (
    <>
    <label class="switch">
        <input type="checkbox"></input>
        <span class="slider round"></span>
    </label>
    </>
  )
}

export default ToggleSwitch