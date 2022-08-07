function Filter({ value, onChangeFilter }) {
  return (
    <label>
      Find contact by name
      <input type="text" value={value} onChange={onChangeFilter} />
    </label>
  );
}

export default Filter;
