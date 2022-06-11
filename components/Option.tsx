import IOption from '../interfaces/IOption'

const Option = ({ option }: { option: IOption }) => {
  return (
    <div className='rounded p-32 border' style={{ borderColor: option.color }}>
      <p>{option.name}</p>
    </div>
  )
}

export default Option
