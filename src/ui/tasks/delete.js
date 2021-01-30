const renderDeletedTask = (id) => {
  const UITaskCard = document.querySelector(`#${id}`)
  const UITaskColumn = UITaskCard.parentElement.parentElement;
  UITaskColumn.remove();
};

export default renderDeletedTask;
