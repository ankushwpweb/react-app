import React from 'react';

const Controlside = (props) => {
  return (
    <>
      <aside className={`control-sidebar control-sidebar-${props.mode} elevation-1`}>
        <div className="p-3">
          <div className="form-group">
            <div className="custom-control custom-switch custom-switch-off-gray custom-switch-on-gray">
              <input type="checkbox" className="custom-control-input" id="customSwitch3" onClick={props.toggleMode}/>
              <label className="custom-control-label" htmlFor="customSwitch3">{props.mode === 'light' ? 'Dark ' : 'Light '} Mode</label>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Controlside