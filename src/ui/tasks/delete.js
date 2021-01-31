const renderDeletedTask = (id) => {
  const UITaskCard = document.querySelector(`.card-${id}`);
  const UITaskColumn = UITaskCard.parentElement;
  UITaskColumn.remove();
};

export default renderDeletedTask;
