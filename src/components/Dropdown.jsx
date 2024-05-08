const Dropdown = ({ options, selectedValue, onSelectedChange }) => {
  const renderOption = ({ value, title }) => {
    return (
      <option key={value} value={value}>
        {title}
      </option>
    )
  }

  const handleChange = (event) => {
    onSelectedChange(event.target.value)
  }

  return (
    <div style={{ marginTop: 10 }}>
      <select value={selectedValue} onChange={handleChange}>
        {options.map(renderOption)}
      </select>
    </div>
  )
}

export default Dropdown
