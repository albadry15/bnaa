import React from 'react'

const Message = ({content,date,urs}) => {
  return (
      <div id='mess' className={urs?'':'come-mes'}>
        <div className='content' id={urs&&'ur-mes-co'}>
          <p className='name'>{urs?'انت':'الأدمن'}</p>
          <p className='the-text'>{content}</p>
          <span className='date'>{date}</span>
        </div>
      </div>
  )
};
export default Message;