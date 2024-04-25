const Button = props => {
  const {name, className} = props
  return <button className={`social-btn ${className}`}>{name}</button>
}

const element = (
  <div>
    <h1 className='main-heading'>Social Buttons</h1>
    <div className='btn-container'>
      <Button name='Like' className='like-btn' />
      <Button name='Comment' className='comment-btn' />
      <Button name='Share' className='share-btn' />
    </div>
  </div>
)

const rootElement = document.getElementById('root')
rootElement.className = 'bg-container'

ReactDOM.render(element, rootElement)
